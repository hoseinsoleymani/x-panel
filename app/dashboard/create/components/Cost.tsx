import { Input } from '@nextui-org/react';

import { useCalculatorContext } from '@/app/hook/useCalculator';

import { Label } from '../../../components/shared';

const Cost = () => {
  const { price } = useCalculatorContext();

  return (
    <div className="flex items-center gap-3">
      <Label>هزینه ساخت</Label>
      <div className="relative flex max-w-[11rem] items-center">
        <Input color="primary" isDisabled value={price} />
      </div>
    </div>
  );
};

export default Cost;
