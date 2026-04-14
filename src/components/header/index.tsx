'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathName = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/certificados', label: 'Certificados' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-10 h-[4.5rem] w-full border-b border-gray-50/10',
        'bg-background-acrilic backdrop-blur-md backdrop-saturate-100 transition-all duration-300',
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1232px] items-center justify-between px-4 py-2">
        {/* LOGO */}
        <Link href="/" className="flex h-full items-center justify-center py-2">
          <Image
            src="/assets/logoML.svg"
            alt="Logo ML"
            width={64}
            height={64}
            className="h-[calc(100%-0.25rem)] w-auto"
          />
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-4">
          {links.map((link) => {
            const isActive = pathName === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 ${
                  isActive
                    ? 'border-b border-purple-400 font-bold text-purple-400'
                    : 'font-normal text-gray-300'
                } hover:text-purple-400`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
