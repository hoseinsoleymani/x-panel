import { Input } from '@nextui-org/react';

import { Label } from '../../../components/shared';

const AccountName = () => {
  return (
    <div>
      <Label>اسم اکانت</Label>
      <div className="relative flex items-center">
        <Input
          className="text-white"
          name="account-name"
          variant="faded"
          label="اسم اکانت"
        />
      </div>
    </div>
  );
};

export default AccountName;
