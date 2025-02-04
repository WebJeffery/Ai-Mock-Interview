'use client';

import { UserNav } from '@/components/dashboard/user-nav';
import { LanguageSwitcher } from '@/components/language-switcher';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const path = usePathname();
  const locale = useLocale();

  return (
    <div className="border-b">
      <div className="flex p-4 items-center bg-secondary shadow-sm">
        {/* 左侧 Logo */}
        <div className="flex-none">
          <Link href={`/${locale}`}>
            <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
          </Link>
        </div>

        {/* 中间导航栏，自适应居中 */}
        <div className="flex-1 flex justify-center">
          <ul className='hidden md:flex gap-6'>
            <Link href={`/${locale}/dashboard`}>
              <li className={`hover:text-primary hover:font-bold transition-all
              cursor-pointer
              ${path.endsWith('/dashboard')&&'text-primary font-bold'}
              `}>Dashboard</li>
            </Link>
            
            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/questions'&&'text-primary font-bold'}
            `}>Questions</li>

            <Link href={"/dashboard/upgrade"}>
              <li className={`hover:text-primary hover:font-bold transition-all
              cursor-pointer
              ${path=='/dashboard/upgrade'&&'text-primary font-bold'}
              `}>Upgrade</li>
            </Link>

            <li className={`hover:text-primary hover:font-bold transition-all
            cursor-pointer
            ${path=='/dashboard/how'&&'text-primary font-bold'}
            `}>How it Works?</li>
          </ul>
        </div>

        {/* 右侧用户区域 */}
        <div className="flex-none flex items-center space-x-4">
          <LanguageSwitcher />
          <UserNav />
        </div>
      </div>
    </div>
  );
} 