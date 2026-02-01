import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Skip all internal paths (_next, api, etc.)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
