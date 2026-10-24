import { ui, defaultLang, showDefaultLang, languages, localizedRoutes, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}

/** Current route without its language prefix, always with a trailing slash (e.g. `/es/faq` → `/faq/`). */
export function getRouteFromUrl(url: URL): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] && parts[0] in ui) parts.shift();
  return parts.length ? `/${parts.join('/')}/` : '/';
}

/** Equivalent of the current page in `lang`; falls back to that language's home page for English-only routes. */
export function getAlternatePath(url: URL, lang: Lang): string {
  const route = getRouteFromUrl(url);
  const target = localizedRoutes.includes(route) ? route : '/';
  return useTranslatedPath(lang)(target);
}

/** `getStaticPaths` for `src/pages/[lang]/*` — every language except the unprefixed default. */
export function getLocalizedStaticPaths() {
  return (Object.keys(languages) as Lang[])
    .filter((lang) => lang !== defaultLang)
    .map((lang) => ({ params: { lang } }));
}
