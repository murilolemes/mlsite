import Header from '@/components/header';
import StyledComponentsRegistry from '@/lib/registro';
import GlobalStyles from '@/styles/global-styles';
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Murilo Lemes",
  description: "Site portfólio de Murilo Lemes",
  icons: {
    icon: "/logoML.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.variable}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <div id="content">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
