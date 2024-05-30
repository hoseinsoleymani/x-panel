"use client";

import Dropdown from "@/app/components/Dropdown";
import DropdownS from "@/app/components/DropdownS";
import NumberInput from "@/app/components/input";
import { DatePicker } from "@nextui-org/date-picker";

export default function Create() {
  return (
    <div className="main flex flex-row justify-end w-5/6 me-5">
      <div className="flex flex-col  ">
        <div className="title text-end text-2xl rtl">
          <h1>:ساخت اکانت جدید</h1>
        </div>
        <div className="inputs flex flex-row  ">
          <div className="time  me-5 ">
            <label
              htmlFor="bedrooms-input"
              className="block mb-2 text-sm font-medium text-white text-end "
            >
              مدت زمان اکانت
            </label>
            <DatePicker label="Birth date" className="max-w-[284px] " />
          </div>
          <div className="hjm text-end mt-2">
            <NumberInput />
          </div>
          <div className="type">
            <DropdownS/>
            <Dropdown/>
          </div>
        </div>
      </div>
    </div>
  );
}
