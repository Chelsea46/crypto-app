import { CryptoContext } from '../../contexts/CyrptoContext';
import { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from  "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { HighLowStlye } from '../styled/CoinPage/HighLow.styled';

export default function HighLow({individualCoin, loading, tableData}){
    // states from context
    const { currencyApi, symbol, coinTable } = useContext(CryptoContext);

    // state for percentage
    // const [percentageCoin, setPercentageCoin] = useState([])
    
    // useEffect(() => {
    //     if(individualCoin.id){
    //         const findCoin = coinTable.find(coin => {
    //             return coin.id == individualCoin.id;
    //         })
    //         if(findCoin){
    //             setPercentageCoin(findCoin);
    //         }
    //     }
    // }, [coinTable, individualCoin])
    console.log(tableData)

    if (loading || Object.keys(individualCoin).length === 0) {
        return <div>Loading...</div>;
    }

    // format ath atl dates
    const dateAth = new Date(individualCoin.market_data.ath_date[currencyApi]);
    const dateAtl = new Date(individualCoin.market_data.atl_date[currencyApi]);

    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateAth = dateAth.toLocaleString('en-US', options);
    const formattedDateAtl = dateAtl.toLocaleString('en-US', options);


      return (
         <HighLowStlye>
            <h2 className='current-price'>{symbol}{individualCoin.market_data.current_price[currencyApi]}</h2>

            {tableData &&  <p className={tableData.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'}>
            {tableData.price_change_percentage_24h_in_currency >= 0 ? <FaCaretUp /> : <FaCaretDown />}
            <span>{Math.abs(tableData.price_change_percentage_24h_in_currency).toFixed(2)}%</span>
            </p>}

            <BsStack className='stack'/>

            <div className="ath-atl-container">
                <div className="ath-list">
                    <ul>
                        <li><FaCaretUp className='green'/><span className='ath-title'>All time high:</span> {symbol}{individualCoin.market_data.ath[currencyApi]}</li>
                        {/* <li>{individualCoin.market_data.ath_change_percentage[currencyApi].toFixed(2)}%</li> */}
                        <li className='date'>{formattedDateAth}</li>
                    </ul>
                </div>
                <div className="atl-list">
                    <ul>
                    
                        <li><FaCaretDown className='red'/><span className='atl-title'>All time low:</span>{symbol}{individualCoin.market_data.atl[currencyApi]}</li>
                        {/* <li>{individualCoin.market_data.atl_change_percentage[currencyApi].toFixed(2)}%</li> */}
                        <li className='date'>{formattedDateAtl}</li>
                    </ul>
                </div>
            </div>
            </HighLowStlye>
      );
}