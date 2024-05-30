import type { PropsWithChildren } from 'react';

export const Label = ({ children }: PropsWithChildren) => {
  return (
    <label
      htmlFor="bedrooms-input"
      className="mb-2 block text-lg font-medium text-white"
    >
      {children}
    </label>
  );
};
