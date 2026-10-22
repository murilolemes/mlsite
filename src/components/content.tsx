'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type ContentProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function Content({ children, className }: ContentProps) {
  return (
    <div className={cn('flex w-full max-w-[1232px]', className)}>
      {children}
    </div>
  );
}
