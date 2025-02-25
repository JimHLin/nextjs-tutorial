import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | NextJS Tutorial/Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official dashboard for Acme Inc.',
  metadataBase: new URL('https://nextjs-tutorial-peach.vercel.app'),
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
