import type { ReactNode } from 'react';

import { Card } from '@/app/components/shared/Card';

interface Props {
  icon: ReactNode;
  number: string;
  title: string;
  percentChanges: string;
}

export function OverviewCard({ icon, number, title, percentChanges }: Props) {
  return (
    <Card>
      {icon}
      <div className="mt-6">
        <span className="mb-1.5 text-xl font-bold text-white">{number}</span>
        <div className="mt-3 flex items-center justify-between">
          <h5 className="text-tgray-200">{title}</h5>
          <span className="text-tgreen-200">{percentChanges}</span>
        </div>
      </div>
    </Card>
  );
}
