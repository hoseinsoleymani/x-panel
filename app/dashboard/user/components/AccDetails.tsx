import { Switch } from '@nextui-org/react';
import React from 'react';
import { BiReset } from 'react-icons/bi';
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { Card } from '@/app/components/shared/Card';

import Buttonc from './Buttonc';
import Infobox from './Infobox';

export default function AccDetails({ amount, used, time, limit }: any) {
  const date = new Date(time);
  const now = new Date();
  const tyear = now.getUTCFullYear();
  const tmonth = String(now.getUTCMonth() + 1).padStart(2, '0');
  const tday = String(now.getUTCDate()).padStart(2, '0');
  const thours = String(now.getUTCHours()).padStart(2, '0');
  const tminutes = String(now.getUTCMinutes()).padStart(2, '0');
  const tseconds = String(now.getUTCSeconds()).padStart(2, '0');
  const formattedDateb = `${tyear}-${tmonth}-${tday} ${thours}:${tminutes}:${tseconds}`;

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // ماه از 0 شروع می‌شود، بنابراین +1
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const formattedDatea = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const formattedDate = `${year}-${month}-${day}`;
  const trafic = (amount / 1073741824).toFixed(2);
  const tused = (Number(used) / 1073741824).toFixed(2);
  return (
    <Card>
      <div className="grid grid-cols-2 items-center gap-16 lg:grid-cols-3">
        <div className="flex flex-row">
          <h1 className="text-sm  text-white md:text-xl">وضعیت اکانت</h1>
          {trafic >= tused && formattedDateb < formattedDatea ? (
            <Switch 
              isDisabled
              color="success"
              defaultSelected
              thumbIcon={<FaCheck />}
            />
          ) : (
            <Switch
              isDisabled
              color="danger"
              defaultSelected
              thumbIcon={<IoMdClose />}
            />
          )}
        </div>
        <Infobox title="حجم کل" content={`${trafic} GB`} />
        <Infobox title="حجم مصرف شده" content={`${tused} GB`} />
        <Infobox title="زمان پایان" content={formattedDate} />
        <Infobox title="تعداد کاربر" content={limit} />
        {/* <div className="flex items-center text-white">
          <p>تغییر لینک اکانت</p>
          <Buttonc>
            <BiReset />
          </Buttonc>
        </div> */}
      </div>
    </Card>
  );
}
