'use client';

import { useFormState } from 'react-dom';

import { Card } from '@/app/components/shared/Card';
import { CalculatorProvider } from '@/app/hook/useCalculator';

import { DatePicker } from '../../create/components/Date';
import type { CreateUserProps } from '../../create/components/Form';
import NumberInput from '../../create/components/Input';
import UserLimitInput from '../../create/components/UserLimitInput';
import { extention } from '../actions/extention';

const initialState = {
  message: '',
};

export function Extension({ prices, settings }: CreateUserProps) {
  const [state, formAction] = useFormState(extention, initialState);
  return (
    <CalculatorProvider prices={prices} settings={settings}>
      <Card>
        <form
          action={formAction}
          className="mt-6 grid grid-cols-1 gap-20 md:grid-cols-3"
        >
          <DatePicker />
          <NumberInput />
          <UserLimitInput />
        </form>
      </Card>
    </CalculatorProvider>
  );
}
