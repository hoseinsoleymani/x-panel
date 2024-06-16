/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import type { Props } from 'react-apexcharts';
import Chart from 'react-apexcharts';

export function Steam() {
  const state: Props['series'] = [
    {
      name: 'Series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Series2',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options: any = {
    chart: {
      type: 'area',
      animations: {
        easing: 'linear',
        speed: 300,
      },
      sparkline: {
        enabled: false,
      },
      brush: {
        enabled: false,
      },
      id: 'basic-bar',
      foreColor: '#fff',
      stacked: true,
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      labels: {
        // show: false,
        style: {
          colors: '#fff',
        },
      },
      axisBorder: {
        color: '#fff',
      },
      axisTicks: {
        color: '#fff',
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#fff',
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: '#fff',
      strokeDashArray: 0,
      position: 'back',
    },
    stroke: {
      curve: 'smooth',
      fill: {
        colors: ['red'],
      },
    },
    markers: false,
  };

  const handleReset = () => {};
  handleReset;

  return (
    <div className="col-span-12 rounded-sm px-2 pb-2 pt-4 sm:px-4">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full justify-end" />
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <Chart options={options} series={state} type="area" height={425} />
        </div>
      </div>
    </div>
  );
}
