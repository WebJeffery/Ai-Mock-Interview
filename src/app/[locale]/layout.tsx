import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getMessages } from '@/i18n/request';
import { NextIntlClientProvider } from 'next-intl';
import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/globals.css';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(String(params.locale));

  return (
    <ClerkProvider>
      <NextIntlClientProvider messages={messages} locale={String(params.locale)}>
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