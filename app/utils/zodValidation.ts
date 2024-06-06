import type { z } from 'zod';

const withValidation =
  (schema: z.ZodType, handler: (formData: FormData) => void) =>
  (prevState: any, formData: FormData) => {
    const entries = Object.fromEntries(formData.entries());

    const validatedFields = schema.safeParse(entries);

    if (!validatedFields.success) {
      return {
        message:
          validatedFields.error.flatten().fieldErrors.email?.[0] ??
          validatedFields.error.flatten().fieldErrors.password?.[0],
      };
    }

    return handler(formData);
  };

export default withValidation;
