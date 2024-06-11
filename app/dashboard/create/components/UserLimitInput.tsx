import { useCalculatorContext } from '@/app/hook/useCalculator';

import { Label } from '../../../components/shared';

const UserLimitInput = () => {
  const {
    limitIncrement: increment,
    limitDecrement: decrement,
    limit: value,
  } = useCalculatorContext();

  return (
    <div className="">
      <Label>یوزر لیمیت</Label>
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
          name="user-limit"
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max="5"
          aria-describedby="helper-text-explanation"
          className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 text-center text-sm font-medium text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder=""
          value={value}
        />

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
    </div>
  );
};

export default UserLimitInput;
