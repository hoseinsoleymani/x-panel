import { Select, SelectItem } from '@nextui-org/react';

import { useCalculatorContext } from '@/app/hook/useCalculator';

import { Label } from '../../../components/shared';

const UserLimitInput = () => {
  const { limit: value, setLimit: setValue, settings } = useCalculatorContext();

  if (!settings?.maxUserLimit) return;

  const limits = Array.from({ length: settings?.maxUserLimit }).reduce(
    (acc: { key: string; label: string }[], _, index) => {
      acc.push({ key: `${index + 1}`, label: `${index + 1}` });
      return acc;
    },
    [],
  );

  return (
    <div className="">
      <Label>یوزر لیمیت</Label>
      <div className="relative flex items-center">
        <Select
          dir="rtl"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          selectedKeys={[value]}
          label="."
        >
          {limits.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>

      <input type="hidden" name="user-limit" value={value} />
    </div>
  );
};

export default UserLimitInput;
