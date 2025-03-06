export const LANGUAGES = [
  { label: 'Spanish', code: 'es' },
  { label: 'English', code: 'en' },
  { label: 'French', code: 'fr' },
  { label: 'Spanish', code: 'es' },
  { label: 'English', code: 'en' },
  { label: 'French', code: 'fr' },
];

export enum Routes {
  home = '/',
  login = '/login',
  register = '/register',
  dashboard = '/dashboard',
  tienda = '/tienda',
  config = '/config',
}

export const BaseURL = import.meta.env.VITE_BaseURL;
