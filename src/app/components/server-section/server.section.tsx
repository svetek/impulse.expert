'use client';

import Image from 'next/image';
import { useContext } from 'react';
import './server-section.css';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function ServerSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      className='container justify-center max-w-[100%] 
flex flex-col w-full pb-4 scroll-mt-20'
    >
      <h2
        data-aos='fade-down'
        data-aos-duration='1000'
        className="z-30 text-xl lg:text-3xl font-['KdamThmorPro'] tracking-widest text-center 
        font-semibold py-3 px-16 uppercase text-slate-600 dark:text-slate-300 
        pt-8 lg:pt-16 select-none"
      >
        High-Performance Dedicated Servers
      </h2>
      <div className='z-30 flex flex-col justify-center lg:flex-row px-8'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='flex justify-center items-center'
        >
          <Image
            loading='lazy'
            width='400'
            height='400'
            src={
              theme === 'dark'
                ? './images/server/dark.png'
                : './images/server/light.png'
            }
            alt='Servers fantastic image'
            className='server-image pointer-events-none select-none'
          />
        </div>

        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='select-none lg:flex-1 lg:max-w-[50%] flex flex-col justify-center text-gray-800 dark:text-slate-300'
        >
          <p className='mx-8 mb-4 text-xl lg:text-2xl'>
            Experience Unmatched Performance: Over 20 Dedicated Servers Across 4
            Countries for Demanding Workloads
          </p>
          <ul className='mx-16 list-inside text-xl lg:text-2xl list-disc'>
            <li className='mb-2'>
              <span className='font-semibold '>CPUs:</span> 32
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>RAM:</span> 128GB
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Storage:</span> 6TB NVMe
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Network Speed:</span> 1Gb/s
            </li>
            <li className='mb-2'>
              <span className='font-semibold'>Operating System:</span> Ubuntu
              Server 22.04 LTS
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
