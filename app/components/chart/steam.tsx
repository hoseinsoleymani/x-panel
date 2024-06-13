import type { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import type { Props } from 'react-apexcharts';
import Chart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

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

  const options: Props['options'] = {
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
      foreColor: 'hsl(var(--nextui-default-800))',
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
          colors: 'hsl(var(--nextui-default-800))',
        },
      },
      axisBorder: {
        color: 'hsl(var(--nextui-nextui-default-200))',
      },
      axisTicks: {
        color: 'hsl(var(--nextui-nextui-default-200))',
      },
    },
    yaxis: {
      labels: {
        style: {
          // hsl(var(--nextui-content1-foreground))
          colors: 'hsl(var(--nextui-default-800))',
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: 'hsl(var(--nextui-default-200))',
      strokeDashArray: 0,
      position: 'back',
    },
    stroke: {
      curve: 'smooth',
      fill: {
        colors: ['red'],
      },
    },
    // @ts-ignore
    markers: false,
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="border-stroke pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 col-span-12 rounded-sm border px-5 pb-5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="max-w-45 flex w-full justify-end">
          <div className="bg-whiter dark:bg-meta-4 inline-flex items-center rounded-md p-1.5">
            <button className="shadow-card hover:shadow-card dark:bg-boxdark dark:hover:bg-boxdark rounded bg-white px-3 py-1 text-xs font-medium text-white hover:bg-white dark:text-white">
              Day
            </button>
            <button className="hover:shadow-card dark:hover:bg-boxdark rounded px-3 py-1 text-xs font-medium text-white hover:bg-white dark:text-white">
              Week
            </button>
            <button className="hover:shadow-card dark:hover:bg-boxdark rounded px-3 py-1 text-xs font-medium text-white hover:bg-white dark:text-white">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <Chart options={options} series={state} type="area" height={425} />
        </div>
      </div>
    </div>
  );
}
