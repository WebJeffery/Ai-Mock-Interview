import type { Locale } from '@/i18n/request'

declare module 'next' {
  export interface LayoutProps {
    params: {
      locale: Locale
    }
  }
} 