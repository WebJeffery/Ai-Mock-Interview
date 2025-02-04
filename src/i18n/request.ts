import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/config/i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    return {
      messages: (await import(`@/messages/zh.json`)).default
    };
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default
  };
}); 