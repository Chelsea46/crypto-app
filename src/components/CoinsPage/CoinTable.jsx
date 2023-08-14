import { useContext, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { CryptoContext } from '../../contexts/CyrptoContext';
import { StyledCoinTable } from "../styled/CoinsPage/CoinTable.styled";
import { FaCaretDown, FaCaretUp } from  "react-icons/fa6";
import InfiniteScroll from 'react-infinite-scroll-component';
import ProgressBar from '../Bars/ProgressBar';
import { BouncingDotsLoader } from '../BouncingLoader';
import ChartLine from './ChartLine';
import { BsFilter } from "react-icons/bs";



export default function CoinTable() {

  const { coinTable, formatNumber, getTableData, hasMore, searchInput, filteredSearch, clearSearch} = useContext(CryptoContext);
// state for top button
const [showTopButton, setShowTopButton] = useState(false);
// state for param filter
const [searchParams, setSearchParams] = useSearchParams();
// state for sorting table by name and asc or desc
const [sortState, setSortState] = useState({
    sortBy: '',
    sortByAsc: false,
  }); 

  
  //   show to top button
  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 200) {
              setShowTopButton(true);
            } else {
                setShowTopButton(false);
            }
        };
        // attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
        // clean the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // params sortBy function
    const handleSort = (filterKey) => {
       // current sorting key and order match the clicked column
    //    const isFilterActiveAndAscending = sortState.sortBy === filterKey && sortState.sortByAsc;
       // toggle by asc or desc
       const newSortByAsc =  !sortState.sortByAsc;
       // update sortState object with the new sorting key and order
       setSortState({ sortBy: filterKey, sortByAsc: newSortByAsc });
       // update searchParams object with new parameters
       setSearchParams({ sortBy: filterKey, sortByAsc: newSortByAsc.toString() });
     };

    //   sorting table on ascending or descending order
    const parsed = queryString.parse(location.search);
    
    useEffect(() => {
        if (parsed.sortBy === 'id' && parsed.sortByAsc === 'false') {
        coinTable.sort((a, b) => {
            if (a.id.toLowerCase() < b.id.toLowerCase()) return -1;
            if (a.id.toLowerCase() > b.id.toLowerCase()) return 1;
            return 0;
        });
        } else if (parsed.sortBy === 'id' && parsed.sortByAsc === 'true') {
        coinTable.sort((a, b) => {
            if (a.id.toLowerCase() > b.id.toLowerCase()) return -1;
            if (a.id.toLowerCase() < b.id.toLowerCase()) return 1;
            return 0;
        });
        } else if (parsed.sortBy === 'price' && parsed.sortByAsc === 'true') {
        coinTable.sort((a, b) => a.current_price - b.current_price);
        } else if (parsed.sortBy === 'price' && parsed.sortByAsc === 'false') {
        coinTable.sort((a, b) => b.current_price - a.current_price);
        } else if (parsed.sortBy === '1h' && parsed.sortByAsc === 'true') {
        coinTable.sort((a, b) => a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency);
        } else if (parsed.sortBy === '1h' && parsed.sortByAsc === 'false') {
        coinTable.sort((a, b) => b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency);
        } else if (parsed.sortBy === '24h' && parsed.sortByAsc === 'true') {
        coinTable.sort((a, b) => a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency);
        } else if (parsed.sortBy === '24h' && parsed.sortByAsc === 'false') {
        coinTable.sort((a, b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency);
        } else if (parsed.sortBy === '7d' && parsed.sortByAsc === 'true') {
        coinTable.sort((a, b) => a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency);
        } else if (parsed.sortBy === '7d' && parsed.sortByAsc === 'false') {
        coinTable.sort((a, b) => b.price_change_percentage_7d_in_currency - a.price_change_percentage_7d_in_currency);
        }
    }, [parsed, coinTable]);

  return (
    <StyledCoinTable>
                <InfiniteScroll
                    dataLength={coinTable.length} //This is important field to render the next data
                    next={getTableData}
                    hasMore={hasMore}
                    loader={<BouncingDotsLoader/>}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                    }
                    >
                    <table className="coin-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className='sort-by' onClick={() => handleSort('id')}>Name <BsFilter/> </th>
                                <th className='sort-by' onClick={() => handleSort('price')}>Price <BsFilter/> </th>
                                <th className='sort-by' onClick={() => handleSort('1h')}>1h <BsFilter/> </th>
                                <th className='sort-by' onClick={() => handleSort('24h')}>24h <BsFilter/> </th>
                                <th className='sort-by' onClick={() => handleSort('7d')}>7d <BsFilter/> </th>
                                <th>24h Vol/Market Cap</th>
                                <th>Circulating/Total Sup</th>
                                <th>Last 7d</th>
                            </tr>
                        </thead>
                    <tbody>
                    {filteredSearch.length > 0 && filteredSearch.map((coin, index) => (
                    <tr key={coin.id} >
                        <td>{index+1}</td>
                    
                        <td>
                        <div className="coin-name" onClick={clearSearch}>
                           <Link to={`/coin/${coin.id}`}>
                                <img src={coin.image} alt={coin.name} className="coin-table-img" />
                                <span>{coin.name}</span>
                            </Link>
                        </div>
                        </td> 
                        <td>{coin.current_price}</td>
                        <td className={coin.price_change_percentage_1h_in_currency >= 0 ? 'green' : 'red'}>
                        {coin.price_change_percentage_1h_in_currency >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                        <span>{Math.abs(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</span>
                        </td>
                        <td className={coin.price_change_percentage_24h_in_currency >= 0 ? 'green' : 'red'}>
                        {coin.price_change_percentage_24h_in_currency >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                        <span>{Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2)}%</span>
                        </td>
                        <td className={coin.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red'}>
                        {coin.price_change_percentage_7d_in_currency >= 0 ? <FaCaretUp /> : <FaCaretDown />}
                        <span>{Math.abs(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</span>
                        </td>
                        <td>
                        <ProgressBar formatNumber={formatNumber} progVal1={coin.total_volume} progVal2={coin.market_cap} />
                        </td>
                        <td>
                        <ProgressBar formatNumber={formatNumber} progVal1={coin.circulating_supply} progVal2={coin.total_supply} />
                        </td>
                        <td>
                        {coin.sparkline_in_7d ? (
                            <ChartLine sevenDayData={coin.sparkline_in_7d} last7d={coin.price_change_percentage_7d_in_currency} />
                        ) : (
                            <span>No data available</span>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
                </InfiniteScroll>
                <div className="container-top">
        {showTopButton && (
          <button className="top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          </button>
        )}
      </div>
    </StyledCoinTable>
  );
}
