import { FaGithub, FaMedium, FaTwitter, FaDocker, FaTelegram } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  return (
    <footer className='bg-blue-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex justify-between items-center flex-wrap'>
          <p
            className="
              select-none
              font-['KdamThmorPro'] tracking-widest tracking-wide px-2 lg:px-3 py-2 rounded-md font-semibold
              text-slate-600 dark:text-gray-300"
          >
            {`${new Date().getFullYear()} Impulse`}
          </p>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/svetek'
              className='text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaGithub className='footer-icon h-5 w-5' />
            </a>
            <a
              href='https://hub.docker.com/u/svetekllc'
              className='text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaDocker className='footer-icon h-5 w-5' />
            </a>
            <a
              href='https://medium.com/@michael_47027'
              className='text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaMedium className='footer-icon h-5 w-5' />
            </a>
            <a
              href='https://twitter.com/SvetekLLC'
              className='text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaTwitter className='footer-icon h-5 w-5' />
            </a>
            <a
              href='https://t.me/crypto_impulse_investing'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaTelegram className='heder-icon h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
