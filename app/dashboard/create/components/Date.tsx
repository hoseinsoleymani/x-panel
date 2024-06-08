'use client';

import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date';
import { DatePicker as NextUiDatePicker } from '@nextui-org/date-picker';
import { useEffect, useState } from 'react';

import { Label } from '@/app/components/shared';

export const DatePicker = () => {
  const [date, setDate] = useState<CalendarDate | undefined>();

  useEffect(() => {
    const todayDate = new Date();
    const calender = new CalendarDate(
      todayDate.getFullYear(),
      todayDate.getMonth() + 1,
      todayDate.getDate(),
    );
    setDate(calender.add({ weeks: 4 }));
  }, []);

  return (
    <div className="flex w-full flex-col gap-1">
      <Label>زمان اکانت</Label>
      <NextUiDatePicker
        label="Date and time"
        name="date"
        minValue={today(getLocalTimeZone())}
        maxValue={date}
      />
    </div>
  );
};
