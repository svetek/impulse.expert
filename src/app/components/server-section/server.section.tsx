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
flex flex-col w-full pb-4 pt-24 scroll-mt-20'
    >
      <h2
        className="font-['KdamThmorPro'] tracking-widest text-center 
    text-3xl font-semibold py-3 px-16 uppercase text-slate-600 dark:text-slate-300 
    wow animate__animated animate__fadeInDown pt-16"
      >
        High-Performance Dedicated Server
      </h2>
      <div className='flex flex-col justify-center lg:flex-row px-8'>
        <div className='flex justify-center items-center animate__animated animate__fadeInLeft'>
          <Image
            width='400'
            height='400'
            src={
              theme === 'dark'
                ? './images/server/dark.png'
                : './images/server/light.png'
            }
            alt='Servers fantastic image'
            className='server-image'
          />
        </div>

        <div className='lg:flex-1 lg:max-w-[50%] flex flex-col justify-center wow animate__animated animate__fadeInRight text-gray-800 dark:text-slate-300'>
          <p className='mx-8 mb-4 text-2xl'>
            Experience exceptional computing power with our dedicated server,
            tailored for demanding workloads
          </p>
          <ul className='mx-8 list-inside text-2xl list-none'>
            <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
              <span className='font-semibold '>CPU(s):</span> 32
            </li>
            <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
              <span className='font-semibold'>Specifications:</span> 32 CPUs,
              128GB RAM, 6TB NVMe Storage, 1Gb/s Network Speed
            </li>
            <li className='mb-2 wow animate__animated animate__fadeInUp animate__delay-1s'>
              <span className='font-semibold'>Operating System:</span> Ubuntu
              Server 22.04 LTS
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
