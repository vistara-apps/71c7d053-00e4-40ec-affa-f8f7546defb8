import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChronoCritters - Breed, Evolve, and Trade AI Pets on Base',
  description: 'A Telegram Mini App on Base for creating unique AI-generated virtual pets, trading their traits, and participating in community care challenges.',
  keywords: ['Base', 'Mini App', 'AI Pets', 'NFT', 'Trading', 'Virtual Pets'],
  openGraph: {
    title: 'ChronoCritters',
    description: 'Breed, Evolve, and Trade AI Pets on Base',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
