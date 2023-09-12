import { UserContext } from "../../contexts/UserContext";
import { StyledModal } from "../styled/CoinsPage/Modal.styled";
import { useContext } from "react";

export default function LoginModal({close}){
    
    const{ handleLoginFormChange, handleLoginSubmit } = useContext(UserContext)
    return(
        <StyledModal>
        <div className="login-modal">
            <div className="close-container">
                <span className="close-button" onClick={close} >X</span>
            </div>
            <div className="title">
                <h2>Log in</h2>
            </div>
            <form action="submit" method="POST" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" onChange={handleLoginFormChange}></input>
                <label htmlFor="password"> Password </label>
                <input required type="password" name="password" id="password" onChange={handleLoginFormChange}></input>
                <div className="button">
                    <button className="submit-btn"type="submit" onSubmit={handleLoginSubmit}>Login</button>
                </div>
            </form>
        </div>
        </StyledModal>
    )
}