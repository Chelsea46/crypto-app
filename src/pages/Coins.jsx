import { useContext } from "react";
import CoinTable from "../components/CoinsPage/CoinTable";
import CoinChart from "../components/CoinsPage/CoinChart";
import VolumeChart from "../components/CoinsPage/VolumeChart";
import RegisterModal from "../components/RegisterLogin/RegisterModal";
import LoginModal from "../components/RegisterLogin/LoginModal";
import { CoinChartsWrapper } from "../components/styled/CoinsPage/CoinChartsWrapper.styled";
import { UserContext } from "../contexts/UserContext";

export default function Coins() {
    const { regModalClosed, loginModalClosed } = useContext(UserContext);
    return (
        <>
            <h2 className="overview">Overview</h2>
            < CoinChartsWrapper >
                < CoinChart />
                {!regModalClosed && < RegisterModal  /> }
                {!loginModalClosed && < LoginModal  /> }
                < VolumeChart />
            </ CoinChartsWrapper >
            < CoinTable />
       
        </>
    );
}
