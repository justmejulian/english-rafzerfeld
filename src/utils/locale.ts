export type Locale = 'en' | 'de';

export function getLocaleFromURL(url: URL): Locale {
  const locale = url.pathname.split('/')[1];

  return locale === 'de' ? 'de' : 'en';
}

export function replaceLocaleInURL(url: URL, newLocale: Locale): URL {
  const newUrl = new URL(url);
  const localePrefix = /^\/(?:en|de)(?=\/|$)/;
  newUrl.pathname = localePrefix.test(url.pathname)
    ? url.pathname.replace(localePrefix, `/${newLocale}`)
    : `/${newLocale}/`;
  return newUrl;
}

export function getLocaleData<T>(locale: Locale, data: { en: T; de: T }): T {
  return data[locale];
}

// Combines the URL -> locale -> validated-content pipeline every page/section
// repeats: resolve the locale, parse the raw JSON against its schema, then
// pick the locale's branch.
export function getContent<T>(
  url: URL,
  schema: { parse: (data: unknown) => { en: T; de: T } },
  data: unknown,
): { locale: Locale; content: T } {
  const locale = getLocaleFromURL(url);
  const content = getLocaleData(locale, schema.parse(data));
  return { locale, content };
}
