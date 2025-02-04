import Link from 'next/link'
import { UserNav } from '@/components/dashboard/user-nav'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export function TopNav() {

  return (
    <header className="flex h-16 w-full items-center border-b bg-background px-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
      <div className="ml-4 md:ml-0">
        <Link href="/" className="text-xl font-bold">
          AI Mock Interview
        </Link>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  )
} 