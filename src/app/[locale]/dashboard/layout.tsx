import { headers } from 'next/headers';
import { SideNav } from '@/components/dashboard/side-nav'
import { TopNav } from '@/components/dashboard/top-nav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';

  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[64px] w-full">
        <TopNav />
      </div>
      <div className="fixed inset-y-0 z-50 hidden w-72 mt-16 md:block">
        <SideNav pathname={pathname} />
      </div>
      <main className="min-h-screen pt-16 md:pl-72">
        <div className="container p-8">{children}</div>
      </main>
    </div>
  )
} 