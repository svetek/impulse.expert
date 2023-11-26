import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MonitoringSection from '../components/monitoring-section/monitoring-section';
import NodesSection from '../components/nodes-section/nodes.section';
import ServerSection from '../components/server-section/server.section';

export default function Page() {
  return (
    <>
      <Header />
      {/* <header className='bg-gray-800 text-white p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='logo'>
            <img src='/logo.png' alt='Logo' className='h-8' />
          </div>
          <nav className='flex space-x-4'>
            <a href='#' className='hover:underline'>
              Home
            </a>
            <a href='#' className='hover:underline'>
              About
            </a>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </nav>
        </div>
      </header> */}
      {/* Main Content */}
      <main className='main'>
        {/* <section
          className='bg-cover bg-center text-white p-12 text-center'
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <h1 className='text-4xl font-bold mb-2'>Welcome to Our Website</h1>
          <p className='mb-4'>
            This is a great starting point for your Next.js project with
            Tailwind CSS.
          </p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Get Started
          </button>
        </section> */}
        <section>
          <ServerSection />
        </section>

        <section>
          <NodesSection />
        </section>

        {/* <section className='bg-gray-100 p-12'>
          <h2 className='text-xl lg:text-2xl font-bold mb-2'>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </section> */}

        <MonitoringSection />
      </main>
      <Footer />
    </>
  );
}
