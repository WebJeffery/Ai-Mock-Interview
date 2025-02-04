import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/sign-in',
  },
} satisfies NextAuthConfig 