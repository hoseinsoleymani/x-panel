import { useState } from 'react';

const NumberInput = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div className="">
      <label
        htmlFor="bedrooms-input"
        className="mb-2 block text-sm font-medium text-white"
      >
        حجم درخواستی
      </label>
      <div className="relative flex max-w-[11rem] items-center">
        <button
          onClick={decrement}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="bedrooms-input"
          className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="size-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          name="amount"
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max="5"
          aria-describedby="helper-text-explanation"
          className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 pb-6 text-center text-sm font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="absolute bottom-1 start-1/2 flex -translate-x-1/2 items-center space-x-1 text-xs text-gray-400 rtl:translate-x-1/2 rtl:space-x-reverse">
          <span>GB</span>
        </div>
        <button
          onClick={increment}
          type="button"
          id="increment-button"
          data-input-counter-increment="bedrooms-input"
          className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="size-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        بر اساس گیگابایت وارد کنید
      </p>
    </div>
  );
};

export default NumberInput;
