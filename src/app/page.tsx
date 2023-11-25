import AboutSection from './components/about-us-section/about-us.section';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MonitoringSection from './components/monitoring-section/monitoring-section';
import NodesSection from './components/nodes-section/nodes.section';
import ServerSection from './components/server-section/server.section';
import { ThemeProvider } from './contexts/ThemeContext';

export default function Page() {
  return (
    <ThemeProvider>
      <Header />
      <main className='main'>
        <section>
          <AboutSection />
        </section>

        <section>
          <ServerSection />
        </section>

        <section>
          <NodesSection />
        </section>

        <MonitoringSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
