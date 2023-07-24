import { useContext, useEffect } from 'react';
import moment from 'moment';
import { CryptoContext } from '../../contexts/CyrptoContext';
import { StyledCoinChart } from '../styled/CoinsPage/CoinChart.styled';
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
  
export default function CoinChart(){
    
    const { coinChart, symbol, formatNumber } = useContext(CryptoContext); 

    const generateChartLabels = () => {
        const labels = [];
        for (let i = 29; i >= 0; i--) {
          const date = moment().subtract(i, 'days');
          labels.push(date.format('DD'));
        }
        return labels;
      };
    
      const generatePrices = () => {
        if (!coinChart || !coinChart.prices) {
          return [];
        }
        return coinChart.prices.map((price) => price[1]);
      };
      
      const generateTodayPrice = () => {
        if (!coinChart || !coinChart.prices) {
          return [];
        }
        const todayDate = moment().format('YYYY-MM-DD');
        return coinChart.prices
          .filter((price) => moment(price[0]).isSame(todayDate, 'day'))
          .map((price) => formatNumber(price[1]))
          .slice(0, 1);
      }
      
    const todayText = new Date().toString().split(" ").splice(1, 3).join(" ");

    const options = {
        scales: {
            x: {
              display: false,
              grid: {
                display: false,
              }
            },
            y: {
                display: false,
              grid: {
                display: false,
              },
              ticks: {
                display: false
              },
            }
          },
        responsive: true,
        decimation: {
            enabled: true,
            algorithm: "min-max",
          },
        plugins: {
            legend: {
                display:false,
              },
          title: {
            display: false,
          },
        },
      };
  
    const data = {
      labels: generateChartLabels(),
      datasets: [
        {
          fill: true,
          label: 'Dataset 2',
          data: generatePrices(),
          borderColor: '#0CF864',
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgba(0, 255, 95, .5)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
            return gradient;
          },
          pointRadius: 0,
          borderWidth: 3,
        },
      ],
    };

    return <StyledCoinChart>
                <div className="chart-text">
                      <p><strong> Price </strong></p>
                      <h1>{symbol} {generateTodayPrice()}</h1>
                      <p><strong> {todayText} </strong></p>
                </div>
                
                <Line options={options} data={data} /> 
           </StyledCoinChart>;
}