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
    
    const prices = sevenDayData && sevenDayData.price.map((el) => el)
    const labels = [...Array(sevenDayData.price.length).keys()];
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
          lineTension: 0,
          label: 'BTC',
          borderColor: lineColor,
          borderWidth: 2
        },
      ],
    };
    
      return <StyledChartLine>
                <Line options={options} data={data} />
            </StyledChartLine>
}