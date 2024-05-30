import { Input } from '@nextui-org/react';
import { useState } from 'react';

import { Label } from '../../../components/shared';

const AccountName = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Label>اسم اکانت</Label>
      <div className="relative flex max-w-[11rem] items-center">
        <Input color="primary" />
      </div>
    </div>
  );
};

export default AccountName;
