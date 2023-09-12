import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledModal } from "../styled/CoinsPage/Modal.styled";

export default function RegisterModal({close}){

    const{ handleRegisterFormChange, handleRegistrationSubmit} = useContext(UserContext)

    
    return(
        <StyledModal>
        <div className="register-modal">
            <div className="close-container">
                <span className="close-button" onClick={close} >X</span>
            </div>
            <div className="title">
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleRegistrationSubmit} method="POST">
                <label htmlFor="name">User name</label>
                <input required type="text" id="name" name="name" onChange={ handleRegisterFormChange}/>
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" onChange={ handleRegisterFormChange}></input>
                <label htmlFor="password"> Password </label>
                <input required type="password" name="password" id="password" onChange={ handleRegisterFormChange}></input>
                <div className="button">
                    <button className="submit-btn"type="submit" onClick={handleRegistrationSubmit}>Sign up now</button>
                    
                </div>
            </form>
        </div>
        </StyledModal>
    )
}