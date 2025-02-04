import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getMessages } from '@/i18n/request';
import { NextIntlClientProvider } from 'next-intl';
import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/globals.css';

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <ClerkProvider>
      <NextIntlClientProvider messages={messages} locale={params.locale}>
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