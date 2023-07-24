import CoinTable from "../components/CoinsPage/CoinTable";
import CoinChart from "../components/CoinsPage/CoinChart";
import VolumeChart from "../components/CoinsPage/VolumeChart";
import { CoinChartsWrapper } from "../components/styled/CoinsPage/CoinChartsWrapper.styled";

export default function Coins() {

    return (
        <>
            <h2 className="overview">Overview</h2>
            < CoinChartsWrapper >
                < CoinChart />
                < VolumeChart />
            </ CoinChartsWrapper >
            < CoinTable />
        </>
    );
}
