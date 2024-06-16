import Link from 'next/link';
import './404.css';
export default function Custom404() {
  return (
    <div class="error__container">
      <div class="error__code">
        <p>4</p>
        <p>0</p>
        <p>4</p>
      </div>
      <div class="error__title">این صفحه وجود ندارد</div>

      <button class="action"><Link href='/dashboard'>برگشت به داشبورد</Link></button>
    </div>
  );
}
