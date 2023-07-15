import { useContext } from 'react';
import { CryptoContext } from '../contexts/CyrptoContext';
import { StyledCoinTable } from "./styled/CoinTable.styled";
import { FaCaretDown, FaCaretUp } from  "react-icons/fa6";
import InfiniteScroll from 'react-infinite-scroll-component';
import ProgressBar from './ProgressBar';
import ChartLine from './ChartLine'


export default function CoinTable() {
  const { coinTable, formatNumber, getTableData, hasMore } = useContext(CryptoContext);

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
            <InfiniteScroll
                dataLength={coinTable.length} //This is important field to render the next data
                next={getTableData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
                }
                >
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
                        <td>
                             <ChartLine sevenDayData={coin.sparkline_in_7d} last7d={coin.price_change_percentage_7d_in_currency} />
                        </td>
                    </tr>
                ))}
                </InfiniteScroll>
            </tbody>
        </table>
    </StyledCoinTable>
  );
}
