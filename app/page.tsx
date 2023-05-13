"use client";
import React, { useState, useEffect } from "react";
import mainBanner from "../src/images/pngs/banner3.jpg";
import yt1 from "../src/images/pngs/y1.jpg";
import yt2 from "../src/images/pngs/y2.jpg";
import yt3 from "../src/images/pngs/y3.jpg";
import yt4 from "../src/images/pngs/y4.jpg";
import yt5 from "../src/images/pngs/y5.jpg";
import yt6 from "../src/images/pngs/y6.jpg";
import Logo from "../src/images/pngs/force.png";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function HomePage() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const images = [
    {
      id: 1,
      image: yt1,
      title: "Yacht 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 2,
      image: yt2,
      title: "Yacht 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 3,
      image: yt3,
      title: "Yacht 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 4,
      image: yt4,
      title: "Yacht 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 5,
      image: yt5,
      title: "Yacht 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 6,
      image: yt6,
      title: "Yacht 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
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
  ];
  let logoHeight: number = 150;

  if (scrolled) {
    navbarClasses.push(
      "bg-accent",
      "h-16",
      "w-full",
      "bg-accent",
      "bg-clip-padding",
      "backdrop-filter",
      "backdrop-blur-md",
      "bg-opacity-50"
    );
    logoHeight = 50;
  }

  return (
    <div className="z-10" style={{ height: "200vh" }}>
      <header className={navbarClasses.join(" ")}>
        <nav className="flex">
          <div className="px-4 py-2 flex justify-left round">
            <ul className="flex space-x-2 sm:space-x-4 gap-8">
              <li className="text-sm sm:text-base text-center pl-4 pt-2">
                <Link href="/">
                  <div className="relative overflow-hidden sm:width-250 sm:height-150">
                    <Image src={Logo} alt="logo" width={logoHeight} />
                  </div>
                </Link>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <a href="#" className="text-white">
                  Home
                </a>
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
      <Image src={mainBanner} alt="banner" className="h-screen w-screen" />
      <div
        className="absolute left-4 sm:left-8 text-left z-0"
        style={{ top: "15%", left: "10%" }}
      >
        <animated.h1
          style={fade}
          className="text-white lg:text-large sm:text-5xl font-Marcellus"
        >
          Force Yacht
        </animated.h1>
        <animated.h1
          style={fade}
          className="text-secondary lg:text-8xl sm:text-5xl font-Marcellus flex gap-10"
        >
          Navegue
          <animated.p
            style={fade}
            className="text-lg sm:text-sm text-white font-Marcellus flex items-center"
          >
            Alugueis premium de yachts e lanchas,
            <br />
            Explore os mares com estilo e conforto inigualáveis.
          </animated.p>
        </animated.h1>
        <animated.h1
          style={fade}
          className="text-white lg:text-large sm:text-5xl font-Marcellus"
        >
          com Luxo
        </animated.h1>
      </div>

      <section>
        <div className="flex justify-center items-center h-72">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl sm:text-5xl lg:text-8xl text-center font-Marcellus">
              Nossos Serviços
            </h1>
            <p className="text-lg sm:text-2xl text-center font-Marcellus">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quod voluptates quos voluptate
              voluptatibus quas doloribus quidem fugiat. Quisquam voluptatum,
              quibusdam, quia, quod voluptates quos voluptate voluptatibus quas
              doloribus quidem fugiat.
            </p>
          </div>
        </div>
      </section>

      <section>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .9s ease-in-out"
            transitionDuration={900}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style bg-transparent"
            itemClass="carousel-item-padding-40-px w-full"
          >
            {images.map((image, index) => (
              <div key={index}>
                <Image src={image.image} width={700} alt={image.title}/>
              </div>
             ))}
          </Carousel>
      </section>
    </div>
  );
}
