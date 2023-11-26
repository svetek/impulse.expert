import AboutSection from './components/about-us-section/about-us.section';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MonitoringSection from './components/monitoring-section/monitoring-section';
import NodesSection from './components/nodes-section/nodes.section';
import ServerSection from './components/server-section/server.section';
import dynamic from 'next/dynamic';

import { ThemeProvider } from './contexts/ThemeContext';
import Link from 'next/link';

export default function Page() {
  const HeadSection = dynamic(
    () => import('./components/head-section/head-section.section'),
    { ssr: false }
  );

  return (
    <ThemeProvider>
      <Header />
      <main className='main'>
        <section className='flex flex-col md:flex-row items-center justify-center py-36 pt-44'>
          <div className='mb-6 md:mb-0'>
            <div id='head' className='wow animate__animated animate__pulse animate__infinite mx-10'>
              <HeadSection />
            </div>
          </div>
          <div className='flex-3 select-none lg:flex-1 lg:max-w-[30%] wow animate__animated animate__fadeInRight'>
            <h1 className='text-3xl font-normal mb-3 text-gray-900 dark:text-slate-300'>
              Welcome to{' '}
              <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 rounded-md font-semibold">
                Impulse
              </span>
              : Pioneering Web3 Innovations with Expertise and Passion
            </h1>
            <p className='text-gray-600 text-2xl dark:text-gray-400'>
              Discover Impulse: Your Gateway to Advanced Web3 Solutions. Our
              team of IT experts is passionate about blockchain and crypto,
              offering top-tier node operation services. Led by our unique
              nocturnal mascot, we&aposre dedicated to ensuring a secure and
              decentralized future
            </p>
          </div>
        </section>

        <section>
          <ServerSection />
        </section>

        <section>
          <NodesSection />
        </section>

        <section>
          <AboutSection />
        </section>

        <MonitoringSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
