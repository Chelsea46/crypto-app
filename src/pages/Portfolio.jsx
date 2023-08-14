import { useState, useContext, useEffect} from "react";
import AssetsButton from "../components/PortfolioPage/AssetsButton";
import AssetsModal from "../components/PortfolioPage/AssetsModal";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { CoinData } from "../components/PortfolioPage/CoinData";
import {Container} from '../components/styled/Container.styled'


export default function Portfolio(){

    const {fetchApiData, setResults} = useContext(PortfolioContext)

    useEffect(() => {
        fetchApiData();
      }, []);
      
    // modal state
    const [modalClosed, setModalClosed] = useState(true);

    // modal open close function
    function addModal(){
        setModalClosed(false);
        setResults([])
    }


    return (
        <>
        <AssetsButton addModal={addModal} />
        <Container>
            <h2 className="stats">Your Stats</h2>
        </Container>
            {!modalClosed && <AssetsModal setModalClosed={setModalClosed}/>}
            <CoinData />
        </>
    )
}