import React, { useEffect, useRef, useState, Component } from 'react';
import styles from './Chart.module.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Актуальные оставшиеся трудозатраты в часах',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'red',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 80, 60, 40, 20, 0],
    },
    {
      label: 'Запланированные оставшиеся трудозатраты в часах',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(150,150,0,0.4)',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [100, 75, 70, 50, 30, 0],
    },
  ],
};

export default class LineDemo extends Component {
  render() {
    return (
      <div className={styles.chartContainer}>
        <h2>Burndown Chart (Calendar Team)</h2>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}

// axios.defaults.baseURL = 'https://sbc-backend.goit.global';

// const token = {
//   set() {
//     axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYyZDFmM2M5NGJkOTYyMTVhMjAyYTEiLCJzaWQiOiI2MDY0MTljNGM5NGJkOTYyMTVhMjAzMTYiLCJpYXQiOjE2MTcxNzI5MzIsImV4cCI6MTYxNzE3NjUzMn0.rOBbRDMTaciz1o_t5yTMYP8uMrIgCulLgCyu5SsqONE`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const Chart = () => {
//   const chartContainer = useRef(null);
//   const [chartInstance, setChartInstance] = useState(null);
//   const [graph, setGraph] = useState('false');
//   const [graphData, setGraphData] = useState('');

//   const chartGetTasks = () => {
//     token.set();
//     axios
//       .get('/task/6062e64bc94bd96215a202b0')
//       .then(data => {
//         setGraphData(data.data);

//         console.log(graph);
//       })
//       .then(setGraph(true))
//       .catch(error => console.log(error));
//   };

//   // const getAll = useSelector(allTasks);

//   useEffect(() => {
//     chartGetTasks();
//   }, []);

//   useEffect(() => {
//     console.log(graph);
//     if (graph) {
//       const chartConfig = {
//         type: 'line',
//         data: {
//           // labels: [graphData.map(i => [...i.hoursWastedPerDay[0].currentDay])],
//           datasets: [
//             {
//               label: 'Актуальные оставшиеся трудозатраты в часах',
//               data: [300, 200, 150, 400],
//               backgroundColor: ['Red'],
//               hoverBackgroundColor: ['Red'],
//               fill: false,
//               borderColor: 'Red',
//               lineTension: 0.1,
//             },
//             {
//               label: 'Запланированные оставшиеся трудозатраты в часах',
//               data: [100, 200, 500, 50],
//               backgroundColor: ['Blue'],
//               hoverBackgroundColor: ['Blue'],
//               fill: false,
//               borderColor: 'Blue',
//               lineTension: 0.1,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             // xAxes: [
//             //   {
//             //     type: 'time',
//             //     position: 'bottom',
//             //     time: {
//             //       displayFormats: { day: 'MM/YY' },
//             //       tooltipFormat: 'DD/MM/YY',
//             //       unit: 'month',
//             //     },
//             //   },
//             // ],
//           },
//         },
//       };
//       // graphData.map(i => console.log(i.hoursWastedPerDay[0].currentDay));

//       const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
//       setChartInstance(newChartInstance);
//     }
//     console.log(graphData);
//   }, [chartContainer, graph, graphData]);

//   return (
//     <div className={styles.chartContainer}>
//       <h1>Burndown Chart (Calendar Team)</h1>
//       <canvas ref={chartContainer} />
//     </div>
//   );
// };

// export default Chart;
