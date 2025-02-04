import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './config/i18n';

export default createMiddleware({
  // 支持的语言列表
  locales,
  // 默认语言
  defaultLocale,
  // 本地化检测策略
  localeDetection: true,
  // 本地化 Cookie 名称
  localePrefix: 'always'
});

export const config = {
  // 匹配所有路径，除了 api、_next、public 等
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 