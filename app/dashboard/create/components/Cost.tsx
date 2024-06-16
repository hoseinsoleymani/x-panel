import { useCalculatorContext } from '@/app/hook/useCalculator';

const Cost = () => {
  const { price } = useCalculatorContext();

  return (
    <div className="flex items-center gap-2">
      <h5 className="text-tgray-100">هزینه ساخت:</h5>
      <div className="relative flex max-w-[11rem] items-center">
        {!(price === 'NaN' || typeof price !== 'number') ? (
          <span className="text-white">
            {price} <span className="text-sm text-tgray-200">تومان</span>
          </span>
        ) : null}
        <input type="hidden" value={price} name="account-price" />
      </div>
    </div>
  );
};

export default Cost;
