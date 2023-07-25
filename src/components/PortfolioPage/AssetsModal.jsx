import { useContext } from "react";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import StyledAssetsModal from "../styled/PortfolioPage/AssetsModal.styled"
import { FaSearchDollar } from "react-icons/fa";
import moment from "moment";

export default function AssetsModal({ setModalClosed }) {

    // states from context
    const { saveData, handleSearchInput, ownedInput, handleDate, results, selectedCoin, dropdownOpen } = useContext(PortfolioContext);

    // function to close modal
    function close() {
        setModalClosed(true);
    }

    // function to save and close
    function saveAndClose(){
        saveData()
        close()
    }

    // current date
    const currentDate = moment().format("YYYY-MM-DD");

    return (
        <StyledAssetsModal>
        <div className="modal-container">
            <div className="title">
            <h2>Select Coin</h2>
            </div>
            <div className="modal-options">
            <div className="left">
                <ol>
                <li>Type coin name, then select from dropdown</li>
                <li>Select amount owned</li>
                <li>Select date of purchase</li>
                </ol>
            </div>
            <div className="right">
                <div className="search-bar">
                <input type="text" placeholder="Coin Name..." onChange={handleSearchInput} />
                </div>
                {dropdownOpen&& <div className="dropdown">
                    {results.map((result) => {
                        return(
                            <div key={result.id} className="option" onClick={selectedCoin}>
                                {result.id}
                            </div>
                        )
                    })}
                </div>}
                <input type="number" placeholder="Amount Owned..." onChange={ownedInput} />
                <input type="date" defaultValue={currentDate} onChange={handleDate} />
            </div>
            </div>
            <div className="btn-container">
            <button className="close" onClick={close}>Close</button>
            <button className="save" onClick={saveAndClose}>Save and Close</button>
            </div>
        </div>
        </StyledAssetsModal>
    )
    }

