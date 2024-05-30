import { Input } from '@nextui-org/react';
import { useState } from 'react';

import { Label } from '../../../components/shared';

const Cost = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <Label>هزینه تمدید</Label>
      <div className="relative flex max-w-[11rem] items-center">
        <Input color="primary"  isDisabled/>
      </div>
    </div>
  );
};

export default Cost;
