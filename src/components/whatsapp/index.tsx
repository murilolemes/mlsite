'use client';

import { cn } from '@/lib/utils';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export default function WhatsApp() {
  const message = 'Olá Murilo Lemes, tudo bem?';
  const cell = '551798215-2311';

  const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

  return (
    <Link
      href={apiWhats}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
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
