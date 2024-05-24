'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './about-us.section.css';

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <article
      id='about'
      className='container justify-center max-w-[100%] 
flex flex-col w-full pb-4 scroll-mt-20'
    >
      <h2
        data-aos='fade-down'
        data-aos-duration='1000'
        className="z-30 font-['KdamThmorPro'] tracking-widest text-center 
    text-xl lg:text-3xl font-semibold py-3 px-16 uppercase text-slate-600 dark:text-slate-300 
    pt-4 lg:pt-16 select-none"
      >
        About Impulse
      </h2>
      <div className='z-30 flex flex-col justify-center lg:flex-row px-8'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          className='flex justify-center items-center mx-12 mb:mx-24 lg:mb-2 mb-8'
        >
          <Image
            loading='lazy'
            width='250'
            height='200'
            src={
              theme === 'dark'
                ? './images/about/dark.png'
                : './images/about/light.png'
            }
            alt='Servers fantastic image'
            className='pointer-events-none select-none max-w-[100%] drop-shadow-[10px_-15px_50px_rgba(245,120,3,.5)] dark:drop-shadow-[10px_-15px_25px_rgba(185,185,185,0.69)]'
          />
        </div>

        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          className='select-none lg:flex-1 lg:max-w-[40%] flex flex-col 
          justify-center text-gray-800 dark:text-slate-300
          text-center	lg:text-left'
        >
          <p className='mx-8 mb-4 text-xl lg:text-2xl'>
            <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 rounded-md font-semibold">
              Impulse{' '}
            </span>
            is the team of IT experts, driven by our enthusiasm for Web3 and cryptocurrency
          </p>
          <p className='mx-8 mb-4 text-xl lg:text-2xl italic'>
            At the heart of our team is our unique mascot – a raccoon
            DevOps-engineer with striking red eyes, a testament to his nocturnal
            work ethic and superhero-like ability to resolve any node-related
            issues
          </p>
          <p className='mx-8 mb-4 text-xl lg:text-2xl'>
            Specializing in blockchain node operations, we offer secure,
            high-quality staking services. Our mission is to leverage our
            extensive technology experience to ensure a reliable, decentralized
            digital future
          </p>
        </div>
      </div>
    </article>
  );
}
