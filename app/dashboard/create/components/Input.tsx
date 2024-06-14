import { Select, SelectItem } from '@nextui-org/react';

import { useCalculatorContext } from '@/app/hook/useCalculator';

const NumberInput = () => {
  const {
    traffic: value,
    setTraffic: setValue,
    settings,
  } = useCalculatorContext();

  if (!settings?.maxTraffic) return;

  const numbers = Array.from({ length: settings?.maxTraffic }).reduce(
    (acc: { key: string; label: string }[], _, index) => {
      acc.push({ key: `${(index + 1) * 5}`, label: `${(index + 1) * 5}` });
      return acc;
    },
    [],
  );

  return (
    <div className="">
      <label
        htmlFor="bedrooms-input"
        className="mb-2 block text-sm font-medium text-white"
      >
        حجم درخواستی
      </label>
      <div className="relative flex items-center">
        <Select
          dir="rtl"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          label="."
          selectedKeys={[value]}
          placeholder="حجم را انتخاب کنید"
        >
          {numbers.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-tgray-200">
        بر اساس گیگابایت وارد کنید
      </p>

      <input type="hidden" name="amount" value={value} />
    </div>
  );
};

export default NumberInput;
