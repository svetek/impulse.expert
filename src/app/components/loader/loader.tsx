'use client';

import './loader.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type PushStateInput = [
  data: any,
  unused: string,
  url?: string | URL | null | undefined
];

export default function RouteLoader() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        setLoading(true);
      }
    };

    const handleMutation: MutationCallback = () => {
      const anchorElements: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll('a[href]');

      anchorElements.forEach((anchor) =>
        anchor.addEventListener('click', handleAnchorClick)
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        setLoading(false);
        return target.apply(thisArg, argArray);
      },
    });
  });

  return loading ? (
    <section className='loader-section'>
      <div className='text-center'>
        <h1
          className='text-slate-300 font-["KdamThmorPro"] 
          tracking-widest text-4xl font-bold mb-4 text-slate-600 dark:text-slate-300  
          wow animate__animated animate__pulse animate__infinite	'
        >
          Impulse
        </h1>
        <Image
          width='200'
          height='200'
          priority={true}
          src='/logo.png'
          alt='Loading...'
          className='logo slow-spin mx-auto wow animate__animated animate__pulse animate__infinite '
        ></Image>
        <h2 className='font-["KdamThmorPro"] tracking-widest text-3xl font-bold mt-4 text-slate-300 wow animate__animated animate__pulse animate__infinite	'>
          Loading...
        </h2>
      </div>
    </section>
  ) : (
    <></>
  );
}
