import './footer.css';

export default function Footer() {
  return (
    <footer className='bg-blue-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center'>
          <p className='text-slate-600 dark:text-gray-300'>
            {`${new Date().getFullYear()} Impulse`}
          </p>
        </div>
      </div>
    </footer>
  );
}
