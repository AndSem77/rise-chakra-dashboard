import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'My Balance',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#6EE7B7',
      borderColor: '#6EE7B7',
      borderCapStyle: 'butt',
      borderDashOffset: 0.0,
      borderJoinStyle: '#6EE7B7',
      pointBorderColor: '#6EE7B7',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#6EE7B7',
      pointHoverBorderColor: '#6EE7B7',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [500, 300, 400, 500, 800, 650, 700, 690, 1000, 1200, 1050, 1300],
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
      },
      // beginAtZero: true, // this works
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const MyChart = () => <Line data={data} options={options} />;

export default MyChart;
