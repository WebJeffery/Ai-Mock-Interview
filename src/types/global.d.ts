/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module 'tailwind-merge' {
  export function twMerge(...args: string[]): string
}

declare module 'next-themes' {
  export interface ThemeProviderProps {
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    children?: React.ReactNode
  }
}

declare module '@radix-ui/react-dialog'
declare module '@radix-ui/react-select'
declare module '@radix-ui/react-avatar'
declare module '@radix-ui/react-label'
declare module '@radix-ui/react-separator'
declare module '@radix-ui/react-toast'
declare module 'next-intl/client'
declare module 'next-intl/server' 