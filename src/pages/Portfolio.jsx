import { useState } from "react";
import AssetsButton from "../components/PortfolioPage/AssetsButton";
import AssetsModal from "../components/PortfolioPage/AssetsModal";


export default function Portfolio(){
    
    const [modalClosed, setModalClosed] = useState(true);

    function addModal(){
        setModalClosed(false)
    }
    return (
        <>
           <AssetsButton addModal={addModal} />
           <h2>Your Summary</h2>
           {!modalClosed && <AssetsModal setModalClosed={setModalClosed}/>}
        </>
    )
}