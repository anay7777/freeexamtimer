import en, { type Dictionary } from './locales/en';
import es from './locales/es';
import ja from './locales/ja';
import fr from './locales/fr';
import de from './locales/de';
import pt from './locales/pt';
import ko from './locales/ko';
import it from './locales/it';

// Keep in sync with `i18n.locales` in astro.config.mjs
export const languages = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';
export const showDefaultLang = false;

// Open Graph locale per language (og:locale / og:locale:alternate)
export const ogLocales: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ko: 'ko_KR',
  it: 'it_IT',
};

// Routes that exist in every language. Other pages (about, contact, legal) are English-only.
export const localizedRoutes = ['/', '/how-to/', '/faq/'];

export const ui: Record<Lang, Dictionary> = { en, es, ja, fr, de, pt, ko, it };
