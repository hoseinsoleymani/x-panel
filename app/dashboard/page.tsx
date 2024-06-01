import { IoMdPersonAdd } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdCalendarMonth } from 'react-icons/md';

export default function Dashboard() {
  return (
    <section className="w-full   p-5">
      <div className="text-xl">
        <h1>سلام ابوالفضل خوش اومدی</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center text-xl">
          <IoMdPersonAdd className="mx-2 text-green-600" />
          <span className="m-2">تعداد کاربر های ساخته شده:</span>
          <span className="m-2">120</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <FaUser className="mx-2 text-green-600" />
          <span>تعداد کاربر های فعال:</span>
          <span className="m-2">80</span>
        </div>
        <div className="flex flex-row items-center text-xl">
          <MdCalendarMonth className="mx-2 text-green-600" />
          <span>تعداد کاربر های این ماه:</span>
          <span className="m-2">120</span>
        </div>
      </div>
    </section>
  );
}
