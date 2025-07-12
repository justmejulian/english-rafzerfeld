import { z } from 'astro:content';

export function multiLingualSchema<T>(schema: z.ZodType<T>) {
  return z.object({
    en: schema,
    de: schema,
  });
}
