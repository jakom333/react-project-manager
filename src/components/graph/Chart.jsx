import React from 'react';
import { useSelector } from 'react-redux';
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
    let arr = [];
    let sumAllRedLine = sumRedLine;

    for (let i = 0; i <= getAll[0].hoursWastedPerDay.length; i++) {
      sumAllRedLine -= sumRedLine / getAll[0].hoursWastedPerDay.length;
      arr.push(sumAllRedLine);
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
