'use client';
import React from 'react';
import mainBanner from '../src/images/pngs/banner.png';
import Image from 'next/image';

const HomePage = () => {


  return (
    <>
    <div>
      <Image src={mainBanner} alt="main banner" fill/>
    </div>

    <div className="section">
        AQUI
    </div>
    </>
  );
};

export default HomePage;