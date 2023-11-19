import ThemeSwitcher from '../../main/components/theme-switcher';
import './header.css';

export default function Header() {
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
      <a href='/' className='flex items-center'>
        <img className='block h-20 w-auto drop-shadow-[0_0px_10px_rgba(100,100,100,0.85)] dark:drop-shadow-[0_0px_10px_rgba(185,185,185,0.69)]' src='/logo.png' alt='Logo' />
        <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 px-3 py-2 rounded-md text-4xl font-semibold">
          Impulse
        </span>
      </a>

      <nav>
        <div className='flex items-center space-x-4'>
          <a
            href='#mainnets'
            className="font-['KdamThmorPro'] tracking-widest tracking-wide text-gray-800 dark:text-slate-300 px-3 py-2 rounded-md text-2xl font-semibold"
          >
            Mainnets
          </a>
          <a
            href='#testnets'
            className="font-['KdamThmorPro'] tracking-widest tracking-wide text-gray-800 dark:text-slate-300 px-3 py-2 rounded-md text-2xl font-semibold"
          >
            Testnets
          </a>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
