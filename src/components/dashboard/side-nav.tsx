'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  BarChart3,
  BookOpen,
  History,
  Home,
  Settings,
  Trophy,
} from 'lucide-react'

const items = [
  {
    title: '主页',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: '开始面试',
    href: '/dashboard/interview/new',
    icon: BookOpen,
  },
  {
    title: '面试历史',
    href: '/dashboard/history',
    icon: History,
  },
  {
    title: '数据分析',
    href: '/dashboard/analytics',
    icon: BarChart3,
  },
  {
    title: '成就系统',
    href: '/dashboard/achievements',
    icon: Trophy,
  },
  {
    title: '设置',
    href: '/dashboard/settings',
    icon: Settings,
  },
]

export function SideNav({ pathname }: { pathname: string }) {
  return (
    <div className="flex h-full w-full flex-col border-r bg-background px-4">
      <nav className="flex flex-1 flex-col gap-1 py-6">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
              pathname === item.href
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground'
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
} 