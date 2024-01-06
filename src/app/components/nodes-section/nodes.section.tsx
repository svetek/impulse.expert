'use client';

import Image from 'next/image';
import './nodes-section.css';
import Link from 'next/link';
import { NodeCard, mainnetNodes, testnetNodes } from './constants/nodes';

export default function NodesSection() {
  return (
    <div className='pb-8'>
      {getNodesContainer('Our Mainnets', mainnetNodes, 'mainnets')}
      {getNodesContainer('Our Testnets', testnetNodes, 'testnets')}
    </div>
  );
}

const getNodesContainer = (title: string, nodes: NodeCard[], id?: string) => {
  return (
    <article
      id={id}
      className='z-30 container max-w-[100%] md:max-w-[95%] lg:max-w-[80%] 
        flex flex-col w-full pb-8 pt-8 scroll-mt-20'
    >
      <h2
        data-aos='fade-down'
        data-aos-duration='1000'
        className="z-30 font-['KdamThmorPro'] tracking-widest text-center 
        text-xl md:text-3xl font-semibold py-3 uppercase text-slate-600 dark:text-slate-300 
        select-none"
      >
        {title}
      </h2>
      <div className='flex justify-center flex-wrap'>
        {nodes.map((block, index) => (
          <div
            data-aos='fade-up'
            data-aos-duration='1000'
            key={index}
            className='z-30 pointer-events-none select-none max-w-[40%] lg:max-w-[20%] md:max-w-[30%] rounded-xl p-5 m-3 mb-3 flex flex-col items-center text-center
          bg-white dark:bg-slate-900 border-2 border-transparent
          hover:shadow-xl hover:dark:shadow-dark-lg
          hover:bg-slate-100 hover:dark:bg-slate-800
          hover:border-2 hover:border-slate-300
          hover:dark:border-slate-600
          shadow-lg dark:shadow-dark'
          >
            <Image
              loading='lazy'
              width='200'
              height='200'
              className={`z-30 md:max-w-[90%] rounded-full mx-auto ${
                block.invert ? 'dark:filter dark:invert' : ''
              }`}
              src={block.logo}
              alt={block.title}
            />
            <p className='mt-2 md:mt-4 font-medium md:text-lg text-sm text-gray-900 dark:text-slate-300 h-[1.5em] md:h-[3em] overflow-hidden'>
              {block.title}
            </p>
            <p className='text-xs md:text-lg text-gray-600 dark:text-gray-400 h-[4em] md:h-[5em] overflow-hidden select-none'>
              {block.description}
            </p>

            {block.link && (
              <Link
                href={block.link}
                target='_blank'
                className='pointer-events-auto mt-2 md:mt-4 md:text-lg text-sm inline-block border border-gray-400 text-slate-600 
            bg-grey-50 dark:border-gray-500 
            dark:text-gray-300 py-1 px-3 rounded
            hover:bg-slate-200 hover:dark:bg-slate-950
            animate__animated animate__pulse animate__infinite'
              >
                Official Site
              </Link>
            )}

            {block.pageLink && (
              <Link
                href={block.pageLink}
                className='pointer-events-auto mt-2 md:mt-4 md:text-lg text-sm inline-block border border-gray-400 text-slate-600 
            bg-grey-50 dark:border-gray-500 
            dark:text-gray-300 py-1 px-3 rounded
            hover:bg-slate-200 hover:dark:bg-slate-950
            animate__animated animate__pulse animate__infinite'
              >
                More...
              </Link>
            )}

            {block.explorer && (
              <Link
                className='pointer-events-auto mt-2 md:mt-4 md:text-lg text-sm inline-block border border-gray-400 text-slate-600 
              bg-grey-50 dark:border-gray-500 
              dark:text-gray-300 py-1 px-3 rounded
              hover:bg-slate-200 hover:dark:bg-slate-950
              animate__animated animate__pulse animate__infinite'
                href={block.explorer}
                target='_blank'
              >
                Explore
              </Link>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
