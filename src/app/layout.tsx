import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Murilo Lemes',
  description: 'Site portfólio de Murilo Lemes',
  icons: {
    icon: '/assets/LogoInicial.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        'font-sans',
        montserrat.variable,
        'font-sans',
        inter.variable,
        'scroll-smooth',
      )}
    >
      <body
        className={cn(
          'bg-slate-950 bg-fixed',
          'bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.2),transparent_24%),radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.16),transparent_38%),linear-gradient(135deg,#020617_0%,#0b1120_45%,#111827_100%)]',
        )}
      >
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
