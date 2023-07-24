import { useContext, useEffect } from 'react';
import moment from 'moment';
import { CryptoContext } from '../../contexts/CyrptoContext';
import { StyledVolumeChart } from '../styled/CoinsPage/VolumeChart.styled';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );
    
    export default function VolumeChart(){

        const { coinChart, currencyApi, symbol, formatNumber} = useContext(CryptoContext); 

        
        const todayText = new Date().toString().split(" ").splice(1, 3).join(" ");

        const generateChartLabels = () => {
            const labels = [];
            for (let i = 29; i >= 0; i--) {
              const date = moment().subtract(i, 'days');
              labels.push(date.format('DD'));
            }
            return labels;
          };

          const generateVolume = () => {
            if (!coinChart || !coinChart.total_volumes) {
              return [];
            }
            return coinChart.total_volumes.map((vol) => vol[1]);
          };

          const generateTodayVol = () => {
            if (!coinChart || !coinChart.total_volumes) {
              return [];
            }
            const todayDate = moment().format('YYYY-MM-DD');
            return coinChart.total_volumes
              .filter((vol) => moment(vol[0]).isSame(todayDate, 'day'))
              .map((vol) => formatNumber(vol[1]))
              .slice(0, 1);
          }
        
        const options = {
            scales: {
                x: {
                  display: false,
                  grid: {
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
            },
          },
        };
        
        const data = {
          labels: generateChartLabels(),
          datasets: [
            {
              label: 'Dataset 1',
              data: generateVolume(),
              backgroundColor: '#3C72E6',
            },
          ],
        };
        
          return <StyledVolumeChart>
                    <div className="barchart-text">
                      <p><strong> Volume 24h </strong></p>
                      <h1>{symbol}{generateTodayVol()}</h1>
                      <p><strong> {todayText} </strong></p>
                    </div>
                    <Bar options={options} data={data} />
                </StyledVolumeChart>;
  }
  