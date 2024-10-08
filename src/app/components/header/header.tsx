import Image from 'next/image';
import ThemeSwitcher from '../theme-switcher/theme-switcher';
import {
  FaGithub,
  FaMedium,
  FaTwitter,
  FaDocker,
  FaTelegram,
} from 'react-icons/fa';
import './header.css';
import Link from 'next/link';

export default function Header() {
  const links = [
    {
      title: 'About Us',
      link: '/#about',
    },
    {
      title: 'Mainnets',
      link: '/#mainnets',
    },
    {
      title: 'Testnets',
      link: '/#testnets',
    },
  ];
  return (
    <header
      className='
        header
        fixed
        bg-white dark:bg-slate-900
        border-b-gray-300 dark:border-b-gray-800
        h-24
        w-full
        flex
        justify-between
        items-center
        px-5
        lg:px-10
        shadow-lg dark:shadow-dark
      '
    >
      <Link
        href='/'
        className='hidden md:flex flex items-center justify-center w-full md:w-auto'
      >
        <Image
          width='80'
          height='80'
          className='pointer-events-none select-none block h-20 w-auto drop-shadow-[0_0px_5px_rgba(100,100,100,0.85)] dark:drop-shadow-[0_0px_5px_rgba(185,185,185,0.69)]'
          src='/logo.png'
          alt='Logo'
        />
        <span className="font-['KdamThmorPro'] capitalize tracking-widest text-gray-800 dark:text-slate-300 px-3 py-2 rounded-md text-4xl font-semibold">
          Impulse
        </span>
      </Link>

      <nav className='block flex md:items-center space-x-1 lg:space-x-4 justify-between w-full md:w-auto'>
        <div className='flex items-center space-x-1 lg:space-x-4'>
          {links.map(({ link, title }) => (
            <Link
              key={link}
              href={link}
              className="header-link text-center font-['KdamThmorPro'] tracking-widest tracking-wide text-gray-800 dark:text-slate-300 px-1 lg:px-3 py-2 rounded-md font-semibold"
            >
              {title}
            </Link>
          ))}
        </div>
        <div className='md:w-auto flex items-center space-x-2 lg:space-x-4'>
          <div className='md:w-auto flex items-center space-x-2 lg:space-x-4'>
            <Link
              href='https://medium.com/@michael_47027'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaMedium className='heder-icon h-5 w-5' />
            </Link>
            <Link
              href='https://twitter.com/SvetekLLC'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaTwitter className='heder-icon h-5 w-5' />
            </Link>
            <Link
              href='https://t.me/crypto_impulse_investing'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaTelegram className='heder-icon h-5 w-5' />
            </Link>
            <Link
              href='https://github.com/svetek'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaGithub className='heder-icon h-5 w-5' />
            </Link>
            <Link
              href='https://hub.docker.com/u/svetekllc'
              className='header-link text-gray-800 dark:text-slate-300'
              target='_blank'
            >
              <FaDocker className='heder-icon h-5 w-5' />
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
