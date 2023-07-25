import { useState, useContext, useEffect} from "react";
import AssetsButton from "../components/PortfolioPage/AssetsButton";
import AssetsModal from "../components/PortfolioPage/AssetsModal";
import { PortfolioContext } from "../contexts/PortfolioContext";


export default function Portfolio(){

    const {fetchApiData, setResults} = useContext(PortfolioContext)

    useEffect(() => {
        fetchApiData();
      }, []);
      
    // modal state
    const [modalClosed, setModalClosed] = useState(false);

    // modal open close function
    function addModal(){
        setModalClosed(false);
        setResults([])
    }

    return (
        <>
           <AssetsButton addModal={addModal} />
           <h2>Your Summary</h2>
           {!modalClosed && <AssetsModal setModalClosed={setModalClosed}/>}
        </>
    )
}