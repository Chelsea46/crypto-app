import { useContext } from 'react';
import { CryptoContext } from '../contexts/CyrptoContext';
import { StyledCoinTable } from "../components/styled/CoinTable.styled";
import { FaCaretDown, FaCaretUp } from  "react-icons/fa6";
import ProgressBar from './ProgressBar';
import ChartLine from '../components/ChartLine'


export default function CoinTable() {
  const { coinTable, formatNumber } = useContext(CryptoContext);

  return (
    <StyledCoinTable>
        <table className="coin-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>24h Vol/Market Cap</th>
                    <th>Circulating/Total Sup</th>
                    <th>Last 7d</th>
                </tr>
            </thead>
            <tbody>
                {coinTable.map((coin, index) => (
                    <tr key={coin.id} className='table-row'>
                        <td>{index + 1}</td>
                        <td>
                            <div className="coin-name">
                            <img src={coin.image} alt={coin.name} className="coin-table-img" />
                            <span>{coin.name}</span>
                            </div>
                        </td>
                        <td>{coin.current_price}</td>
                        <td className={coin.price_change_percentage_1h_in_currency >= 0 ? 'green' : 'red'} >{coin.price_change_percentage_1h_in_currency >= 0 ?
                            (<FaCaretUp />) : (<FaCaretDown /> )} 
                            <span>{Math.abs(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</span>
                        </td>
                        <td className={coin.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'} >{coin.price_change_percentage_24h_in_currency >= 0 ?
                            (<FaCaretUp />) : (<FaCaretDown /> )} 
                            <span>{Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2)}%</span>
                        </td>
                        <td className={coin.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red'}>{coin.price_change_percentage_7d_in_currency >= 0 ?
                            (<FaCaretUp />) : (<FaCaretDown /> )} 
                            <span>{Math.abs(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</span>
                        </td>
                        < ProgressBar formatNumber={formatNumber} progVal1={coin.total_volume} progVal2={coin.market_cap} />
                        < ProgressBar formatNumber={formatNumber} progVal1={coin.circulating_supply} progVal2={coin.total_supply}/>
                        {/* <td>
                            <div className="progress-container">
                                <div className="progress-label">
                                    <span className="bullet">•</span>
                                    <span>{formatNumber(coin.total_volume)}</span>
                                    <span className="bullet">•</span>
                                    <span>{formatNumber(coin.market_cap)}</span>
                                </div>
                                <progress
                                value={coin.total_volume}
                                max={coin.market_cap}
                                >
                                {((coin.total_volume / coin.market_cap) * 100).toFixed(2)}%
                                </progress>
                            </div>
                            </td> */}

                            {/* <td>
                            <div className="progress-container">
                                <div className="progress-label">
                                    <span className="bullet">•</span>
                                    <span>{formatNumber(coin.circulating_supply)}</span>
                                    <span className="bullet">•</span>
                                    <span>{formatNumber(coin.total_supply)}</span>
                                </div>
                                <progress
                                value={coin.circulating_supply}
                                max={coin.total_supply}
                                >
                                {((coin.circulating_supply / coin.total_supply) * 100).toFixed(2)}%
                                </progress>
                            </div>
                        </td> */}
                        <td>
                            <ChartLine sevenDayData={coin.sparkline_in_7d} last7d={coin.price_change_percentage_7d_in_currency} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </StyledCoinTable>
  );
}
