import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getMessages } from '@/i18n/request';
import { NextIntlClientProvider } from 'next-intl';
import { ClerkProvider } from '@clerk/nextjs';
import { Locale } from '@/i18n/request';
import '@/styles/globals.css';

type Props = {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await Promise.resolve(params);
  const messages = await getMessages(locale);

  return (
    <ClerkProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </NextIntlClientProvider>
      <Analytics />
      <SpeedInsights />
    </ClerkProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
} 