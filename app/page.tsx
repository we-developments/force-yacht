"use client";
import React, { useState, useEffect } from "react";
import mainBanner from "../src/images/pngs/banner.png";
import Logo from "../src/images/pngs/force.png";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

export default function HomePage() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "z-30",
    "flex",
    "justify-start",
    "transition-all",
    "duration-800",
    "flex",
    "justify-center",
  ];
  let logoHeight: number = 350;

  if (scrolled) {
    navbarClasses.push("bg-secondary", "h-16");
    logoHeight = 100;
  }

  return (
    <div className="relative container" style={{ height: "200vh" }}>
      <header className={navbarClasses.join(" ")}>
        <nav className="flex items-center">
          <div className="px-4 py-2 flex justify-center h-1.5">
            <ul className="flex gap-5 space-x-2 sm:space-x-4">
              <li className="text-sm sm:text-base text-center flex items-center">
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li className="text-sm sm:text-base text-center">
                <Link href="/">
                  <div className="relative overflow-hidden sm:width-250 sm:height-150">
                    <Image
                      src={Logo}
                      alt="logo"
                      width={logoHeight}
                      className="object-cover"
                    />
                  </div>
                </Link>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <a href="#" className="text-white">
                  Clientes
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Image src={mainBanner} alt="banner" className="h-28" />
      <div
        className="absolute left-4 sm:left-8 text-left z-20"
        style={{ top: "15%", left: "10%" }}
      >
        <animated.h1
          style={fade}
          className="text-white text-8xl sm:text-5xl font-bold"
        >
          Force Yacht
        </animated.h1>
        <animated.h1
          style={fade}
          className="text-slate-400 text-5xl sm:text-5xl font-bold"
        >
          Navegue com
        </animated.h1>
        <animated.h1
          style={fade}
          className="text-slate-400 text-5xl sm:text-5xl font-bold"
        >
          Luxo
        </animated.h1>
        <animated.p style={fade} className="text-lg sm:text-8xl text-white">
          Alugueis premium de yachts e lanchas,
        </animated.p>
        <animated.p style={fade} className="text-lg sm:text-8xl text-white ">
          Explore os mares com estilo e conforto inigualáveis.
        </animated.p>
      </div>
    </div>
  );
}
