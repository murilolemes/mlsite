'use client';

import { cn } from '@/lib/utils';
import { ArrowUpIcon } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 0);

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Link
      href="#top"
      aria-label="Voltar ao topo"
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
