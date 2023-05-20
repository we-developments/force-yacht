"use client";

// React Libs
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Assets
import yt1 from "../src/images/pngs/y1.jpg";
import yt2 from "../src/images/pngs/y2.jpg";
import yt3 from "../src/images/pngs/y3.jpg";
import yt4 from "../src/images/pngs/y4.jpg";
import yt5 from "../src/images/pngs/y5.jpg";
import yt6 from "../src/images/pngs/y6.jpg";
import Logo from "../src/images/pngs/force.png";
import Barco from "../src/images/pngs/barco.png";
import manBoat from "../src/images/pngs/manboat.png";
import bgFooter from "../src/images/pngs/bg-footer.jpg";
import Ocean from "../src/images/pngs/bg-6.webp";
import jumpGirls from "../src/images/pngs/jump-girls.png";
import Brinde from "../src/images/pngs/brinde.jpg";
import ForceInstagram from "../src/images/pngs/force-instagram_cropped.png";
import mainBanner from "../src/images/pngs/banner3.jpg";
import banner5 from "../src/images/pngs/banner5.jpg";

// Hooks & Utils
import { useIconGetter } from "../src/hooks/useIconGetter/useIconGetter";
import Footer from "@/src/components/Footer/footer";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const openVideo = (videoUrl: any) => {
    setSelectedVideo(videoUrl);
  };

  const { Icon } = useIconGetter();

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

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

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

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
      "bg-primary",
      "h-16",
      "w-full",
      "bg-clip-padding",
      "backdrop-filter",
      "backdrop-blur-md",
      "bg-opacity-50"
    );
    logoHeight = 50;
  }

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="z-10" style={{ height: "200vh" }}>
      <motion.header
        className={navbarClasses.join(" ")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
                <a href="#sobre-nos" className="text-white">
                  Sobre nós
                </a>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <a href="#" className="text-white">
                  Nossas embarcações
                </a>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <a href="#servicos" className="text-white">
                  Serviços
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
      </motion.header>
      <Image
        src={banner5}
        alt="banner"
        className="h-screen w-screen object-cover"
      />
      <div
        className="absolute left-4 sm:left-8 text-left z-0"
        style={{ top: "25%", left: "10%" }}
      >
        <animated.h1
          style={fade}
          className="text-white lg:text-large sm:text-5xl font-Marcellus"
        >
          Force Yacht
        </animated.h1>
        <animated.h1
          style={fade}
          className="text-primary lg:text-6xl sm:text-5xl font-Marcellus flex gap-2 "
        >
          <Icon icon="wheel" />
          <span className="items-center flex">Navegue</span>
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

      <section className="h-96" id="sobre-nos">
        <div className="flex justify-center items-center bg-white h-full">
          <div className="flex flex-col justify-center items-center relative">
            <motion.div
              ref={ref}
              initial={{ x: "-50vw" }}
              animate={controls}
              transition={{ type: "spring", stiffness: 60 }}
              variants={{
                visible: { x: 0 },
                hidden: { x: "-50vw" },
              }}
              className="absolute z-0 left-0"
            >
              <Image src={Barco} alt="barco" />
            </motion.div>
            <div className="flex justify-center">
              <div className="w-2/4 z-20">
                <div className="flex justify-left mb-2">
                  <Icon icon="anchor" />
                </div>
                <h1 className="sm:text-5xl lg:text-4xl text-left font-Marcellus font-bold text-primary">
                  Sobre nós
                </h1>
                <div className="w-8 h-1 mt-2 ml-1 mx-auto bg-primary"></div>

                <p className="lg:text-base sm:text-2xl text-left font-Marcellus pt-4">
                  Desde 2015, a Force Yacht tem sido sinônimo de aventura, luxo
                  e momentos memoráveis em alto-mar em Porto Belo e região.
                  Oferecemos aluguel de iates e lanchas de alta qualidade,
                  proporcionando uma experiência única, seja para celebrações
                  festivas, passeios tranquilos em família, reuniões
                  corporativas inovadoras ou simplesmente um dia de lazer ao
                  sol.
                </p>
                <p className="lg:text-base sm:text-2xl text-left font-Marcellus pt-4">
                  Cada uma das nossas embarcações é cuidadosamente selecionada e
                  mantida, assegurando um alto padrão de conforto e segurança.
                  Nossa dedicada equipe de profissionais está sempre pronta para
                  ajudar no planejamento da sua viagem, garantindo que cada
                  detalhe esteja à altura das suas expectativas. Na Force Yacht,
                  proporcionamos a verdadeira liberdade do mar, aliada ao luxo e
                  conforto, para fazer de cada viagem uma experiência
                  inesquecível. Embarque conosco nessa aventura!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-off py-10" id="servicos">
        <div className="grid grid-cols-2 w-4/5 mx-auto pt-20 min-">
          <div className="col-span-1 flex justify-center relative z-10 bg-white">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary">Serviços</h1>
              <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
              <p className="text-lg pt-4">
                Na Force Yacht, oferecemos aluguel de iates e lanchas luxuosas e
                bem mantidas, adequadas para todas as suas necessidades. Nossos
                serviços incluem um marinheiro experiente para garantir uma
                navegação tranquila e segura.
                <br />
                Além disso, para enriquecer sua experiência, oferecemos uma
                variedade de itens de consumo adicionais, como seleções gourmet
                de alimentos e bebidas, equipamentos para esportes aquáticos,
                entre outros. Na Force Yacht, acreditamos que cada viagem deve
                ser única e memorável. Entre em contato conosco e comece a
                planejar sua próxima aventura!
              </p>
            </div>
          </div>
          <div className="col-span-1 z-20 relative bg-white">
            <Image src={manBoat} alt="boat" className="w-full" />
          </div>
        </div>
      </section>

      <section className="px-4 h-screen bg-off">
        <div>
          <div className="text-left mb-8 lg:p-4">
            <h2 className="text-4xl font-bold text-primary">
              Conheça nossas Embarcações
            </h2>
            <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
          </div>

          <div>
            <Carousel
              swipeable={true}
              draggable={true}
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
              itemClass="carousel-item-padding-40-px w-full px-4"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-transparent shadow my-10 h-full hover:bg-white transition-all ease-out delay-200"
                >
                  <Image
                    src={image.image}
                    alt={image.title}
                    className="object-cover h-64 w-full "
                  />
                  <div className="mt-2 p-8 relative ">
                    <span className="flex gap-2 text-sm text-gray-400">
                      <Icon icon="location" svgProps={{ fill: "#DBDFE4" }} />
                      PORTO BELO
                    </span>
                    <h2 className="text-xl font-bold py-4 text-primary">
                      {image.title}
                    </h2>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="h-[30rem] bg-off">
        <div className="sm:block lg:grid lg:grid-cols-2 w-4/5 mx-auto">
          <div
            className="grid grid-rows-5 grid-columns-6 gap-2 h-full relative cursor-pointer col-span-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openVideo("url do seu vídeo")}
          >
            <div className="col-start-1 col-end-3 row-start-1 row-end-3">
              <Image
                src={yt1}
                className="w-full h-full object-cover"
                alt="Image 1"
              />
            </div>
            <div className="col-start-3 col-end-5 row-start-1 row-end-3">
              <Image
                src={yt2}
                className="w-full h-full object-cover"
                alt="Image 2"
              />
            </div>
            <div className="col-start-5 col-end-9 row-start-1 row-end-6">
              <Image
                src={yt3}
                className="w-full h-full object-cover"
                alt="Image 3"
              />
            </div>
            <div className="col-start-1 col-end-5 row-start-3 row-end-6">
              <Image
                src={yt4}
                className="w-full h-full object-cover"
                alt="Image 4"
              />
            </div>
            {/* Insira os outros elementos de imagem aqui */}
            {isHovered && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="">
                  <span className="text-white text-3xl">
                    Assista nosso vídeo
                  </span>
                  <div className="flex justify-center">
                    <Icon
                      icon="play"
                      svgProps={{ fill: "#fff", width: "80px" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="text-left mb-8 lg:p-4 order-first col-span-1">
              <h2 className="text-4xl font-bold text-primary">
                Por onde estamos?
              </h2>
            </div>
          </div>
        </div>

        {selectedVideo && (
          <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/828589406?h=22114885e6&byline=0&portrait=0&title=0"
              width="840"
              height="360"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              X
            </button>
          </div>
        )}
      </section>

      <section className="h-3/5 w-full bg-off">
        <div className="grid grid-cols-2 w-4/5 mx-auto pt-20">
          <div className="col-span-1 flex justify-center relative z-10 bg-white">
            <Image src={jumpGirls} alt="boat" className="w-full" />
          </div>
          <div className="col-span-1 z-20 relative bg-white">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary">Experiência</h1>
              <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
              <p className="text-lg pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quia, quod voluptates quos
                voluptate voluptatibus quas doloribus quidem fugiat. Quisquam
                voluptatum, quibusdam, quia, quod voluptates quos voluptate
                voluptatibus quas doloribus quidem fugiat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A footer section */}
      <div className="bg-footer">
        <Footer />
      </div>
    </div>
  );
}
