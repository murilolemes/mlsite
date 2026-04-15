'use client';

import { cn } from '@/lib/utils';
import { LinkedinLogoIcon } from '@phosphor-icons/react';
import Link from 'next/link';

export default function LinkedIn() {
  return (
    <Link
      href="https://www.linkedin.com/in/murilolemes/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className={cn(
        'h-12 w-12 rounded-full border-none bg-blue-500 text-gray-50',
        'fixed right-4 bottom-4 flex items-center justify-center',
        'transition-colors duration-200 hover:bg-blue-500/80',
      )}
    >
      <LinkedinLogoIcon size={24} weight="fill" />
    </Link>
  );
}
