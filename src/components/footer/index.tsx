'use client';

import { cn } from '@/lib/utils';
import { CopyrightIcon } from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer
      className={cn(
        'flex items-center justify-center gap-1 border-t-1 border-gray-50/10 py-4 text-gray-400',
      )}
    >
      <CopyrightIcon size={12} />
      <p className={cn('text-xs')}>
        2026 Murilo Lemes. Todos os direitos reservados.
      </p>
    </footer>
  );
}
