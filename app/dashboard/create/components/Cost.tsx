import { Input } from '@nextui-org/react';

import { useCalculatorContext } from '@/app/hook/useCalculator';

import { Label } from '../../../components/shared';

const Cost = () => {
  const { price } = useCalculatorContext();
console.log(price)
  return (
    <div className="flex items-center gap-3">
      <Label>هزینه ساخت</Label>
      <div className="relative flex max-w-[11rem] items-center">
        {!(price === 'NaN' || typeof price !== 'number') ? (
          <span className="text-white">{price}</span>
        ) : null}
        <input type="hidden" value={price} name="account-price" />
      </div>
    </div>
  );
};

export default Cost;
