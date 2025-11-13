import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import fr from './assets/fr.json';
import en from './assets/en.json';

export const lang = writable('en');

if (browser) {
  lang.subscribe((value) => {
    localStorage.setItem('lang', value);
  });
}

const translations = { fr, en };

export const t = derived(lang, $lang => (path) => {
  const translations = { fr, en };
  const keys = path.split('.');
  let result = translations[$lang];
  for (const key of keys) result = result?.[key];
  return result ?? path;
});

export function toggleLang() {
  lang.update(v => (v === 'fr' ? 'en' : 'fr'));
}