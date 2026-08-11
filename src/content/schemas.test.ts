import { describe, it, expect } from 'vitest';

import {
  homeSchema,
  coursesSchema,
  feesSchema,
  contactSchema,
  teamSchema,
} from '@content/schemas.ts';

import home from '@content/home.json';
import courses from '@content/courses.json';
import fees from '@content/fees.json';
import contact from '@content/contact.json';
import team from '@content/team.json';

// Each schema is a multiLingualSchema, so parsed output always has en + de.
type Bilingual = { parse: (data: unknown) => { en: unknown; de: unknown } };

const cases: [string, Bilingual, unknown][] = [
  ['home', homeSchema, home],
  ['courses', coursesSchema, courses],
  ['fees', feesSchema, fees],
  ['contact', contactSchema, contact],
  ['team', teamSchema, team],
];

describe('content JSON validates against the shared schemas', () => {
  it.each(cases)(
    '%s.json parses cleanly and has both locales',
    (_name, schema, data) => {
      const parsed = schema.parse(data); // throws on any malformed content
      expect(parsed.en).toBeDefined();
      expect(parsed.de).toBeDefined();
    },
  );
});
