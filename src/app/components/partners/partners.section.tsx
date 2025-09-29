'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './partners.section.css';

export default function OurPartners() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="partners" className='z-30 container max-w-[90%] flex flex-col w-full pb-8 scroll-mt-20'>
      <div
        className='min-w-[90%] rounded-xl 
    p-5 pb-8 m-3 mb-3 flex flex-col items-center text-center bg-white dark:bg-slate-900 border-2 
    border-transparent hover:shadow-xl hover:dark:shadow-dark-lg 
    shadow-lg dark:shadow-dark'
      >
        <h2
          data-aos='flip-left'
          data-aos-duration='1000'
          className="z-30 font-['KdamThmorPro'] tracking-widest text-center 
          text-xl lg:text-3xl font-semibold md:text-l py-3 mb-2 uppercase text-slate-600 dark:text-slate-300"
        >
          Our Partners
        </h2>
        <div className='flex flex-col justify-center w-[70%] items-center
          md:flex-row md:justify-around md:w-[90%]'>
          <Link
            data-aos='fade-right'
            data-aos-duration='1000'
            href='https://skyskipper.eu'
            target='_blank'
            className='mx-[auto]'
          >
            <Image
              className='transform mb-1 hover:scale-110 duration-500 ease-in-out 
              hover:dark:drop-shadow-[0_0px_10px_rgba(245,120,3,1)] hover:drop-shadow-[0_0px_10px_#fac56e]'
              alt='Skyskipper Logo'
              width={400}
              height={150}
              src={
                theme === 'dark'
                  ? './images/partners/skyskipper-yellow.svg'
                  : './images/partners/skyskipper.svg'
              }
            />
          </Link>

          <Link
            data-aos='zoom-in'
            data-aos-duration='1000'
            href='https://delton.cloud'
            target='_blank'
            className='mx-[auto] md:mx-8 my-4 md:my-0'
          >
            <Image
              className='transform mb-1 hover:scale-[1.35] duration-500 ease-in-out scale-125
              hover:dark:drop-shadow-[0_0px_10px_#5D15AC] hover:drop-shadow-[0_0px_10px_#AE63F4]'
              alt='Delton Logo'
              width={300}
              height={200}
              src={
                theme === 'dark'
                  ? './images/partners/delton-light.png'
                  : './images/partners/delton-dark.png'
              }
            />
          </Link>

          <Link
            data-aos='fade-left'
            data-aos-duration='1000'
            href='https://www.svetek.com'
            target='_blank'
            className='mx-[auto]'
          >
            <Image
              className='mb-1 hover:scale-110 duration-500 ease-in-out
                hover:dark:drop-shadow-[0_0px_10px_rgba(245,120,3,1)] hover:drop-shadow-[0_0px_10px_#fac56e]'
              alt='Svetek Logo'
              width={300}
              height={125}
              src={
                theme === 'dark'
                  ? './images/partners/svetek_dark.svg'
                  : './images/partners/svetek_light.svg'
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
