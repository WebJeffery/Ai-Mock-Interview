import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { notFound } from 'next/navigation';

export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export const defaultLocale = 'zh';

export function getLocale(pathname: string): Locale {
  const locale = pathname.split('/')[1] as Locale;
  return locales.includes(locale) ? locale : defaultLocale;
}

// 用于服务端组件
export async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
} 