import CoinTable from "../assets/components/CoinTable";
import CoinChart from "../assets/components/CoinChart";
import VolumeChart from "../assets/components/VolumeChart";
import { CoinChartsWrapper } from "../assets/components/styled/CoinChartsWrapper.styled";

export default function Coins() {

    return (
        <>
            <h1>Overview</h1>
            < CoinChartsWrapper >
                < CoinChart />
                < VolumeChart />
            </ CoinChartsWrapper >
            < CoinTable />
        </>
    );
}
