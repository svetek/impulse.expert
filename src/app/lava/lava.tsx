'use client';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { ThemeProvider } from '../contexts/ThemeContext';
import Image from 'next/image';

export default function Lava() {
  return (
    <ThemeProvider>
      <Header />
      <main className='lava py-36 pb-8 lg:py-24 lg:pt-32 min-h-screen'>
        <article
          className='container justify-center max-w-[100%] 
flex flex-col w-full pb-4 scroll-mt-20'
        >
          <div className='text-center py-1 flex flex-col items-center lg:flex-row lg:justify-center'>
            <Image
              src='/images/pages/lava/lava.svg'
              alt='Lava Logo'
              width={100}
              height={100}
              className='mb-4 lg:mb-0 lg:mr-4'
            />
            <h1 className="z-30 text-3xl lg:text-6xl font-['KdamThmorPro'] font-bold tracking-widest text-slate-600 dark:text-slate-300 wow animate__animated animate__fadeIn">
              lava
            </h1>
          </div>

          <div className='text-center my-2 flex flex-col items-center sm:flex-row sm:justify-center min-h-10'>
            <Link
              className="underline header-link font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-1 lg:px-3 py-2 rounded-md font-semibold mb-2 sm:mb-0 sm:mx-2"
              href='https://www.lavanet.xyz/'
              target='_blank'
            >
              Official Website
            </Link>
            <Link
              className="underline header-link font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-1 lg:px-3 py-2 rounded-md font-semibold mb-2 sm:mb-0 sm:mx-2"
              href='https://lava.explorers.guru/validator/lava@valoper1q7jyftyahuf66jefc36254rldk6je9xkaaseh4'
              target='_blank'
            >
              Impulse Explorer
            </Link>
          </div>

          <h2
            className="z-30 text-xl lg:text-3xl font-['KdamThmorPro'] tracking-widest text-center 
    font-semibold py-1 px-16 uppercase text-slate-600 dark:text-slate-300 
    wow animate__animated animate__fadeIn pt-2 lg:pt-8 select-none"
          >
            Decentralized Multi-Chain RPC and API Services
          </h2>
          <div className='z-30 flex flex-col justify-center lg:flex-row px-8'>
            <div className='flex justify-center items-center animate__animated animate__fadeInLeft'>
              <Image
                loading='lazy'
                width='400'
                height='400'
                src='/images/pages/lava/lava_raccoon.png'
                alt='LavaNet illustration'
                className='pointer-events-none select-none max-w-[100%] drop-shadow-[10px_-15px_50px_rgba(255,100,3,.5)] dark:drop-shadow-[10px_-15px_25px_rgba(255,1,1,0.59)]'
              />
            </div>

            <div className='select-none lg:flex-1 lg:max-w-[50%] flex flex-col justify-center wow animate__animated animate__fadeInRight text-gray-800 dark:text-slate-300'>
              <p className='mx-8 mb-4 text-xl lg:text-2xl'>
                Unleash the power of blockchain with LavaNet&apos;s versatile
                multi-chain RPC and API services, supporting over 15 blockchain
                networks for seamless integration.
              </p>
              <ul className='mx-16 list-inside text-xl lg:text-2xl list-disc'>
                <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <span className='font-semibold'>Networks Supported:</span>{' '}
                  Over 15 Blockchain Networks
                </li>
                <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <span className='font-semibold'>Tools:</span> Lava SDK, Block
                  Explorer, Lava Info
                </li>
                <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <span className='font-semibold'>Features:</span> High Uptime,
                  Fast Response, Data Consistency
                </li>
                <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <span className='font-semibold'>Community:</span> Open-Source,
                  Extensive Documentation
                </li>
                <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
                  <span className='font-semibold'>Upcoming:</span> Lava Phase 2
                  Mainnet Launch in Q1 2024
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
