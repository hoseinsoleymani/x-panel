'use client';

import dynamic from 'next/dynamic';

import { Card } from '../components/shared/Card';

const Chart = dynamic(
  () => import('@/app/components/chart/steam').then((mod) => mod.Steam),
  {
    ssr: false,
  },
);

export default function Dashboard() {
  return (
    <div className="h-full lg:px-6">
      <div className="mx-auto flex w-full flex-wrap justify-center gap-4  px-4 pt-3 sm:pt-10 lg:px-0 xl:flex-nowrap xl:gap-6">
        <div className="mt-6 flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold"></h3>
            <div className="grid w-full grid-cols-1 justify-center gap-5  md:grid-cols-2 2xl:grid-cols-3">
              <div />
            </div>
          </div>
          <div className="flex h-full max-w-[90rem] flex-col gap-2">
            <h3 className="text-xl font-semibold text-white">تعداد اکانت های خریداری شده</h3>
            <Card>
              <Chart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
