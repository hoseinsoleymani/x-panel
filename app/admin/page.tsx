'use client';

import { FaUser } from 'react-icons/fa';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdCalendarMonth } from 'react-icons/md';
import Chart from 'react-apexcharts';

export default function Home() {
  const series = [
    {
      name: 'تعداد اکانت',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
      background: '#333', // پس‌زمینه تاریک
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2023-01-01',
        '2023-02-01',
        '2023-03-01',
        '2023-04-01',
        '2023-05-01',
        '2023-06-01',
        '2023-07-01',
        '2023-08-01',
        '2023-09-01',
        '2023-10-01',
        '2023-11-01',
        '2023-12-01',
      ],
    },
    tooltip: {
      x: {
        format: 'MM/yyyy',
      },
    },
    theme: {
      mode: 'dark', // تم تاریک
    },
    grid: {
      borderColor: '#444', // رنگ خطوط شبکه
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: '100%',
            height: 'auto',
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <section className="w-full   p-5">
      <div className="text-xl">
        <h1>سلام ابوالفضل خوش اومدی</h1>
      </div>
      <div id="chart">
        <Chart options={options} series={series} type="area" height={350} />{' '}
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-3 gap-10 grid-cols-1">
        <div className="flex flex-row items-center text-xl">
          <IoMdPersonAdd className="mx-2 text-green-600" />
          <span className="m-2">تعداد کل نماینده ها:</span>
          <span className="m-2">8</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <FaUser className="mx-2 text-green-600" />
          <span>کل فروش:</span>
          <span className="m-2">800.000.000</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <MdCalendarMonth className="mx-2 text-green-600" />
          <span>تعداد سرویس های فروخته شده:</span>
          <span className="m-2">120</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <IoMdPersonAdd className="mx-2 text-green-600" />
          <span className="m-2">تعداد کاربران آنلاین:</span>
          <span className="m-2">8</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <FaUser className="mx-2 text-green-600" />
          <span>تعداد کل یوزر های پنل:</span>
          <span className="m-2">800.000.000</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <MdCalendarMonth className="mx-2 text-green-600" />
          <span>تعداد سرویس های فروخته شده:</span>
          <span className="m-2">120</span>
        </div>
      </div>
    </section>
  );
}
