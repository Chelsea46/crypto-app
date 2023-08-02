import { PortfolioContext } from "../../contexts/PortfolioContext";
import { useContext, useEffect, useState } from "react";
import EditModalStyled from "../styled/PortfolioPage/EditModal";

export const EditDetailsModal = ({coinDetailState, setCoinDetailState}) => {

     // states from context
     const { saveData, setEditDetailsModal, coinToEdit } = useContext(PortfolioContext);
    //  state for coin
    const [updatedCoin, setUpdatedCoin] = useState([]);
    // state for new data
    const [newData, setNewData] = useState([])
    

    // match coins
    useEffect(() => {
        const edittableCoin = coinDetailState.find((coin) => coin.uniqueID === coinToEdit);
        setUpdatedCoin(edittableCoin);
    }, [coinDetailState, coinToEdit]);

    // save values
    const editCoinUpdate = (data) => {
        const updatedCoinDetailState = coinDetailState.map((coin) => {
            if (coin.uniqueID === coinToEdit) {
                return {
                    ...coin,
                    myamount: data.myamount || coin.myamount,
                    purchaseDate: data.purchaseDate || coin.purchaseDate,
                };
            }
            return coin;
        });
        setCoinDetailState(updatedCoinDetailState);
        localStorage.setItem('coinDetailState', JSON.stringify(updatedCoinDetailState))
    };
    
    // function to edit values
    function editData(e){
        const { type, value } = e.target;
        if(type === 'date'){
            setNewData((prevData) => ({
                ...prevData,
                purchaseDate: value,
            }));
        }else if(type === 'number'){
            setNewData((prevData) => ({
                ...prevData,
                myamount: value,
            }));
        }
    }

     // function to close modal
     function close() {
        setEditDetailsModal(false)
     }

     // function to save and close
     function saveAndClose(){
        editCoinUpdate(newData)
        close()
     }
    
  

  return (
    <EditModalStyled>
            <div className="modal-container">
            <div className="title">
            <h2>Edit Coin</h2>
            </div>
            <div className="modal-options">
            <div className="left">
                <ol>
                <li>Select amount owned</li>
                <li>Select date of purchase</li>
                </ol>
            </div>
            <div className="right">
                <input type="number" placeholder={updatedCoin.myamount} defaultValue={updatedCoin.myamount} onChange={editData} />
                <input type="date" placeholder={updatedCoin.myamount} defaultValue={updatedCoin.purchaseDate} onChange={editData}/>
            </div>
            </div>
            <div className="btn-container">
                <button className="close" onClick={close}>Close</button>
                <button className="save" onClick={saveAndClose}>Save and Close</button>
            </div>
        </div>
    </EditModalStyled>
  )
}
