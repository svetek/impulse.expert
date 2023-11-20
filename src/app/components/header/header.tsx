import Image from 'next/image';
import ThemeSwitcher from '../../main/components/theme-switcher';
import './header.css';

export default function Header() {
  const links = [
    {
      title: 'Mainnets',
      link: '#mainnets',
    },
    {
      title: 'Testnets',
      link: '#testnets',
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
        px-10
        shadow-lg dark:shadow-dark
      '
    >
      <a href='/' className='flex items-center justify-center w-full md:w-auto'>
        <Image
          width='80'
          height='80'
          className='block h-20 w-auto drop-shadow-[0_0px_5px_rgba(100,100,100,0.85)] dark:drop-shadow-[0_0px_5px_rgba(185,185,185,0.69)]'
          src='/logo.png'
          alt='Logo'
        />
        <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-3 py-2 rounded-md text-4xl font-semibold">
          Impulse
        </span>
      </a>

      <nav className='hidden md:block'>
        <div className='flex items-center space-x-2 lg:space-x-4'>
          {links.map(({ link, title }) => (
            <a
              key={link}
              href={link}
              className="header-links font-['KdamThmorPro'] tracking-widest tracking-wide text-gray-800 dark:text-slate-300 px-2 lg:px-3 py-2 rounded-md font-semibold"
            >
              {title}
            </a>
          ))}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
