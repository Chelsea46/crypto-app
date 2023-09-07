import { StyledModal } from "../styled/CoinsPage/Modal.styled";

export default function LoginModal({close}){
    
    return(
        <StyledModal>
        <div className="login-modal">
            <div className="close-container">
                <span className="close-button" onClick={close} >X</span>
            </div>
            <div className="title">
                <h2>Log in</h2>
            </div>
            <form action="submit" method="POST">
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email"></input>
                <label htmlFor="password"> Password </label>
                <input required type="password" name="password" id="password"></input>
                <div className="button">
                    <button className="submit-btn"type="submit">Login</button>
                </div>
            </form>
        </div>
        </StyledModal>
    )
}