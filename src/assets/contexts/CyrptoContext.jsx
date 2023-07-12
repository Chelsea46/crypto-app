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

    // api call for table on render
    useEffect(() => {
        axios.get(import.meta.env.VITE_TABLE_CHART_API)
        .then(response => setCoinTable(response.data))
    }, []);

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
    console.log(currencyApi)

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
    const value = { coinTable, coinChart, formatNumber, currencies, currencySelected };

    return (
        <CryptoContext.Provider value={value}>
        {props.children}
        </CryptoContext.Provider>
    );
}

export default CryptoContextProvider;
