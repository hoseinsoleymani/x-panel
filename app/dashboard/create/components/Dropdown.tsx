import {
  Button,
  Dropdown as NextUiDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React, { useMemo, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';

import { Label } from '../../../components/shared';

const Dropdown = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['VIP']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  const selectedServerType = [...selectedKeys.values()][0];

  return (
    <div className="flex flex-col items-start">
      <Label>نوع سرور خود را انتخاب کنید</Label>
      <NextUiDropdown>
        <DropdownTrigger>
          <Button className="capitalize">
            {' '}
            <IoIosArrowDropdown className="text-lg" /> {selectedValue}
          </Button>
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
          <DropdownItem className="text-black" key="subscription_vip">
            VIP
          </DropdownItem>
          <DropdownItem className="text-black" key="single_server">
            تک سرور VIP
          </DropdownItem>
        </DropdownMenu>
      </NextUiDropdown>
      <input type="hidden" name="server-type" value={selectedServerType} />
    </div>
  );
};

export default Dropdown;
