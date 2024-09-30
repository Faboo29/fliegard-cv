import type { Metadata } from 'next';
import { Josefin_Sans, Roboto } from 'next/font/google';
import './globals.scss';

const josefin = Josefin_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--josefin-sans'
});

const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto'
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
