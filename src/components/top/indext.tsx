'use client';

import { cn } from '@/lib/utils';
import { ArrowUpIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 0);
    };

    updateVisibility();

    window.addEventListener('scroll', updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className={cn(
        'fixed bottom-4 left-4 z-50',
        'flex h-12 w-12 items-center justify-center',
        'rounded-full border-none bg-blue-500 text-gray-50',
        'hover/80 transition-colors duration-200',
        'focus-visible focus-visible',
      )}
    >
      <ArrowUpIcon size={24} weight="bold" />
    </Button>
  );
}
