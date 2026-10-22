'use client';

import { cn } from '@/lib/utils';
import { ArrowRightIcon, WhatsappLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';

const message = 'Olá Murilo Lemes, tudo bem?';
const cell = '551798215-2311';

export const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

export function FloatingWhatsApp() {
  return (
    <Link
      href={apiWhats}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={cn(
        'h-12 w-12 rounded-full border-none bg-green-500 text-gray-50',
        'fixed right-4 bottom-20 flex items-center justify-center',
        'transition-colors duration-200 hover:bg-green-500/80',
      )}
    >
      <WhatsappLogoIcon size={24} weight="fill" />
    </Link>
  );
}

type ButtonWhatsAppProps = {
  bg: string;
  py: string;
};
export function ButtonWhatsApp({ bg, py }: ButtonWhatsAppProps) {
  return (
    <Link
      href={apiWhats}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={cn(
        `rounded-md ${bg} px-8 ${py} font-semibold text-white hover:text-blue-500`,
        'flex items-center gap-2 border-1 border-white/20',
        'transition-all duration-200 hover:border-blue-500',
      )}
    >
      Vamos conversar
      <ArrowRightIcon weight="bold" size={24} />
    </Link>
  );
}
