"use client";

import Dropdown from "@/app/components/Dropdown";
import DropdownS from "@/app/components/DropdownS";
import NumberInput from "@/app/components/input";
import { DatePicker } from "@nextui-org/date-picker";

export default function Create() {
  return (
    <section className="grow m-6">
        <div className="title text-2xl rtl">
          <h1>ساخت اکانت جدید</h1>
        </div>

    <div className="flex flex-row mt-6">
      <div className="flex flex-col w-full ">

        <div className="flex flex-row justify-between">
          <div className="time  me-5 ">
            <label
              htmlFor="bedrooms-input"
              className="block mb-2 text-sm font-medium text-white"
            >
              مدت زمان اکانت
            </label>
            <DatePicker label="Birth date" className="max-w-[284px]" />
          </div>
          <div className="mt-2">
            <NumberInput />
          </div>
          <div className="type">
            <DropdownS/>
            <Dropdown/>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
