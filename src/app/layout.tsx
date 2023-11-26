import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Impulse',
  description: 'Impulse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
        />
        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image'></meta>
        <meta property='twitter:site' content='@SvetekLLC'></meta>
        <meta
          property='twitter:title'
          content='Impulse. Web3 Nodes Staking Services'
        ></meta>
        <meta
          property='twitter:description'
          content='Specializing in blockchain node operations, we offer secure,
          high-quality staking services. Our mission is to leverage our
          technology experience to ensure a reliable, decentralized
          digital future'
        ></meta>
        <meta
          property='twitter:image'
          content='https://impulse.expert/card.jpg'
        ></meta>

        {/* OG */}
        <meta property='og:image' content='https://impulse.expert/card.jpg'></meta>
        <meta
          property='og:title'
          content='Impulse. Web3 Nodes Staking Services'
        ></meta>
        <meta
          property='og:description'
          content='Specializing in blockchain node operations, we offer secure,
          high-quality staking services. Our mission is to leverage our
          technology experience to ensure a reliable, decentralized
          digital future'
        ></meta>
        <meta property='og:locale' content='en_US'></meta>
        <meta property='og:site_name' content='Impulse'></meta>
        <meta property='og:image:alt' content='Impulse. Web3 Nodes Staking Services'></meta>
        <meta property="og:type" content="website"></meta>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
