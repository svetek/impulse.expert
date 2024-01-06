'use client';
import './monitoring-section.css';

export default function MonitoringSection() {
  return (
    <section
      className='z-30 pointer-events-none select-none monitoring-section flex items-center justify-center'
      style={{ backgroundImage: `url('images/monitoring.png')` }}
    >
      <div className='container'>
        <div className='row'>
          <h2
            data-aos='fade-down'
            data-aos-duration='1000'
            className="font-['KdamThmorPro'] tracking-wider header font-bold text-center mb-8 pr-8 pl-8 dark:text-slate-300"
          >
            Always Alert. Always Secure.
          </h2>

          <p
            data-aos='fade-left'
            data-aos-duration='1000'
            className='description text-center pr-8 pl-8 dark:text-slate-300'
          >
            Ensuring nodes are always up
          </p>
          <p
            data-aos='fade-right'
            data-aos-duration='1000'
            className='description text-center mb-4 pr-8 pl-8 dark:text-slate-300'
          >
            with 24/7 vigilant monitoring and alerting systems
          </p>
        </div>
      </div>
    </section>
  );
}
