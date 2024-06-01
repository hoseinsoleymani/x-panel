import { FaUser } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";

export default function Home() {
  return (
    <section className="w-full   p-5">
      <div className="text-xl">
        <h1>سلام ابوالفضل خوش اومدی</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center text-xl">
          <IoMdPersonAdd className="mx-2 text-green-600" />
          <span className="m-2">تعداد کل نماینده ها:</span>
          <span className="m-2">8</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <FaUser className="mx-2 text-green-600" />
          <span>کل فروش:</span>
          <span className="m-2">800.000.000</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <MdCalendarMonth className="mx-2 text-green-600" />
          <span>تعداد سرویس های فروخته شده:</span>
          <span className="m-2">120</span>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center text-xl">
          <IoMdPersonAdd className="mx-2 text-green-600" />
          <span className="m-2">تعداد کاربران آنلاین:</span>
          <span className="m-2">8</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <FaUser className="mx-2 text-green-600" />
          <span>تعداد کل یوزر های پنل:</span>
          <span className="m-2">800.000.000</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <MdCalendarMonth className="mx-2 text-green-600" />
          <span>تعداد سرویس های فروخته شده:</span>
          <span className="m-2">120</span>
        </div>
      </div>
    </section>
  );
}