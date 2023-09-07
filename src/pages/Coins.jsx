import { useState } from "react";
import CoinTable from "../components/CoinsPage/CoinTable";
import CoinChart from "../components/CoinsPage/CoinChart";
import VolumeChart from "../components/CoinsPage/VolumeChart";
import RegisterModal from "../components/RegisterLogin/RegisterModal";
import LoginModal from "../components/RegisterLogin/LoginModal";
import { CoinChartsWrapper } from "../components/styled/CoinsPage/CoinChartsWrapper.styled";

export default function Coins({regModalClosed, close, loginModalClosed}) {

    return (
        <>
            <h2 className="overview">Overview</h2>
            < CoinChartsWrapper >
                < CoinChart />
                {!regModalClosed && < RegisterModal close={close} /> }
                {!loginModalClosed && < LoginModal close={close} /> }
                < VolumeChart />
            </ CoinChartsWrapper >
            < CoinTable />
       
        </>
    );
}
