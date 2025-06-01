export const LOCALES = {
  EN: 'en',
  KR: 'kr',
} as const;

export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  COURSES: 'courses',
  CONTACT: 'contact',
} as const;

export const getLocalizedRoute = (locale: keyof typeof LOCALES, route: keyof typeof ROUTES) => {
  return `/${locale}/${ROUTES[route]}`;
};