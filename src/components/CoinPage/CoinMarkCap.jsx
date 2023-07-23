import { useContext} from 'react';
import { CryptoContext } from '../../contexts/CyrptoContext';
import { FaCaretDown, FaCaretUp, FaSquarePlus} from  "react-icons/fa6";
import { CoinMarketCapStlye } from "../styled/CoinPage/CoinMarketCap.styled";
import MarketCapBar from '../Bars/MarketCapBar';

export default function CoinMarkCap({ individualCoin, loading, tableData }) {

    // state for vol
    
    const { currencyApi, symbol, formatNumber} = useContext(CryptoContext);

    if (loading) {
      return <div>Loading...</div>; 
    }

    return (
        <CoinMarketCapStlye>
        <ul className="top-ul">
        
            <li><FaSquarePlus className="sqaure"/>
                <span className='title'>Market Cap:</span>
                {symbol}{formatNumber(individualCoin.market_data.market_cap[currencyApi])} 
                <span className={individualCoin.market_data.market_cap_change_percentage_24h >= 0 ? 'green' : 'red'}>
                {individualCoin.market_data.market_cap_change_percentage_24h >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                <span>{Math.abs(individualCoin.market_data.market_cap_change_percentage_24h).toFixed(2)}%</span>
                </span>
            </li>

            <li><FaSquarePlus className="sqaure"/>
                <span className='title'>Fully Diluted Valuation:</span>
                <span>{symbol} {formatNumber(individualCoin.market_data.fully_diluted_valuation[currencyApi])} </span>
            </li>

            <li><FaSquarePlus className="sqaure"/>
                <span className='title'>Vol 24h:</span>
                <span>{formatNumber(tableData.total_volume)}</span>
            </li>

            <li><FaSquarePlus className="sqaure" />
                <span className='title'>Vol / Market:</span>
                <span>{formatNumber(tableData.total_volume / tableData.market_cap)}</span>
            </li>

        </ul>

        <ul className="btm-ul">
            <li><FaSquarePlus className="sqaure"/>
                <span className='tot-vol title'>Total Vol:</span>
                <span> {symbol}{individualCoin.market_data.total_volume[currencyApi]} </span>
            </li>

            <li><FaSquarePlus className="sqaure"/>
                <span className='title'>Circulating Supply:</span>
                <span>{individualCoin.market_data.circulating_supply}</span>
            </li>

            <li><FaSquarePlus className="sqaure"/>
                <span className='max-sup title' > Max Supply: </span>
                <span>{individualCoin.market_data.max_supply}</span>
            </li>
            <MarketCapBar progVal1={individualCoin.market_data.total_volume[currencyApi]} progVal2={individualCoin.market_data.circulating_supply} />
        </ul>
        </CoinMarketCapStlye>
    )
  }
  