
import AssetsButtonStyled from "../styled/PortfolioPage/AssetsBtn.styled";

export default function AssetsButton({addModal}){
    
    return(
        <AssetsButtonStyled >
            <div className="button-container">
                <button onClick={addModal}>Add Assets</button>
            </div>
        </AssetsButtonStyled>
    )
}