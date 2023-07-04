import { Line } from 'react-chartjs-2';
import { useContext } from 'react';
import { CryptoContext } from '../contexts/CyrptoContext';

export default function CoinChart(){
    
    const { coinChart } = useContext(CryptoContext); 

    return(
        <></>
            // <div className="chart-container">
            //   <h2 style={{ textAlign: "center" }}>Line Chart</h2>
            //   <Line
            //     data={coinChart}
            //     options={{
            //       plugins: {
            //         title: {
            //           display: true,
            //           text: "Users Gained between 2016-2020"
            //         },
            //         legend: {
            //           display: false
            //         }
            //       }
            //     }}
            //   />
            // </div>
    )
}