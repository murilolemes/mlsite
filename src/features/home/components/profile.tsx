'use client';

import { Content } from '@/components/content';
import { apiWhats } from '@/components/whatsapp';
import { cn } from '@/lib/utils';

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from '@phosphor-icons/react';
import Link from 'next/link';

export function Profile() {
  return (
    <div
      className={cn('flex h-[calc(100vh-190px)] w-full justify-center')}
      id="/"
    >
      <Content
        className={cn('relative flex-col justify-center gap-4 px-4 py-2')}
      >
        <div
          className={cn(
            'flex w-fit items-center gap-2 rounded-2xl px-3 py-2',
            'border-1 border-blue-500 bg-transparent',
          )}
        >
          <span className={cn('h-2 w-2 rounded-2xl bg-blue-400')} />
          <p className={cn('text-xs')}>DESENVOLVEDOR FULL STACK</p>
        </div>
        <h1 className={cn('h-fit max-w-xl text-5xl font-bold')}>
          Desenvolvendo soluções que
          <span className={cn('block text-blue-300')}>fazem a diferença.</span>
        </h1>

        <p className={cn('mt-2 max-w-xl text-gray-200')}>
          Transformo ideias em aplicações reais, funcionais e bem estruturadas,
          utilizando tecnologia para resolver problemas do dia a dia.
        </p>

        <div className={cn('flex gap-2')}>
          <Link
            href={'https://github.com/murilolemes'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              'flex h-9.5 w-9.5 items-center justify-center rounded-md',
              'bg-gray-50 transition-all duration-300 hover:bg-gray-50/20',
            )}
          >
            <GithubLogoIcon
              size={24}
              weight="fill"
              className={cn('text-gray-950')}
            />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/murilolemes'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              'flex h-9.5 w-9.5 items-center justify-center rounded-md',
              'bg-gray-50 transition-all duration-300 hover:bg-gray-50/20',
            )}
          >
            <LinkedinLogoIcon
              size={24}
              weight="bold"
              className={cn('text-blue-500')}
            />
          </Link>
          <Link
            href={apiWhats}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={cn(
              'flex h-9.5 w-9.5 items-center justify-center rounded-md',
              'bg-gray-50 transition-all duration-300 hover:bg-gray-50/20',
            )}
          >
            <WhatsappLogoIcon
              size={24}
              weight="regular"
              className={cn('text-green-500')}
            />
          </Link>
        </div>

        <div
          className={cn(
            "bg-[url('/assets/avatar.png')] bg-contain bg-right bg-no-repeat",
            'absolute right-0 bottom-0 h-100 w-120',
          )}
        />
      </Content>
    </div>
  );
}
