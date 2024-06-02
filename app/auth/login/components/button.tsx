'use client';

import { Button, Spinner } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="relative w-[140px]" disabled={pending}>
      {pending ? <Spinner size="sm" className="absolute right-3" /> : null}
      Submit
    </Button>
  );
}
