export type Locale = 'en' | 'de';

// todo: store in localStorage

export function getLocaleFromURL(url: URL): Locale {
  const locale = url.pathname.split('/')[1];

  if (!locale || (locale !== 'en' && locale !== 'de')) {
    throw new Error('Invalid locale in URL');
  }
  return locale;
}

export function getLocaleData<T>(locale: Locale, data: { en: T; de: T }): T {
  return data[locale];
}
