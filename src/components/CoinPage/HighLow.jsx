import { CryptoContext } from '../../contexts/CyrptoContext';
import { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from  "react-icons/fa6";
import { BsStack } from "react-icons/bs";
import { HighLowStlye } from '../styled/CoinPage/HighLow.styled';

export default function HighLow({individualCoin, loading}){
    // states from context
    const { currencyApi, symbol, coinTable } = useContext(CryptoContext);

    // state for percentage
    const [percentageCoin, setPercentageCoin] = useState([])
    
    useEffect(() => {
        if(individualCoin.id){
            const findCoin = coinTable.find(coin => {
                return coin.id == individualCoin.id;
            })
            if(findCoin){
                setPercentageCoin(findCoin);
            }
        }
    }, [coinTable, individualCoin])
    
    if (loading || Object.keys(individualCoin).length === 0) {
        return <div>Loading...</div>;
    }

    // format ath atl dates
    const dateAth = new Date(individualCoin.market_data.ath_date[currencyApi]);
    const dateAtl = new Date(individualCoin.market_data.atl_date[currencyApi]);
    const formattedDateAth = `${dateAth.getDate()}-${dateAth.getMonth() + 1}-${dateAth.getFullYear()}`;
    const formattedDateAtl = `${dateAtl.getDate()}-${dateAtl.getMonth() + 1}-${dateAtl.getFullYear()}`;
  
    console.log(individualCoin)

    console.log(coinTable)

    // console.log(percentageCoin)
      return (
         <HighLowStlye>
            <h2 className='current-price'>{symbol}{individualCoin.market_data.current_price[currencyApi]}</h2>

            {percentageCoin &&  <p className={percentageCoin.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'}>
            {percentageCoin.price_change_percentage_24h_in_currency >= 0 ? <FaCaretUp /> : <FaCaretDown />}
            <span>{Math.abs(percentageCoin.price_change_percentage_24h_in_currency).toFixed(2)}%</span>
            </p>}

            <BsStack className='stack'/>

            <div className="ath-atl-container">
                <div className="ath-list">
                    <p className='ath-title'>ATH:</p>
                    <ul>
                        <li>{symbol}{individualCoin.market_data.ath[currencyApi]}</li>
                        <li>{individualCoin.market_data.ath_change_percentage[currencyApi].toFixed(2)}%</li>
                        <li>{formattedDateAth}</li>
                    </ul>
                </div>
                <div className="atl-list">
                    <p className='atl-title'>ATL:</p>
                    <ul>
                        <li>{symbol}{individualCoin.market_data.atl[currencyApi]}</li>
                        <li>{individualCoin.market_data.atl_change_percentage[currencyApi].toFixed(2)}%</li>
                        <li>{formattedDateAtl}</li>
                    </ul>
                </div>
            </div>
            </HighLowStlye>
      );
}