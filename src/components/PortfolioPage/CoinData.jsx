import { useContext, useState, useEffect} from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import StyledCoinData from "../styled/PortfolioPage/CoinData.styled";
import PortfolioBar from "../Bars/PorfolioBar";
import { FaTrashCan, FaPencil } from  "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';
import { EditDetailsModal } from "./EditDetailsModal";

export const CoinData = () => {

    const {userCoinStats, searchData, openEditModal, editDetailsModal, setUserCoinStats} = useContext(PortfolioContext);
    // state
    const [coinDetailState, setCoinDetailState] = useState([]);
    // state for localStorage
    const [localStorageState, setLocalStorageState] = useState([]);

    
    // save to local storage
    async function saveCoin(){
        if(userCoinStats.name && searchData.length){
            const coinDetails = searchData.find((coin) => {
                if(coin.id == userCoinStats.name){
                    coin.myamount = userCoinStats.amount;
                    coin.purchaseDate = userCoinStats.date;
                    coin.uniqueID = coinId;
                }
                return coin.id == userCoinStats.name;
            })
             setCoinDetailState((prevCoinDetailState) => [...prevCoinDetailState, coinDetails]);
            localStorage.setItem("coinDetailState", JSON.stringify([...coinDetailState, coinDetails]));
            setUserCoinStats({});
        }
    }

    // uniqueId
    const coinId = uuidv4()

    useEffect(() => {
        if(!localStorageState.length){
            let localStorageActivity = JSON.parse(localStorage.getItem("coinDetailState")) || [];
            setLocalStorageState(localStorageActivity);
            setCoinDetailState(localStorageActivity);
        }
        // saveCoin();
     }, []);

     useEffect(() => {
        saveCoin();
     }, [userCoinStats, searchData]);
        
     
    // remove coin
    const handleRemove = (coin) => {
        const updatedCoinDetailState = coinDetailState.filter((c) => c.uniqueID !== coin.uniqueID);

        // Update the state to remove the coin
        setCoinDetailState(updatedCoinDetailState);
    
        // Update localStorage with the updated coinDetailState by removing the 'coinDetailState' key
        localStorage.removeItem("coinDetailState");
    };
    
  return (
    <StyledCoinData>
    {coinDetailState && coinDetailState.map((coin) => {

      const currentPrice = parseFloat(coin.current_price) || 0;

      // calculate the "Old Value" and "Price change since purchase" for each coin
      const oldValue = coin.myamount * currentPrice || 0;
      const priceChangeSincePurchase = currentPrice !== 0 ? ((currentPrice - oldValue) / oldValue) * 100 : 0;
  
      // ensure the price change is not shown as negative when the current price is 0
      const formattedPriceChange = currentPrice !== 0 ? priceChangeSincePurchase.toFixed(2) : 0;
        
        return(
            <div className="coin-details-container" key={coin.uniqueID}>
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
                        {editDetailsModal && <EditDetailsModal coinDetailState={coinDetailState} setCoinDetailState={setCoinDetailState}/>}
                        <div className="edit">
                            <p>Your Coin:</p>
                            <span> <FaPencil className="pencil" onClick={() => openEditModal(coin.uniqueID)}/> </span>
                        </div>
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
