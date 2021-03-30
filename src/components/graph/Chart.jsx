import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import styles from './Chart.module.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://sbc-backend.goit.global';

const token = {
  set() {
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYyZDFmM2M5NGJkOTYyMTVhMjAyYTEiLCJzaWQiOiI2MDYzNWU0OGM5NGJkOTYyMTVhMjAyZmIiLCJpYXQiOjE2MTcxMjQ5MzYsImV4cCI6MTYxNzEyODUzNn0.1m-bVNO_N6krsdD620bo_VB4J6Uvv8YxNx6qFS_YuC0`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [graph, setGraph] = useState('false');
  const [graphData, setGraphData] = useState('');

  const chartGetTasks = () => {
    token.set();
    axios
      .get('/task/6062e64bc94bd96215a202b0')
      .then(data => {
        setGraphData(data.data);
        setGraph(true);
        console.log(graph);
      })
      .catch(error => console.log(error));
  };
  // const getAll = useSelector(allTasks);
  useEffect(() => {
    chartGetTasks();
  }, []);

  useEffect(() => {
    console.log(graph);
    if (graph) {
      const chartConfig = {
        type: 'line',
        data: {
          // labels: [graphData.map(i => [...i.hoursWastedPerDay[0].currentDay])],
          datasets: [
            {
              label: 'Актуальные оставшиеся трудозатраты в часах',
              data: [300, 200, 150, 400],
              backgroundColor: ['Red'],
              hoverBackgroundColor: ['Red'],
              fill: false,
              borderColor: 'Red',
              lineTension: 0.1,
            },
            {
              label: 'Запланированные оставшиеся трудозатраты в часах',
              data: [100, 200, 500, 50],
              backgroundColor: ['Blue'],
              hoverBackgroundColor: ['Blue'],
              fill: false,
              borderColor: 'Blue',
              lineTension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            // xAxes: [
            //   {
            //     type: 'time',
            //     position: 'bottom',
            //     time: {
            //       displayFormats: { day: 'MM/YY' },
            //       tooltipFormat: 'DD/MM/YY',
            //       unit: 'month',
            //     },
            //   },
            // ],
          },
        },
      };
      // graphData.map(i => console.log(i.hoursWastedPerDay[0].currentDay));

      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
    console.log(graphData);
  }, [chartContainer, graph, graphData]);

  return (
    <div className={styles.chartContainer}>
      <h1>Burndown Chart (Calendar Team)</h1>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;