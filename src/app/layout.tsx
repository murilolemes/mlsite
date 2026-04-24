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
      <body
        className={cn(
          'bg-slate-950 bg-fixed',
          'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.2),transparent_24%),radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.16),transparent_38%),linear-gradient(135deg,#020617_0%,#0b1120_45%,#111827_100%)]',
        )}
      >
        <Header />
        <div
          className={cn(
            'bg-background-acrilic mx-auto mt-18 min-h-[calc(100vh-4.5rem)]',
            'w-full max-w-[1232px] backdrop-blur-xs backdrop-saturate-100',
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
