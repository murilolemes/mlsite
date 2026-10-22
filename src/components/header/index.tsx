'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ArrowRightIcon } from '@phosphor-icons/react';
import { ButtonWhatsApp } from '../whatsapp';

const links = [
  { href: '#top', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export default function Header() {
  const pathName = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    if (pathName !== '/') {
      return;
    }

    const updateActiveLink = () => {
      const threshold =
        window.scrollY + (headerRef.current?.offsetHeight ?? 0) + 1;
      let currentHref = links[0].href;

      for (const { href } of links) {
        const section = document.querySelector<HTMLElement>(href);
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= threshold
        ) {
          currentHref = href;
        }
      }

      setActiveHref(currentHref);
    };

    const animationFrameId = window.requestAnimationFrame(updateActiveLink);
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('resize', updateActiveLink);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
    };
  }, [pathName]);

  return (
    <header
      ref={headerRef}
      className={cn(
        'h-18 w-full border-b-1 border-gray-50/10 transition-all duration-300',
        'bg-background-acrilic/50 backdrop-blur-md backdrop-saturate-100',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-full w-full max-w-[1232px] items-center justify-between px-4 py-2',
        )}
      >
        {/* LOGO */}
        <Link
          href="/"
          className={cn('flex h-full items-center justify-center py-2')}
        >
          <Image
            src="/assets/LogoInicial.png"
            alt="Logo ML"
            width={72}
            height={72}
          />
          <div
            className={cn(
              'ml-2 hidden h-full flex-col justify-center text-white lg:flex',
            )}
          >
            <p className={cn('text-xl font-bold tracking-wide')}>
              MURILO
              <span className={cn('text-blue-400')}> LEMES</span>
            </p>
            <p className={cn('text-xs')}>Desenvolvedor de Software</p>
          </div>
        </Link>

        {/* NAV */}
        <nav className={cn('flex items-center gap-4')}>
          {links.map((link) => {
            const isActive = pathName === '/' && activeHref === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 ${
                  isActive ? 'text-blue-500' : 'text-gray-200'
                } flex flex-col items-center justify-center hover:text-blue-500`}
              >
                {link.label}
                {/* {isActive && <Separator className={cn('w-1/2 bg-blue-500')} />} */}
              </Link>
            );
          })}
        </nav>

        <ButtonWhatsApp
          bg="bg-transparent"
          py="py-2"
          textColor="text-white"
          borderColor="border-white/10"
        >
          Vamos conversar
          <ArrowRightIcon weight="bold" size={24} />
        </ButtonWhatsApp>
      </div>
    </header>
  );
}
