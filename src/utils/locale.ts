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
  const newPathname = url.pathname.replace(`/${locale}`, `/${newLocale}`);
  const newUrl = new URL(url.origin + newPathname);
  return newUrl;
}

export function getLocaleData<T>(locale: Locale, data: { en: T; de: T }): T {
  return data[locale];
}
