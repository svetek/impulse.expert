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
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:site' content='@SvetekLLC'></meta>
        <meta
          name='twitter:title'
          content='Impulse. Web3 Nodes Staking Services'
        ></meta>
        <meta
          name='twitter:description'
          content='Specializing in blockchain node operations, we offer secure,
          high-quality staking services. Our mission is to leverage our
          technology experience to ensure a reliable, decentralized
          digital future'
        ></meta>
        <meta
          name='twitter:image'
          content='https://impulse.expert/logo.png'
        ></meta>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
