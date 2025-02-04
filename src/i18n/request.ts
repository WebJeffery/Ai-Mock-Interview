import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { headers } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
// import { notFound } from 'next/navigation';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export async function getMessages(locale: Locale) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    return (await import(`@/messages/${defaultLocale}.json`)).default;
  }
}

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = (headersList.get('X-NEXT-INTL-LOCALE') ?? defaultLocale) as Locale;

  try {
    const messages = await getMessages(locale);
    return {
      locale,
      messages,
      timeZone: 'Asia/Shanghai'
    };
  } catch (error) {
    return {
      locale: defaultLocale,
      messages: await getMessages(defaultLocale),
      timeZone: 'Asia/Shanghai'
    };
  }
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });