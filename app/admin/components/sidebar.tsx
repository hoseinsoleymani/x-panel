/* eslint-disable import/extensions */
import Link from 'next/link';
import { FaHome, FaUsers } from 'react-icons/fa';
import { IoPersonAdd, IoSettings } from 'react-icons/io5';

export default function Sidebar() {
  return (
    <div className=" hidden w-1/6 rounded-xl bg-[#23273C] md:flex xl:p-5">
      <ul className="">
        <Link
          href="/admin"
          className=" my-5 mb-2 flex cursor-pointer rounded px-4 py-2 font-medium capitalize md:text-sm lg:text-lg"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <FaHome className="text-[#0075FF] " />
          </div>
          <span className="me-3">صفحه اصلی </span>
        </Link>

        <Link
          href="/admin/status"
          className="my-5 mb-2 flex  cursor-pointer rounded px-4 py-1 font-medium capitalize md:text-sm lg:text-lg"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <IoPersonAdd className="text-[#0075FF] " />
          </div>
          <span className="me-3">وضعیت سرور ها</span>
        </Link>

        <Link
          href="/admin/resellers"
          className="my-5 mb-2 flex  cursor-pointer  rounded px-4 py-1 font-medium capitalize md:text-sm lg:text-lg"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <FaUsers className="text-[#0075FF] " />
          </div>
          <span className="me-3">نماینده ها</span>
        </Link>
        <Link
          href="/admin/setting"
          className="my-5 mb-2 flex w-full cursor-pointer  rounded px-4 py-1 font-medium capitalize md:text-sm lg:text-lg"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <IoSettings className="text-[#0075FF] " />
          </div>
          <span className="me-3">تنظیمات</span>
        </Link>
      </ul>
    </div>
  );
}
