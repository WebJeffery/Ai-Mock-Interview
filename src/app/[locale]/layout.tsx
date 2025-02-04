import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { getMessages, Locale, locales } from '@/i18n/request';
import { NextIntlClientProvider } from 'next-intl';
import { ClerkProvider } from '@clerk/nextjs';
import type { ReactNode } from 'react';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Mock Interview',
  description: '智能模拟面试系统',
}

// 更新布局参数类型定义
type RootLayoutProps = {
  children: ReactNode
  params: { 
    locale: Locale // 使用具体的联合类型而不是string
  }
}

// 定义支持的语言参数
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale: locale satisfies Locale }))
}


export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
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
      </body>
    </html>
  );
}