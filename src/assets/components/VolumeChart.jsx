import { useContext, useEffect } from 'react';
import moment from 'moment';
import { CryptoContext } from '../contexts/CyrptoContext';
import { StyledVolumeChart } from './styled/VolumeChart.styled';
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

        const { coinChart } = useContext(CryptoContext); 

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
              text: 'Chart.js Bar Chart',
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
                    <Bar options={options} data={data} />
                </StyledVolumeChart>;
  }
  