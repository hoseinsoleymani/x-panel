import './404.css';

import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="error__container">
      <div className="error__code">
        <p>4</p>
        <p>0</p>
        <p>4</p>
      </div>
      <div className="error__title">این صفحه وجود ندارد</div>

      <button className="action">
        <Link href="/dashboard">برگشت به داشبورد</Link>
      </button>
    </div>
  );
}
