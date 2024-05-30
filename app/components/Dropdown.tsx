import React, { useMemo } from "react";
import { Dropdown as NextUiDropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useState } from 'react';

const Dropdown = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["VIP"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
<div className="flex flex-col items-start">
  <label htmlFor="">
      نوع سرور را انتخاب کنید
  </label>
    <NextUiDropdown>
      <DropdownTrigger>
        <Button 
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(val) => {
          setSelectedKeys(val)
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