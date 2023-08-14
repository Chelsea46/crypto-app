import { useState, createContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


export const CryptoContext = createContext();

function CryptoContextProvider(props) {

    // table api state on render
    const [coinTable, setCoinTable] = useState([]);
    // chart api state
    const [coinChart, setCoinChart] = useState([]);
    // currency selecting state
    const [currencyApi, setCurrencyApi] = useState('btc');
    // user country state
    const [country, setCountry] = useState('');
    // currency symbol
    const [symbol, setSymbol] = useState('');
    // set options country
    const [optionsCountry, setOptionsCountry] = useState('');
    // page state
    const [page, setPage] = useState(1);
    // has more state
    const [hasMore, setHasMore] = useState(true);
    // state for search
    const [searchInput, setSearchInput] = useState([]);
    // state for filtered search
    const [filteredSearch, setFilteredSearch] = useState([]);

    
    
   
    // lat and long
    useEffect(() => {
        const successCallback = async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const response = await axios.get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
          setCountry(response.data.address.country_code)
        };
        
        const errorCallback = (error) => {
          console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    // switch case for countries currency
    useEffect(() => {
      const euroCountries = ['es', 'de', 'pt', 'fr', 'ie', 'it', 'gr'];
      switch(country){
        case 'gb' : setCurrencyApi('gbp'), setSymbol('£'), setOptionsCountry('GBP');
        break;
        case 'usd' : setCurrencyApi('usd'), setSymbol('$'), setOptionsCountry('USD');
        break;
        case country.includes(euroCountries) : setCurrencyApi('eur'), setSymbol('€'), setOptionsCountry('EUR') ;
        break;
        default: setCurrencyApi('btc'), setSymbol('₿'), setOptionsCountry('BTC');
        break;
      }
    }, [country])

    // handle search
    function handleSearch(e){
      setSearchInput(e.target.value);
    }

    useEffect(() => {
      const filteredCoins = coinTable.filter((coin) => coin.id.includes(searchInput));
      setFilteredSearch(filteredCoins);
    }, [searchInput, coinTable]);

    useEffect(() => {
      if (filteredSearch.length < 1) {
        setFilteredSearch(coinTable);
      }
    }, [coinTable, filteredSearch]);

    // clear search
    function clearSearch(){
      setSearchInput('');
    }
    
    // call for table data
    async function getTableData(){
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyApi}&order=market_cap_desc&per_page=30&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
      // .then(response => setCoinTable(response.data))
      setCoinTable([...coinTable, ...response.data])
      setPage(page+1)
      setHasMore(response.data.length > 0)
    }
    
    // api call for the chart
    useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currencyApi}&days=30&interval=daily`)
      .then(response => setCoinChart(response.data))
    }, [currencyApi]);
    
    // currency
    const currencies = ['btc', 'usd', 'gbp', 'eur'];
    
    //  function for currency selection
    function currencySelected(e) {
      const selectedCurrency = e.target.value;
      setCurrencyApi(selectedCurrency);
      
      switch (selectedCurrency) {
        case 'gbp':
          setSymbol('£');
          setOptionsCountry('GBP');
          break;
          case 'usd':
            setSymbol('$');
            setOptionsCountry('USD');
            break;
            case 'eur':
              setSymbol('€');
              setOptionsCountry('EUR');
              break;
              default:
                setSymbol('₿');
                setOptionsCountry('BTC');
                break;
              }
            }
            
            // format Number
            function formatNumber(number) {
              if (number === null || typeof number === 'undefined') {
                return 'N/A';
              } else if (number >= 1e12) {
                return (number / 1e12).toFixed(2) + 'T';
              } else if (number >= 1e9) {
                return (number / 1e9).toFixed(2) + 'B';
              } else if (number >= 1e6) {
                return (number / 1e6).toFixed(2) + 'M';
              } else if (number >= 1e3) {
                return (number / 1e3).toFixed(2) + 'K';
              } else {
                return number.toFixed(2);
              }
            }
  
            // values to pass to components
            const value = { 
              coinTable, 
              coinChart, 
              formatNumber, 
              currencies, 
              currencySelected, 
              currencyApi, 
              symbol, 
              getTableData, 
              hasMore, 
              handleSearch,
              optionsCountry,
              filteredSearch,
              clearSearch,
              searchInput
    };

    
    
    return (
        <CryptoContext.Provider value={value}>
        {props.children}
        </CryptoContext.Provider>
    );
}

export default CryptoContextProvider;
