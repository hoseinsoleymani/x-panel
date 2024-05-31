import Link from 'next/link';
import { FaHome, FaMoneyBill, FaUsers } from 'react-icons/fa';
import { IoPersonAdd, IoSettings } from 'react-icons/io5';
 
export default function Sidebar() {
  return (
    <div className=" hidden w-1/6 rounded-xl bg-[#23273C] md:flex xl:p-5">
      <ul className="">
        <Link
          href="/dashboard"
          className="my-5 mb-2 flex  cursor-pointer rounded px-4 py-2 font-medium  capitalize hover:bg-purple-800 md:text-sm lg:text-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <FaHome className="text-[#0075FF] " />
          </div>
          <span className="me-3">صفحه اصلی </span>
        </Link>

        <Link
          href="/dashboard/create"
          className="my-5 mb-2 flex cursor-pointer rounded px-4 py-1  font-medium capitalize hover:bg-purple-800 md:text-sm lg:text-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <IoPersonAdd className="text-[#0075FF] " />
          </div>
          <span className="me-3">ساخت یوزر</span>
        </Link>

        <Link
          href="/dashboard/users"
          className="my-5 mb-2 flex cursor-pointer rounded px-4 py-1  font-medium  capitalize hover:bg-purple-800 md:text-sm lg:text-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <FaUsers className="text-[#0075FF] " />
          </div>
          <span className="me-3">یوزر ها</span>
        </Link>

        <Link
          href="/dashboard/payment"
          className="my-5 mb-2 flex cursor-pointer justify-end rounded px-4 py-1 text-end font-medium capitalize hover:bg-purple-800 md:text-sm lg:text-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <FaMoneyBill className="text-[#0075FF] " />
          </div>
          <span className="me-3">پرداخت و شارژ</span>
        </Link>
        {/* <Link
          href="/dashboard/setting"
          className="my-5 mb-2 flex w-full cursor-pointer rounded px-4 py-1 font-medium  capitalize hover:bg-purple-800 md:text-sm lg:text-lg dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          <div className=" rounded-lg bg-[#1A1F37]  p-2">
            <IoSettings className="text-[#0075FF] " />
          </div>
          <span className="me-3">تنظیمات</span>
        </Link> */}
      </ul>
    </div>
  );
}
