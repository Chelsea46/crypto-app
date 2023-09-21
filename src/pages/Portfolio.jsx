import { useState, useContext, useEffect} from "react";
import AssetsButton from "../components/PortfolioPage/AssetsButton";
import AssetsModal from "../components/PortfolioPage/AssetsModal";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { UserContext } from "../contexts/UserContext";
import { CoinData } from "../components/PortfolioPage/CoinData";
import {Container} from '../components/styled/Container.styled';
import RegisterModal from "../components/RegisterLogin/RegisterModal";
import LoginModal from "../components/RegisterLogin/LoginModal";


export default function Portfolio(){

    const {fetchApiData, setResults} = useContext(PortfolioContext);

    const {isLoggedIn,
        cookieToken,
        userDetails,
        regModalClosed,
        loginModalClosed,
        addRegModal,
        addLoginModal } = useContext(UserContext);

    // modal state
    const [modalClosed, setModalClosed] = useState(true);

    useEffect(() => {
        if(!isLoggedIn && !cookieToken){
            console.log('User needs to log in')
        }else{
           console.log('logged in')
        }

      }, [cookieToken, isLoggedIn]);

      useEffect(()=>{
        fetchApiData();
      }, [cookieToken, isLoggedIn])
 

    // modal open close function
    function addModal(){
        setModalClosed(false);
        setResults([])
    }

    return (
        (isLoggedIn && cookieToken) ? (
            <>
            <Container>
                    <h1 className="welcome"> Hello, {userDetails.name}!</h1>
            </Container>
                <AssetsButton addModal={addModal} />
                <Container>
                    <h2 className="stats">Your Stats</h2>
                </Container>
                {!modalClosed && <AssetsModal setModalClosed={setModalClosed} />}
                <CoinData />
            </>
        ) : (
            <Container>
                <h2 className="reg-user-alert"> You must be a registered user to view this page</h2> 
                <div className="btns">
                    <button onClick={addLoginModal} className="login-btn">Login</button>
                    <button onClick={addRegModal} className="signup-btn">Sign up</button>
                </div>
                {!regModalClosed && < RegisterModal  /> }
                {!loginModalClosed && < LoginModal  /> } 
            </Container>
        )
    )
    
}