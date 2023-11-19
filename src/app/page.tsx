import { useEffect } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MonitoringSection from './components/monitoring-section/monitoring-section';
import NodesSection from './components/nodes-section/nodes.section';

export default function Page() {
  return (
    <>
      <Header />
      <main className='main'>
        {/* <section className='m-10'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-4 text-slate-600 dark:text-slate-300'>
              Impulse: Unleashing Web3 Potential
            </h1>

            <img
              src='/logo.png'
              alt='Under Construction'
              className='logo slow-spin animate-spin mx-auto'
            ></img>
            <h2 className='text-3xl font-bold mt-4 text-slate-600 dark:text-slate-300'>
              Under Construction
            </h2>
          </div>
        </section> */}

        <section>
          <NodesSection />
        </section>

        <MonitoringSection />
      </main>
      <Footer />
    </>
  );
}
