import AboutSection from './components/about-us-section/about-us.section';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MonitoringSection from './components/monitoring-section/monitoring-section';
import NodesSection from './components/nodes-section/nodes.section';
import ServerSection from './components/server-section/server.section';
import dynamic from 'next/dynamic';

import { ThemeProvider } from './contexts/ThemeContext';

export default function Page() {
  const HeadSection = dynamic(
    () => import('./components/head-section/head-section.section'),
    { ssr: false }
  );

  return (
    <ThemeProvider>
      <Header />
      <main className='main'>
        <section className='flex flex-col lg:flex-row items-center justify-center py-36 pb-8 lg:py-36 lg:pt-44 min-h-[450px] lg:min-h-[900px]'>
          <div className='mb-6 md:mb-0'>
            <div
              id='head'
              className='wow animate__animated animate__pulse animate__infinite mx-auto px-10 lg:px-0'
            >
              <HeadSection />
            </div>
          </div>
          <div className='flex-3 select-none lg:flex-1 lg:max-w-[40%] wow animate__animated animate__fadeInRight px-5 md:px-10 text-center md:text-left'>
            <h1 className='text-xl lg:text-3xl font-normal mb-3 text-gray-900 dark:text-slate-300 pt-4'>
              Welcome to
              <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 rounded-md font-semibold">
                {' '}Impulse
              </span>
              : Pioneering Web3 Innovations with Expertise and Passion
            </h1>
            <p className='text-gray-600 text-xl lg:text-2xl dark:text-gray-400'>
              Discover Impulse: Your Gateway to Advanced Web3 Solutions. Our
              team of IT experts is passionate about blockchain and crypto,
              offering top-tier node operation services. Led by our unique
              nocturnal mascot, we&apos;re dedicated to ensuring a secure and
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
