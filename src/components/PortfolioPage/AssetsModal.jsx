import StyledAssetsModal from "../styled/PortfolioPage/AssetsModal.styled"

export default function AssetsModal({setModalClosed}){

    function close(){
        setModalClosed(true)
    }

    return(
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
                            <input type="text" placeholder="Coin Name..."/>
                            <input type="text" placeholder="Amount Owned..."/>
                            <input type="date" />
                        </div>
                </div>
                    <div className="btn-container">
                        <button className="close" onClick={close}>Close</button>
                        <button className="save">Save and Close</button>
                    </div>
            </div>
        </StyledAssetsModal>
    )
}