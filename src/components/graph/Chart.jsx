import React from 'react';
import { useEffect, useRef, useState, useSelector } from 'react-redux';
import { getTasks } from '../../redux/tasks/task-selectors';
import styles from './Chart.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function LineDemo() {
  const getAllTasks = useSelector(getTasks);
  const getAll = JSON.parse(JSON.stringify(getAllTasks));
  getAll[0].hoursWastedPerDay[0].singleHoursWasted = 3;
  getAll[1].hoursWastedPerDay[0].singleHoursWasted = 5;
  getAll[2].hoursWastedPerDay[0].singleHoursWasted = 4;

  getAll[0].hoursWastedPerDay[1].singleHoursWasted = 2;
  getAll[1].hoursWastedPerDay[1].singleHoursWasted = 6;
  getAll[2].hoursWastedPerDay[1].singleHoursWasted = 6;

  const sumRedLine = getAll.reduce(function (cnt, getAll) {
    return cnt + getAll.hoursPlanned;
  }, 0);

  const otherDaysRedLine = () => {
    console.log('Вызов функции');
    let arr = [];
    let sumAllRedLine = sumRedLine;

    for (let i = 0; i <= getAll[0].hoursWastedPerDay.length; i++) {
      sumAllRedLine -= sumRedLine / getAll[0].hoursWastedPerDay.length;
      arr.push(sumAllRedLine);
      console.log(arr);
    }
    return arr;
  };

  const otherDaysBlueLine = () => {
    let arrBlueLine = [];
    let multipleHoursWasted = _.flattenDeep(_.map(getAll, 'hoursWastedPerDay'));
    multipleHoursWasted = _.groupBy(multipleHoursWasted, 'currentDay');
    arrBlueLine = _.map(multipleHoursWasted, i => {
      return _.sumBy(i, i => i.singleHoursWasted);
    });
    return arrBlueLine;
  };

  const labelsDate = getAll[0].hoursWastedPerDay.map(i => i.currentDay);
  const data = {
    labels: labelsDate,
    datasets: [
      {
        label: 'Актуальные оставшиеся трудозатраты в часах',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
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
        data: [sumRedLine, ...otherDaysBlueLine()],
      },
      {
        label: 'Запланированные оставшиеся трудозатраты в часах',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(150,150,0,0.4)',
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
        pointRadius: 3,
        pointHitRadius: 10,
        data: [sumRedLine, ...otherDaysRedLine()],
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Burndown Chart (Calendar Team)</h2>
      <Line data={data} />
    </div>
  );
}

export default LineDemo;

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
