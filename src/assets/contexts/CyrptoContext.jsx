import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const CryptoContext = createContext();

function CryptoContextProvider(props) {

    // table api state
    const [coinTable, setCoinTable] = useState([])
    // chart api state
    const [coinChart, setCoinChart] = useState([])

    // api call for table
    useEffect(() => {
        axios.get(import.meta.env.VITE_TABLE_CHART_API)
        .then(response => setCoinTable(response.data))
    }, [])

    // api call for the chart
    // useEffect(() => {
    //     axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily')
    //     .then(response => setCoinChart(response.data))
    // }, [])


    // values to pass to components
    const value = { coinTable, coinChart };

    return (
        <CryptoContext.Provider value={value}>
        {props.children}
        </CryptoContext.Provider>
    );
}

export default CryptoContextProvider;
