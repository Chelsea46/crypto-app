import { useContext } from 'react';
import { CryptoContext } from '../contexts/CyrptoContext';
import { StyledCoinTable } from "../components/styled/CoinTable.styled";

export default function CoinTable() {
  const { coinTable } = useContext(CryptoContext);

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
                        <td>{parseFloat(coin.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                        <td>{parseFloat(coin.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                        <td>{parseFloat(coin.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                        <td>{coin.total_volume}</td>
                        <td>
                        {coin.circulating_supply} / {coin.total_supply}
                         </td>
                        <td>{coin.market_cap_change_percentage_7d_in_currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
 
    </StyledCoinTable>
  );
}
