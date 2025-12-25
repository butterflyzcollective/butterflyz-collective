import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Butterflyz Collective',
  description: 'DJ sets • interviews • culture — Atlanta, GA',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}