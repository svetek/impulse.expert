import './monitoring-section.css';

export default function MonitoringSection() {
  return (
    <section
      className='monitoring-section flex items-center justify-center'
      style={{ backgroundImage: `url('images/monitoring.png')` }}
    >
      <div className='container'>
        <div className='row'>
          <h2 className='header font-bold text-center mb-8 pr-8 pl-8'>
            Always Alert. Always Secure.
          </h2>

          <p className='description text-center pr-8 pl-8'>
            Ensuring nodes are always up
          </p>
          <p className='description text-center mb-4 pr-8 pl-8'>
            with 24/7 vigilant monitoring and alerting systems
          </p>
        </div>
      </div>
    </section>
  );
}
