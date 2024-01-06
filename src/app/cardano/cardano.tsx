'use client';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { ThemeProvider } from '../contexts/ThemeContext';
import Image from 'next/image';

export default function Cardano() {
  return (
    <ThemeProvider>
      <Header />
      <main className='cardano py-36 pb-8 lg:py-24 lg:pt-32 min-h-screen'>
        <article
          className='container justify-center max-w-[100%] 
flex flex-col w-full pb-4 scroll-mt-20'
        >
          <div
            data-aos='fade-down'
            data-aos-duration='1000'
            data-aos-once='true'
            className='text-center py-1 flex flex-col items-center lg:flex-row lg:justify-center'
          >
            <Image
              src='/images/pages/cardano/logo.png'
              alt='Cardano Logo'
              width={100}
              height={100}
              className='mb-4 lg:mb-0 lg:mr-4'
            />
            <h1 className="z-30 text-3xl lg:text-6xl font-['KdamThmorPro'] font-bold tracking-widest text-slate-600 dark:text-slate-300">
              Cardano
            </h1>
          </div>

          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-once='true'
            className='text-center my-2 flex flex-col items-center sm:flex-row sm:justify-center min-h-10'
          >
            <Link
              className="underline header-link font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-1 lg:px-3 py-2 rounded-md font-semibold mb-2 sm:mb-0 sm:mx-2"
              href='https://www.cardano.org/'
              target='_blank'
            >
              Official Website
            </Link>
            <Link
              className="underline header-link font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-1 lg:px-3 py-2 rounded-md font-semibold mb-2 sm:mb-0 sm:mx-2"
              href='https://adastat.net/pools/06be20d0da5810fae2f0376dc0a01a31d459c0ca6da8e3ddf58a67d9'
              target='_blank'
            >
              Impulse Explorer
            </Link>
          </div>

          <h2
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-once='true'
            className="z-30 text-xl lg:text-3xl font-['KdamThmorPro'] tracking-widest text-center 
    font-semibold py-1 px-16 uppercase text-slate-600 dark:text-slate-300 
    pt-2 lg:pt-8 select-none"
          >
            Sustainable and Scalable Blockchain Ecosystem
          </h2>
          <div className='z-30 flex flex-col justify-center lg:flex-row px-8'>
            <div
              data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-once='true'
              className='flex justify-center items-center'
            >
              <Image
                loading='lazy'
                width='500'
                height='500'
                src='/images/pages/cardano/cardano_raccoon.png'
                alt='Cardano Ecosystem Illustration'
                className='pointer-events-none select-none max-w-[100%] drop-shadow-[10px_-15px_50px_rgba(0,113,206,.5)] dark:drop-shadow-[10px_-15px_25px_rgba(115,163,255,0.69)]'
              />
            </div>

            <div
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-once='true'
              className='select-none lg:flex-1 lg:max-w-[50%] flex flex-col justify-center text-gray-800 dark:text-slate-300'
            >
              <p className='mx-8 mb-4 text-xl lg:text-2xl'>
                Discover the power of the Cardano blockchain with its highly
                secure, scalable, and sustainable platform, supporting a diverse
                range of dApps and innovations.
              </p>
              <ul className='mx-16 list-inside text-xl lg:text-2xl list-disc'>
                <li className='mb-2'>
                  <span className='font-semibold'>Features:</span> Decentralized
                  Governance, Low Energy Consumption
                </li>
                <li className='mb-2'>
                  <span className='font-semibold'>ADA Cryptocurrency:</span>{' '}
                  Secure and Sustainable Digital Currency
                </li>
                <li className='mb-2'>
                  <span className='font-semibold'>Development:</span>{' '}
                  Peer-Reviewed Research, Transparent Process
                </li>
                <li className='mb-2'>
                  <span className='font-semibold'>Community:</span> Global
                  Adoption, Active Developer Community
                </li>
                <li className='mb-2'>
                  <span className='font-semibold'>Upcoming:</span> Continuous
                  Ecosystem Enhancements and Partnerships
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
