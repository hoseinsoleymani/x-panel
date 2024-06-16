/* eslint-disable @typescript-eslint/no-shadow */
import { Input } from '@nextui-org/react';
import React from 'react';

import { Label } from '../../../components/shared';

const AccountName = () => {
  const [value, setValue] = React.useState('');

  const validateEmail = (value: any) =>
    value.match(/^[a-zA-Z]{3,}[a-zA-Z0-9]*$/i);

  const isInvalid = React.useMemo(() => {
    if (value === '') return false;

    return !validateEmail(value);
  }, [value]);
  return (
    <div>
      <Label>اسم اکانت</Label>
      <div className="relative flex items-center">
        <Input
          value={value}
          onValueChange={setValue}
          className="text-white"
          isInvalid={isInvalid}
          color={isInvalid ? 'danger' : 'success'}
          name="account-name"
          variant="faded"
          label="اسم اکانت"
        />
      </div>
    </div>
  );
};

export default AccountName;
