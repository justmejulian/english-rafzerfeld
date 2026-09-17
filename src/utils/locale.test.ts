import { describe, it, expect, vi } from 'vitest';

import {
  getLocaleFromURL,
  replaceLocaleInURL,
  getLocaleData,
  getContent,
} from '@utils/locale.ts';

describe('getLocaleFromURL', () => {
  it('reads the locale from the first path segment', () => {
    expect(getLocaleFromURL(new URL('http://x/en/team'))).toBe('en');
    expect(getLocaleFromURL(new URL('http://x/de/'))).toBe('de');
  });

  it('falls back to "en" for a missing or unknown locale', () => {
    expect(getLocaleFromURL(new URL('http://x/'))).toBe('en');
    expect(getLocaleFromURL(new URL('http://x/fr/x'))).toBe('en');
  });
});

describe('replaceLocaleInURL', () => {
  it('swaps the locale segment in place', () => {
    const out = replaceLocaleInURL(new URL('http://x/en/team'), 'de');
    expect(out.pathname).toBe('/de/team');
  });

  it('uses the requested locale root when the path has no current locale', () => {
    const out = replaceLocaleInURL(new URL('http://x/'), 'de');
    expect(out.pathname).toBe('/de/');
  });

  it('preserves the path, query, and fragment', () => {
    const out = replaceLocaleInURL(
      new URL('http://x/en/team?source=nav#contact'),
      'de',
    );
    expect(out.href).toBe('http://x/de/team?source=nav#contact');
  });

  it('replaces only a complete locale path segment', () => {
    const out = replaceLocaleInURL(new URL('http://x/enormous/team'), 'de');
    expect(out.pathname).toBe('/de/');
  });
});

describe('getLocaleData', () => {
  it('returns the branch matching the locale', () => {
    const data = { en: 'english', de: 'deutsch' };
    expect(getLocaleData('en', data)).toBe('english');
    expect(getLocaleData('de', data)).toBe('deutsch');
  });
});

describe('getContent', () => {
  it('resolves the locale from the URL, parses the data, and picks the locale branch', () => {
    const schema = {
      parse: (data: unknown) => data as { en: string; de: string },
    };
    const raw = { en: 'english', de: 'deutsch' };

    const { locale, content } = getContent(
      new URL('http://x/de/team'),
      schema,
      raw,
    );

    expect(locale).toBe('de');
    expect(content).toBe('deutsch');
  });

  it('runs the data through the schema before selecting the locale branch', () => {
    const schema = {
      parse: vi.fn((data: unknown) => data as { en: string; de: string }),
    };
    const raw = { en: 'english', de: 'deutsch' };

    getContent(new URL('http://x/en/'), schema, raw);

    expect(schema.parse).toHaveBeenCalledWith(raw);
  });
});
