import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-lg bg-tprimary-100 p-6 shadow-md">{children}</div>
  );
}
