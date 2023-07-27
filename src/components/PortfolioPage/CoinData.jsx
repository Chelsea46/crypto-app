import { useContext, useState, useEffect} from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import StyledCoinData from "../styled/PortfolioPage/CoinData.styled";
import PortfolioBar from "../Bars/PorfolioBar";
import { FaTrashCan } from  "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

export const CoinData = () => {

    const {userCoinStats, searchData} = useContext(PortfolioContext);
    // state
    const [coinDetailState, setCoinDetailState] = useState(() => {
        const localStorageData = JSON.parse(localStorage.getItem("coinDetailState"));
        return localStorageData || [];
    });

    // uniqueId
    const uniqueId = uuidv4()
    
    

    // save to local storage
    async function getCoin(){
            if(userCoinStats.name && searchData.length){
                const coinDetails = searchData.find((coin) => {
                    if(coin.id == userCoinStats.name){
                        coin.myamount = userCoinStats.amount;
                        coin.purchaseDate = userCoinStats.date;
                    }
                    return coin.id == userCoinStats.name;
                })
                setCoinDetailState([...coinDetailState, coinDetails]);
            }
        }

     useEffect(() => {
         let localStorageActivity = JSON.parse(localStorage.getItem("coinDetailState")) || [];
        setCoinDetailState(localStorageActivity);
         getCoin();
     }, [userCoinStats, searchData]);
        
       
    useEffect(() => {
        localStorage.setItem("coinDetailState", JSON.stringify(coinDetailState));
    }, [coinDetailState]);
    
    // remove coin
    const handleRemove = (coin) => {
        setCoinDetailState((prevCoinDetailState) =>
            prevCoinDetailState.filter((c) => c.id !== coin.id)
        );
    };
    
    
    
  return (
    <StyledCoinData>
    {coinDetailState.map((coin) => {

      const currentPrice = parseFloat(coin.current_price) || 0;

      // calculate the "Old Value" and "Price change since purchase" for each coin
      const oldValue = coin.myamount * currentPrice || 0;
      const priceChangeSincePurchase = currentPrice !== 0 ? ((currentPrice - oldValue) / oldValue) * 100 : 0;
  
      // ensure the price change is not shown as negative when the current price is 0
      const formattedPriceChange = currentPrice !== 0 ? priceChangeSincePurchase.toFixed(2) : 0;
        
        return(
            <div className="coin-details-container" key={coin.id}>
                <div className="left">
                    <img src={coin.image} alt=""/>
                    <h3>{coin.name}</h3>
                    <p className="remove" onClick={() => handleRemove(coin)}><FaTrashCan/></p>
                </div>
                <div className="right">
                    <div className="market-price">
                        <p>Market Price:</p>
                        <div className="top-container">
                            <span><strong>Price now: </strong>
                                <span>{coin.current_price}</span>
                            </span> 
                            <span> <strong>Price change 24h:</strong>
                                <span>{coin.price_change_24h.toFixed(2)}</span>
                            </span> 
                            <span className="bar-span"> <strong>Vol/Mrkt Cap:</strong>
                                <span><PortfolioBar progVal1={coin.total_volume} progVal2={coin.market_cap}/></span>
                            </span> 
                            <span className="bar-span"><strong>Circ/Supply:</strong>
                                <span><PortfolioBar progVal1={coin.circulating_supply} progVal2={coin.max_supply}/></span>
                            </span> 
                        </div>
                        <p>Your Coin:</p>
                        <div className="bottom-container">
                            <span> <strong>Amount: </strong>
                                <span>{coin.myamount}</span>
                            </span> 
                            <span> <strong>Value:</strong> 
                                <span>{coin.myamount * coin.current_price.toFixed(2)}</span>
                            </span> 
                            <span> <strong>Price change since purchase:</strong>
                                <span>{formattedPriceChange}</span>
                            </span>
                            <span><strong>Purchase Date: </strong>
                                <span>{coin.purchaseDate}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )
        })}
    </StyledCoinData>
  )
}
