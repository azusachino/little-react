import queryString from 'query-string'

export function parseQuery() {
  return queryString.parseUrl(window.location.href).query;
}

export const checkLogin = (permits: any): boolean => (process.env.NODE_ENV === 'production' && !!permits) || process.env.NODE_ENV === 'development'
