'use client';

import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { DatePicker as NextUiDatePicker } from '@nextui-org/date-picker';
import { useEffect, useState } from 'react';

import { Label } from '@/app/components/shared';
import { useCalculatorContext } from '@/app/hook/useCalculator';

export const DatePicker = () => {
  const { date, setDate, settings } = useCalculatorContext();
  const [maxDate, setMaxDate] = useState<CalendarDate | undefined>();

  useEffect(() => {
    const todayDate = new Date();
    const calender = new CalendarDate(
      todayDate.getFullYear(),
      todayDate.getMonth() + 1,
      todayDate.getDate(),
    );
    setMaxDate(calender.add({ days: +settings?.maxExpirationTime }));
  }, [settings]);

  return (
    <div className="flex w-full flex-col gap-1">
      <Label>زمان اکانت</Label>
      <NextUiDatePicker
        label="."
        name="date"
        onChange={(e) => {
          setDate(`${e.month}/${e.day}/${e.year}`);
        }}
        variant="faded"
        minValue={today(getLocalTimeZone())}
        maxValue={maxDate}
      />
    </div>
  );
};
