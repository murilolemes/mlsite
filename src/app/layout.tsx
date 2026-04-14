import Header from '@/components/header';
import LinkedIn from '@/components/linkedin';
import WhatsApp from '@/components/whatsapp';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Murilo Lemes',
  description: 'Site portfólio de Murilo Lemes',
  icons: {
    icon: '/assets/logoML.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn('font-sans', montserrat.variable)}>
      <body className="bg-[url('/assets/background.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
        <div
          className={cn(
            'bg-background-acrilic mx-auto mt-[4.5rem] min-h-[calc(100vh-4.5rem)]',
            'w-full max-w-[1232px] backdrop-blur-[4px] backdrop-saturate-100',
          )}
        >
          {children}
        </div>
        <LinkedIn />
        <WhatsApp />
      </body>
    </html>
  );
}
