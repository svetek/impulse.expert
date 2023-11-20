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
      className='container max-w-[100%] 
        flex flex-col w-full pb-8 pt-8 scroll-mt-20'
    >
      <h2 className="font-['KdamThmorPro'] tracking-widest text-center 
        text-3xl font-semibold py-3 uppercase text-slate-600 dark:text-slate-300 
        wow animate__animated animate__fadeInDown">
        {title}
      </h2>
      <div className='flex justify-center flex-wrap custom-container'>
        {nodes.map((block, index) => (
          <div
            key={index}
            className='custom-card rounded-xl p-5 m-3 mb-3 flex flex-col items-center text-center
          bg-white dark:bg-slate-900
          hover:shadow-xl hover:dark:shadow-dark-lg
          hover:bg-slate-100 hover:dark:bg-slate-800
          hover:border-2 hover:border-slate-300
          hover:dark:border-slate-600
          shadow-lg dark:shadow-dark 
          wow animate__animated animate__fadeInUp'
          >
            <Link href={block.link} target='_blank'>
              <Image
                width='200'
                height='200'
                className='w-full rounded-full'
                src={block.logo}
                alt={block.title}
              />
              <p className='mt-4 font-medium text-lg text-gray-900 dark:text-slate-300 h-[3em] overflow-hidden'>
                {block.title}
              </p>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 h-[5em] overflow-hidden'>
                {block.description}
              </p>
            </Link>
            {block.explorer && (
              <Link
                className='mt-4 inline-block border border-gray-400 text-slate-600 
              bg-grey-50 dark:border-gray-500 
              dark:text-gray-300 py-1 px-3 rounded
              hover:bg-slate-200 hover:dark:bg-slate-950
              wow animate__animated animate__pulse animate__repeat-3'
                href={block.explorer}
                target='_blank'
              >
                Explorer
              </Link>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
