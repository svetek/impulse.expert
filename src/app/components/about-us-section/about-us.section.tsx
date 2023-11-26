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
flex flex-col w-full pb-24 scroll-mt-20 scroll-mt-20'
    >
      <h2
        className="font-['KdamThmorPro'] tracking-widest text-center 
    text-xl lg:text-3xl font-semibold py-3 px-16 uppercase text-slate-600 dark:text-slate-300 
    wow animate__animated animate__fadeInDown pt-16 select-none"
      >
        About Impulse
      </h2>
      <div className='flex flex-col justify-center lg:flex-row px-8'>
        <div className='flex justify-center items-center animate__animated animate__fadeInLeft mx-24 lg:mb-2 mb-8'>
          <Image
            width='200'
            height='200'
            src={
              theme === 'dark'
                ? './images/about/dark.png'
                : './images/about/light.png'
            }
            alt='Servers fantastic image'
            className='about-image drop-shadow-[10px_-15px_50px_rgba(245,120,3,.5)] dark:drop-shadow-[10px_-15px_25px_rgba(185,185,185,0.69)]'
          />
        </div>

        <div className='select-none lg:flex-1 lg:max-w-[40%] flex flex-col 
          justify-center wow animate__animated animate__fadeInRight text-gray-800 dark:text-slate-300
          text-center	lg:text-left'>
          <p className='mx-8 mb-4 text-xl lg:text-2xl'>
            <span className="font-['KdamThmorPro'] tracking-widest text-gray-800 dark:text-slate-300 rounded-md font-semibold">
              Impulse{' '}
            </span>
            is a dynamic team of IT experts, driven by our enthusiasm for Web3
            and cryptocurrency
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
