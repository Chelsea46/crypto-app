import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledModal } from "../styled/CoinsPage/Modal.styled";

export default function RegisterModal({close}){


    
    return(
        <StyledModal>
        <div className="register-modal">
            <div className="close-container">
                <span className="close-button" onClick={close} >X</span>
            </div>
            <div className="title">
                <h2>Sign Up</h2>
            </div>
            <form action="submit" method="POST">
                <label htmlFor="name">User name</label>
                <input required type="text" id="name" name="name"/>
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="email"></input>
                <label htmlFor="password"> Password </label>
                <input required type="password" name="password" id="password"></input>
                <div className="button">
                    <button className="submit-btn"type="submit">Sign up now</button>
                    
                </div>
            </form>
        </div>
        </StyledModal>
    )
}