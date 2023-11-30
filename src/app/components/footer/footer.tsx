'use client';

import {
  FaGithub,
  FaMedium,
  FaTwitter,
  FaDocker,
  FaTelegram,
} from 'react-icons/fa';
import './footer.css';
import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className='z-30 bg-blue-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex flex-col-reverse justify-between items-center flex-wrap md:flex-row'>
          <p
            className='
              flex items-center	justify-center
              select-none
              tracking-widest tracking-wide lg:px-3 py-2 rounded-md
              text-slate-600 dark:text-gray-300'
          >
            <span className="font-['KdamThmorPro'] font-semibold mr-1">
              Impulse
            </span>
            by
            <a href='https://www.svetek.com' target='_blank'>
              <Image
                className='mx-1 mb-1 pointer-events-none select-none'
                alt='Svetek Logo'
                width={100}
                height={30}
                src={
                  theme === 'dark'
                    ? './images/footer/svetek_dark.svg'
                    : '/images/footer/svetek_light.svg'
                }
              ></Image>
            </a>
            {`, ${new Date().getFullYear()}`}
          </p>
          <div className='flex space-x-4'>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
