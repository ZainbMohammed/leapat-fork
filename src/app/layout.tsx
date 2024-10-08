import "./globals.css";

import { IBM_Plex_Sans_Arabic as GFont } from 'next/font/google';

import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const inter = GFont({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leapat.org'),

  title: 'موقع ليبات',
  description: 'قفزة نحو المستقبل',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          inter.className,
          'bg-custom-gradient flex min-h-screen flex-col',
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
