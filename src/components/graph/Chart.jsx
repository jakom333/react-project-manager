import React from 'react';
import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/tasks/task-selectors';
import styles from './Chart.module.css';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';

function LineDemo() {
  const getAll = useSelector(getTasks);
  const months = [
    '',
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

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

  const result = labelsDate.map(day => {
    const arr = day.split('-');
    return `${arr[2]} ${months[arr[1].replace(/(^|\s)0/g, '$1')]}`;
  });
  const data = {
    labels: result,
    datasets: [
      {
        label: 'Actual remaining labor in hours',
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
        label: 'Planned remaining work in hours',
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
      <div className={styles.graphcontainer}>
        <Line
          data={data}
          // (windows.width = 1200 ? 900 : 500)
          width={900}
          height={460}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}

export default LineDemo;
