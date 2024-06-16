'use client';

import dynamic from 'next/dynamic';
import { MdVpnLock } from 'react-icons/md';

import { Card } from '../components/shared/Card';
import { OverviewCard } from './components/Card';

const Chart = dynamic(
  () => import('@/app/components/chart/steam').then((mod) => mod.Steam),
  {
    ssr: false,
  },
);

const overviewData = [
  {
    title: 'همه VPN ها',
    number: '3.456K',
    percentChanges: '0.43%',
    icon: (
      <div
        style={{ width: 58, height: 58 }}
        className="flex items-center justify-center rounded-full bg-tgreen-100"
      >
        <MdVpnLock className="text-2xl text-white" />
      </div>
    ),
  },
  {
    title: 'همه VPN ها',
    number: '3.456K',
    percentChanges: '0.43%',
    icon: (
      <div
        style={{ width: 58, height: 58 }}
        className="flex items-center justify-center rounded-full bg-torange"
      >
        <MdVpnLock className="text-2xl text-white" />
      </div>
    ),
  },
  {
    title: 'همه VPN ها',
    number: '3.456K',
    percentChanges: '0.43%',
    icon: (
      <div
        style={{ width: 58, height: 58 }}
        className="flex items-center justify-center rounded-full bg-tpurple"
      >
        <MdVpnLock className="text-2xl text-white" />
      </div>
    ),
  },
  {
    title: 'همه VPN ها',
    number: '3.456K',
    percentChanges: '0.43%',
    icon: (
      <div
        style={{ width: 58, height: 58 }}
        className="flex items-center justify-center rounded-full bg-tprimary-500"
      >
        <MdVpnLock className="text-2xl text-white" />
      </div>
    ),
  },
];

export default function Dashboard() {
  return (
    <div className="h-full lg:px-6">
      <div className="mx-auto flex w-full flex-wrap justify-center gap-4  px-4 pt-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
        <div className="mt-6 flex w-full flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {overviewData.map((item) => (
              <OverviewCard key={item.number} {...item} />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  تعداد اکانت های خریداری شده
                </h3>
                <Chart />
              </Card>
            </div>

            <Card>
              <h3 className="mb-4 text-xl font-semibold text-white">
                میزان درآمد بدست آمده در ماه جاری
              </h3>
              <Chart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
