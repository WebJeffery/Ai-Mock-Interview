'use client'

import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export function SignUp() {
  return (
    <div className="grid gap-6">
      <Button 
        variant="outline" 
        onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
      >
        <Github className="mr-2 h-4 w-4" />
        使用 GitHub 注册
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            或者
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-2 text-center text-sm">
        <span>已有账号？</span>
        <Link
          href="/auth/sign-in"
          className="underline underline-offset-4 hover:text-primary"
        >
          立即登录
        </Link>
      </div>
    </div>
  )
} 