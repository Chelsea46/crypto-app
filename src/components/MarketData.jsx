import { useEffect, useState, useContext } from "react";
import { CryptoContext } from "../contexts/CyrptoContext";
import { StyledMarketData } from "./styled/MarketData.styled";
import DataBar from "./Bars/DataBar";
import axios from 'axios';

export default function MarketData(){

    const {formatNumber, coinTable} = useContext(CryptoContext)

    // state for market data
    const [markData, setMarkData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    

    // coin images

    const [btcImg, setBtcImg] = useState('');
    const [ethImg, setEthImg] = useState('');

    useEffect(() => {
        if(coinTable.length > 0){
            const findBtc = coinTable.find((coin) => coin.id === 'bitcoin');
            const findEth = coinTable.find((coin) => coin.id === 'ethereum');
            if(findBtc){
                setBtcImg(findBtc.image);
            }
            if(findEth){
                setEthImg(findEth.image);
            }
    }
    }, [coinTable])
    

    // api call for market data
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/global')
        .then(response => {
            setMarkData(response.data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return(
        <StyledMarketData >
            {markData && (
                <div className="data-container">
                    <ul>
                        <li>
                            <span><strong>Coins:</strong></span>{markData.data.active_cryptocurrencies}
                        </li>
                        <li>
                            <span><strong>Exchange:</strong></span>{markData.data.markets}
                        </li>
                        <li>
                            <span><strong>$</strong></span>{formatNumber(markData.data.market_cap_change_percentage_24h_usd)}
                        </li>
                        <li className="prog-bar-container">
                            <img src={btcImg} alt="" className="btc-img"/>
                            <span>{markData.data.market_cap_percentage.btc.toFixed(2)}%</span>
                            <DataBar 
                            progVal1={markData.data.total_market_cap.btc} progVal2={markData.data.market_cap_percentage.btc} />
                        </li>
                        <li className="prog-bar-container">
                            <img src={ethImg} alt="" className="eth-img"/>
                            <span>{markData.data.market_cap_percentage.eth.toFixed(2)}%</span>
                            <DataBar 
                            progVal1={markData.data.total_market_cap.eth} progVal2={markData.data.market_cap_percentage.eth} />
                        </li>
                    </ul>
                </div>
            )}
        </StyledMarketData>
    )
}

