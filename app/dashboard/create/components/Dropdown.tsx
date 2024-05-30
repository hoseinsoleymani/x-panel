import {
  Button,
  Dropdown as NextUiDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React, { useMemo, useState } from 'react';

import { Label } from '../../../components/shared';

const Dropdown = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['VIP']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  return (
    <div className="flex flex-col items-start">
      <Label>نوع سرور خود را انتخاب کنید</Label>
      <NextUiDropdown>
        <DropdownTrigger>
          <Button className="capitalize">{selectedValue}</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={(val) => {
            setSelectedKeys(val);
          }}
        >
          <DropdownItem key="vip">VIP</DropdownItem>
          <DropdownItem key="one_server">تک سرور VIP</DropdownItem>
        </DropdownMenu>
      </NextUiDropdown>
    </div>
  );
};

export default Dropdown;
