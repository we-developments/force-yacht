'use client';
import React from 'react';
import mainBanner from '../src/images/pngs/banner.png';
import Logo from '../src/images/pngs/force.png';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSpring, animated } from 'react-spring';
import Link from 'next/link';

export default function HomePage() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <div className="relative container">
      <header className="fixed top-0 left-0 w-full z-30 bg-transparent flex justify-start">
        <div className="px-4 py-2 flex items-center justify-start h-1.5">
          <Link href="/">
              <Image src={Logo} alt="logo" width={125} height={75} className="sm:width-250 sm:height-150" />
          </Link>
        </div>
          <nav className="flex items-center">
            <ul className="flex space-x-2 sm:space-x-4 gap-10">
              <li className="text-sm sm:text-base text-center gap-5"><a href="#" className="text-white">Home</a></li>
              <li className="text-sm sm:text-base text-center"><a href="#" className="text-white">Sobre nós</a></li>
              <li className="text-sm sm:text-base text-center"><a href="#" className="text-white">Clientes</a></li>
            </ul>
          </nav>
      </header>
      <Image src={mainBanner} alt="banner" className='h-32'/>
      <div className="absolute left-4 sm:left-8 text-left z-20" style={{ top: '30%', left: '10%' }}>
        <animated.h1 style={fade} className="text-2xl sm:text-5xl font-bold text-white">Olá, Mundo!</animated.h1>
        <animated.p style={fade} className="text-base sm:text-3xl text-white">Bem-vindo à nossa landing page.</animated.p>
      </div>
    </div>
  );
}