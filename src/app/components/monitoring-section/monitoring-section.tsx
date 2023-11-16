import './monitoring-section.css';

export default function MonitoringSection() {
  return (
    <section
      className='monitoring-section flex items-center justify-center'
      style={{ backgroundImage: `url('images/stats.jpg')` }}
    >
      <div className='container'>
        <div className='row'>
          {/* Content Section */}
          <div className='col-xl-10 offset-xl-1'>
            {/* Icon or Image Placeholder */}
            <div className='flex justify-center'></div>

            {/* Heading */}
            <h2 className='text-3xl font-bold text-center mb-4'>
              
            </h2>

            {/* Description */}
            <p className='text-center'></p>
          </div>
        </div>
      </div>
    </section>
  );
}
