import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const CryptoContext = createContext();

function CryptoContextProvider(props) {

    // table api state on render
    const [coinTable, setCoinTable] = useState([]);
    // chart api state
    const [coinChart, setCoinChart] = useState([]);
    // currency selecting state
    const [currencyApi, setCurrencyApi] = useState('');
    // user country state
    const [country, setCountry] = useState('');

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
        case 'gb': setCurrencyApi('gbp');
        break;
        case 'usd': setCurrencyApi('usd');
        break;
        case country.includes(euroCountries): setCurrencyApi('eur');
        break;
        default: setCurrencyApi('btc')
        break;
      }
    }, [country])

    // api call for table
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyApi}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
        .then(response => setCoinTable(response.data))
    }, [country])


    // api call for the chart
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currencyApi}&days=30&interval=daily`)
        .then(response => setCoinChart(response.data))
    }, [currencyApi]);

     // currency
     const currencies = ['btc', 'usd', 'gbp', 'eur'];

    //  function for currency selection
    function currencySelected(e){
      setCurrencyApi(e.target.value);
    }

    // format Number
    function formatNumber(number) {
        if (number === null) {
            return 'N/A';
        }else if (number >= 1e12) {
            return (number / 1e12).toFixed(2) + 'T';
          } else if (number >= 1e9) {
            return (number / 1e9).toFixed(2) + 'B';
          } else if (number >= 1e6) {
            return (number / 1e6).toFixed(2) + 'M';
          } else {
            return number.toFixed(2);
          }
        }

    
    // values to pass to components
    const value = { coinTable, coinChart, formatNumber, currencies, currencySelected, currencyApi };

    return (
        <CryptoContext.Provider value={value}>
        {props.children}
        </CryptoContext.Provider>
    );
}

export default CryptoContextProvider;
