import { StyledChartLine } from './styled/ChartLine.styled';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
export default function Chartline({ sevenDayData, last7d }) {
    
    const prices = sevenDayData?.price;
    const labels = [...Array(30).keys()];
    const lineColor = last7d && last7d >= 0 ? '#00FF5F' : '#FE1040';
    
    const options = {
        scales: {
            x: {
                display: false,
              grid: {
                display: false
              },
              ticks: {
                display: false
              }
            },
            y: {
                display: false,
              grid: {
                display: false
              },
              ticks: {
                display: false
              },
            }
          },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        decimation: {
            enabled: true,
            algorithm: "min-max",
          },
        title: {
          display: false,
          text: 'Chart.js Bar Chart',
        },
      },
    };
   
    const data = {
      labels: labels,
      datasets: [
        {
          data: prices,
          fill: false,
          pointRadius: 0,
          lineTension: .5,
          label: 'BTC',
          borderColor: lineColor,
          borderWidth: 3
        },
      ],
    };

 
    
      return <StyledChartLine>
                <Line options={options} data={data}/>
            </StyledChartLine>
}