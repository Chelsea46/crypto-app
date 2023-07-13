import CoinTable from "../assets/components/CoinTable";
import CoinChart from "../assets/components/CoinChart";
import VolumeChart from "../assets/components/VolumeChart";
import { CoinChartsWrapper } from "../assets/components/styled/CoinChartsWrapper.styled";

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
