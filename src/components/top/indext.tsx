'use client';

import { cn } from '@/lib/utils';
import { ArrowUpIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Top() {
  return (
    <Link
      href="/"
      className={cn(
        'h-12 w-12 rounded-full border-none bg-blue-500 text-gray-50',
        'fixed bottom-4 left-4 flex items-center justify-center',
        'transition-colors duration-200 hover:bg-blue-500/80',
      )}
    >
      <ArrowUpIcon size={24} weight="bold" />
    </Link>
  );
}
