'use client';

import Header from '@/components/header';
import LinkedIn from '@/components/linkedin';
import Top from '@/components/top/indext';
import { FloatingWhatsApp } from '@/components/whatsapp';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <FloatingWhatsApp />
      <LinkedIn />
      <Top />
    </>
  );
}
