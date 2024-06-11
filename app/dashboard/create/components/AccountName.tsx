import { Input } from '@nextui-org/react';

import { Label } from '../../../components/shared';

const AccountName = () => {
  return (
    <div>
      <Label>اسم اکانت</Label>
      <div className="relative flex max-w-[11rem] items-center">
        <Input color="primary" name="account-name"  />
      </div>
    </div>
  );
};

export default AccountName;
