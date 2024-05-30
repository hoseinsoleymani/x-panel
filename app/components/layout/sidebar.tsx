import Link from "next/link";
import {  IoPersonAdd , IoSettings  } from "react-icons/io5";
import { FaMoneyBill , FaHome, FaUsers   } from "react-icons/fa";




export default function Sidebar(){


    return(
        <div className="sidebar hidden md:flex bg-[#23273C] justify-end xl:p-5 w-1/6 rounded-xl">
            <ul className="">

            <Link  href="/dashboard" className="px-4 text-end flex  justify-end cursor-pointer capitalize py-2 my-5 md:text-sm lg:text-lg  hover:bg-purple-800 font-medium rounded mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <span className="me-3">صفحه اصلی</span>
              <div className="icon rounded-lg bg-[#1A1F37]  p-2">
              <FaHome className="text-[#0075FF] " />
              </div>
            </Link>

            <Link href="/dashboard/create" className="px-4 text-end flex justify-end cursor-pointer capitalize py-1 my-5 md:text-sm lg:text-lg hover:bg-purple-800 font-medium rounded mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <span className="me-3">ساخت یوزر</span>
              <div className="icon rounded-lg bg-[#1A1F37]  p-2">
              <IoPersonAdd className="text-[#0075FF] " />
              </div>
            </Link>

            <Link href="/dashboard/users" className="px-4 text-end flex justify-end cursor-pointer capitalize py-1 my-5 md:text-sm lg:text-lg  hover:bg-purple-800 font-medium rounded mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <span className="me-3"  >یوزر ها</span>
              <div className="icon rounded-lg bg-[#1A1F37]  p-2">
              <FaUsers className="text-[#0075FF] " />
              </div>
            </Link>
            
            <Link href="/dashboard/payment" className="px-4 text-end flex justify-end cursor-pointer capitalize py-1 my-5 md:text-sm lg:text-lg hover:bg-purple-800 font-medium rounded mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <span className="me-3" >پرداخت و شارژ</span>
              <div className="icon rounded-lg bg-[#1A1F37]  p-2">
              <FaMoneyBill className="text-[#0075FF] " />
              </div>
            </Link>
            <Link href="/dashboard/setting" className="px-4 text-end flex w-full justify-end cursor-pointer capitalize py-1 my-5 md:text-sm lg:text-lg  hover:bg-purple-800 font-medium rounded mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <span className="me-3" >تنظیمات</span>
              <div className="icon rounded-lg bg-[#1A1F37]  p-2">
              <IoSettings className="text-[#0075FF] " />
              </div>
            </Link>
            </ul>
        </div>
    )
}