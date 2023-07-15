import CoinTable from "../components/CoinTable";
import CoinChart from "../components/CoinChart";
import VolumeChart from "../components/VolumeChart";
import { CoinChartsWrapper } from "../components/styled/CoinChartsWrapper.styled";

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
