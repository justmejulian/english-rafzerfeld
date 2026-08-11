export type Locale = 'en' | 'de';

// todo: store in localStorage

export function getLocaleFromURL(url: URL): Locale {
  const locale = url.pathname.split('/')[1];

  if (!locale || (locale !== 'en' && locale !== 'de')) {
    console.error('Invalid locale in URL:', locale);
    return 'en';
  }
  return locale;
}

export function replaceLocaleInURL(url: URL, newLocale: Locale): URL {
  const locale = getLocaleFromURL(url);
  const urlOrDefault = url.pathname.includes(`/${locale}`)
    ? url
    : new URL(url.origin + '/en');
  const newPathname = urlOrDefault.pathname.replace(
    `/${locale}`,
    `/${newLocale}`,
  );
  const newUrl = new URL(url.origin + newPathname);
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
