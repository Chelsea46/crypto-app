import {useParams} from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CryptoContext } from '../contexts/CyrptoContext';
import axios from 'axios';
import CoinLink from '../components/CoinPage/CoinLink';
import HighLow from '../components/CoinPage/HighLow';
import CoinMarkCap from '../components/CoinPage/CoinMarkCap';
import CoinDesc from '../components/CoinPage/CoinDesc';
import {Container} from '../components/styled/Container.styled'

export default function Coin(){

  const { coinTable } = useContext(CryptoContext);

  // state for coinTable data
  const [tableData, setTableData] = useState([]);

    // params
    const {id} = useParams()
    
    // coin state
    const [individualCoin, setIndividualCoin] = useState([])
    // loading state
    const [isLoading, setIsLoading] = useState(true);

    // api call for individual coin
    useEffect(() => {
        axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
          )
          .then(response => {
            setIndividualCoin(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error(error);
            setIsLoading(false);
          });
      }, [id]);

      useEffect(() => {
        if (individualCoin.id) {
          const findCoin = coinTable.find(coin => coin.id === individualCoin.id);
          if (findCoin) {
            setTableData(findCoin);
          }
        }
      }, [coinTable, individualCoin]);
      
    return(
        <Container>
            <h2 className='summary'>Summary:</h2>
            <div className="coin-wrapper">
                < CoinLink individualCoin={individualCoin} loading ={isLoading}/> 
                < HighLow individualCoin={individualCoin} loading ={isLoading} tableData = {tableData} />
                < CoinMarkCap individualCoin={individualCoin} loading ={isLoading} tableData = {tableData} />
            </div>
            < CoinDesc individualCoin={individualCoin} loading ={isLoading} />
         </Container>
    )
}