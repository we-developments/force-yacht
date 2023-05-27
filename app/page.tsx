"use client";

// React Libs
import React, { useState, useEffect, Fragment, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/font.css";

// Assets
import yt1 from "../src/images/pngs/y1.jpg";
import yt2 from "../src/images/pngs/y2.jpg";
import yt3 from "../src/images/pngs/y3.jpg";
import yt4 from "../src/images/pngs/y4.jpg";
import yt5 from "../src/images/pngs/y5.jpg";
import yt6 from "../src/images/pngs/y6.jpg";
import Logo from "../src/images/pngs/force.png";
// import Barco from "../src/images/pngs/barco.png";
import manBoat from "../src/images/pngs/manboat.png";
import jumpGirls from "../src/images/pngs/jump-girls.png";
import banner5 from "../src/images/pngs/banner5.jpg";

// Hooks & Utils
import { useIconGetter } from "../src/hooks/useIconGetter/useIconGetter";
import Footer from "@/src/components/Footer/footer";
import { Dialog, Transition } from "@headlessui/react";
import { UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "@/src/components/Modal/modal";
import Faq from "@/src/components/Faq/faq";
import dynamic from "next/dynamic";
import CardList from "@/src/components/Cards/cards";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      capacity: 10,
      includes: "Churras e bebidas",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 2,
      image: yt2,
      title: "Yacht 2",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 3,
      image: yt3,
      title: "Yacht 3",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 4,
      image: yt4,
      title: "Yacht 4",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 5,
      image: yt5,
      title: "Yacht 5",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quod voluptates quos voluptate voluptatibus quas doloribus quidem fugiat.",
    },
    {
      id: 6,
      image: yt6,
      title: "Yacht 6",
      hasSeaman: true,
      entranceTime: "10:00",
      exitTime: "18:00",
      sizeBoat: "40 pés",
      local: "Angra dos Reis",
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
    "transition-all",
    "duration-800",
    "flex",
    "justify-between",
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
    logoHeight = 80;
  }

  const scrollTo = (el: string) => {
    const Element = document.getElementById(el);

    Element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (window.innerWidth < 768) {
      console.log("true");
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("true");
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
        <div className="pl-4 pt-2">
          <a href="/">
            <div className="relative overflow-hidden sm:width-250 sm:height-150">
              <Image src={Logo} alt="logo" width={logoHeight} />
            </div>
          </a>
        </div>

        <button
          className="text-white sm:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <span className="sr-only">Open sidebar</span>
        </button>
        <nav
          className={`${!isMobile ? "" : "hidden"} w-full flex items-center`}
        >
          <div className="px-4 py-2 flex justify-left round">
            <ul className="flex space-x-2 sm:space-x-4 gap-8">
              <li className="text-sm sm:text-base text-center flex items-center pl-5">
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("sobre-nos")}
                  className="text-white cursor-pointer"
                >
                  Sobre nós
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("nossas-embarcacoes")}
                  className="text-white"
                >
                  Nossas embarcações
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("servicos")}
                  className="text-white"
                >
                  Serviços
                </span>
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
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4">
                  <div className="flex shrink-0 items-center">
                    <Image
                      className="w-auto p-8"
                      src={Logo}
                      alt="Your Company"
                      width={200}
                      height={150}
                      priority
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          <li className="text-sm sm:text-base text-center flex items-center border-b-2">
                            <a href="#" className="text-white">
                              Home
                            </a>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center border-b-2">
                            <span
                              onClick={() => scrollTo("sobre-nos")}
                              className="text-white cursor-pointer"
                            >
                              Sobre nós
                            </span>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center border-b-2">
                            <span
                              onClick={() => scrollTo("nossas-embarcacoes")}
                              className="text-white"
                            >
                              Nossas embarcações
                            </span>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center border-b-2">
                            <span
                              onClick={() => scrollTo("servicos")}
                              className="text-white"
                            >
                              Serviços
                            </span>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center border-b-2">
                            <a href="#" className="text-white">
                              Clientes
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <Image
        src={banner5}
        alt="banner"
        className="h-2/6 sm:h-screen sm:w-screen object-cover"
      />
      <div
        className="absolute left-4 sm:left-8 text-left z-0 "
        style={{ top: "25%", left: "6%" }}
      >
        <animated.h1
          style={fade}
          className="text-white lg:text-large sm:text-5xl text-5xl font-Marcellus"
        >
          Force Yachts
        </animated.h1>
        <animated.div style={fade} className="flex gap-2 ">
          <div className="block h-20">
            <span className="text-primary text-4xl lg:text-6xl sm:text-5xl font-Marcellus items-center flex gap-4">
              <Icon icon="wave" svgProps={{ fill: "white" }} />
              Navegue
            </span>
          </div>
        </animated.div>
        <animated.h1
          style={fade}
          className="text-4xl text-white lg:text-large sm:text-5xl font-Marcellus"
        >
          com Luxo
        </animated.h1>
        <animated.p
          style={fade}
          className="text-lg sm:text-sm text-white font-Marcellus flex items-center mt-5"
        >
          Alugueis premium de yachts e lanchas,
          <br />
          Explore os mares com estilo e conforto inigualáveis.
        </animated.p>
      </div>

      <section className="lg:h-fit" id="sobre-nos">
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
              {/* <Image src={Barco} alt="barco" /> */}
            </motion.div>
            <div className="flex justify-center">
              <div className="pt-2 w-full px-4 lg:w-4/5 sm:p-4 z-20">
                <div className="flex justify-center mb-2">
                  <Icon icon="wheel" svgProps={{ fill: "black" }} />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-4xl text-center font-Marcellus font-bold text-primary">
                  Sobre nós
                </h1>
                <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>

                <p className="font-extralight text-base lg:text-lg text-left pt-4 text-gray-600">
                  Desde 2015, a Force Yacht tem sido sinônimo de aventura, luxo
                  e momentos memoráveis em alto-mar em Porto Belo e região.
                  Oferecemos aluguel de iates e lanchas de alta qualidade,
                  proporcionando uma experiência única, seja para celebrações
                  festivas, passeios tranquilos em família, reuniões
                  corporativas inovadoras ou simplesmente um dia de lazer ao
                  sol.
                </p>
                <p className="font-extralight text-gray-600 text-base lg:text-lg text-left pt-4">
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
        <div className="block sm:grid grid-cols-2 md:w-4/5 mx-auto md:pt-20">
          <div className="col-span-1 flex justify-center relative z-10 bg-white rounded-2xl">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary font-Marcellus ">
                Serviços
              </h1>
              <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
              <p className="text-lg pt-4 font-extralight text-gray-600">
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
          <div className="col-span-1 z-20 relative bg-white rounded-2xl">
            <Image src={manBoat} alt="boat" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 bg-off">
        <div id="nossas-embarcacoes">
          <div className="text-left lg:p-4">
            <h2 className="text-4xl font-bold text-primary font-Marcellus ">
              Conheça nossas Embarcações
            </h2>
            <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
          </div>

          <div>
            <Carousel
              removeArrowOnDeviceType={["tablet", "mobile"]}
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
                  className="bg-transparent shadow my-10 rounded-2xl hover:bg-white transition-all ease-out delay-200"
                >
                  <Image
                    src={image.image}
                    alt={image.title}
                    className="object-cover h-64 w-full rounded-t-2xl"
                  />
                  <div className="mt-2 p-8 relative ">
                    <span className="flex gap-2 text-sm text-gray-400">
                      <Icon icon="location" svgProps={{ fill: "#DBDFE4" }} />
                      PORTO BELO
                    </span>
                    <h2 className="text-xl font-normal py-4 text-primary">
                      {image.title}
                    </h2>
                    <p className="font-extralight text-gray-600">{image.description}</p>
                  </div>
                  <div className="flex justify-end p-4">
                    <button
                      type="button"
                      onClick={handleModal}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-extralight hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isModalOpen}
        handleModal={handleModal}
        stylesContent={"xl:w-11/12 h-full"}
      >
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          renderDotsOutside={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          containerClass="carousel-container"
        >
          {images.map((image, index) => (
            <div className="relative w-full" key={index}>
              <Image
                src={image.image}
                alt={image.title}
                className="object-cover lg:h-80 w-full"
              />
              <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold">
                  {images[0].title}
                </h1>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="md:grid grid-cols-2 p-4">
          <div className="flex justify-left">
            <div className="border-b border-black/10 py-4">
              <h2 className="text-2xl font-extralight text-primary font-Marcellus ">
                Informações da Embarcação
              </h2>
              <div className="w-8 h-0.5 ml-1 flex justify-start bg-primary"></div>
              aa
            </div>
          </div>
          <div>
            <div className="border-b border-black/10 py-4">
              <h2 className="text-2xl font-extralight text-primary font-Marcellus">
                Informações da Embarcação
              </h2>
              <div className="w-8 h-0.5 ml-1 flex justify-start bg-primary"></div>
            </div>
            <div className="grid grid-cols-2 py-4 gap-4">
              <div className="flex justify-start gap-2">
                <div className="flex items-center">
                  <Icon icon="people" />
                </div>
                <span className="font-light flex items-center">
                  Capacidade: {images[0].capacity} pessoas
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <div className="flex items-center">
                  <Icon icon="boatSize" />
                </div>
                <span className="font-light flex items-center">
                  Tamanho {images[0].sizeBoat}
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <div className="flex items-center">
                  <Icon icon="enter" />
                </div>
                <span className="font-light flex items-center">
                  Horário Entrada {images[0].entranceTime}
                </span>
              </div>
              <div className="flex justify-start gap-2">
                <div className="flex items-center">
                  <Icon icon="exit" />
                </div>
                <span className="font-light flex items-center">
                  Horário Volta {images[0].exitTime}
                </span>
              </div>
            </div>
            <div className="flex justify-start gap-2">
              <div className="flex items-center">
                <Icon icon="included" />
              </div>
              <span className="font-light flex items-center">
                Incluso: {images[0].includes}
              </span>
            </div>
          </div>
        </div>
      </Modal>

      
      <div className="bg-off">
        <CardList />
      </div>

      <section className="h-[20rem] sm:h-[20rem] lg:h-[50rem] bg-off flex items-center">
        <div className="lg:h-3/5 w-4/5 mx-auto">
          <div className="pb-4">
            <h1 className="text-4xl font-bold text-primary text-left w-full font-Marcellus ">
              Confira um pouco do nosso trabalho
            </h1>
            <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
          </div>

          <div
            className="grid grid-rows-5 grid-columns-6 gap-2 h-full relative cursor-pointer col-span-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openVideo("url do seu vídeo")}
          >
            <div className="col-start-1 col-end-3 row-start-1 row-end-3">
              <Image
                src={yt1}
                className="w-full h-full object-cover rounded-2xl"
                alt="Image 1"
              />
            </div>
            <div className="col-start-3 col-end-5 row-start-1 row-end-3 ">
              <Image
                src={yt2}
                className="w-full h-full object-cover rounded-2xl"
                alt="Image 2"
              />
            </div>
            <div className="col-start-5 col-end-9 row-start-1 row-end-6">
              <Image
                src={yt3}
                className="w-full h-full object-cover rounded-2xl"
                alt="Image 3"
              />
            </div>
            <div className="col-start-1 col-end-5 row-start-3 row-end-6">
              <Image
                src={yt4}
                className="w-full h-full object-cover rounded-2xl"
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


      {/* <section className="h-[28rem] bg-off">
        <div className="p-4 bg-white">
          <div className="">
          <Image src={Ocean} alt="Logo" className="relative object-fill h-48" />
        </div>
          <h1 className="text-4xl font-bold text-primary text-center font-Marcellus ">
            Essencial para quem procura
            <div className="w-8 h-1 mt-2 ml-1 flex m-auto bg-primary"></div>
          </h1>
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 gap-5 w-full px-4 md:w-2/3 mx-auto py-4">
            <div className="col-span-1 flex justify-center items-center">
              <div>
                <span className="text-primary font-bold">Comemorações</span>
                <div className="flex justify-center py-2">
                  <Icon icon="party" svgProps={{ fill: "black" }} />
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div>
                <span className="text-primary font-bold">Visitações</span>
                <div className="flex justify-center py-2">
                  <Icon icon="lake" svgProps={{ fill: "black" }} />
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div>
                <span className="text-primary font-bold">
                  Churrasco em alto mar
                </span>
                <div className="flex justify-center py-2">
                  <Icon icon="barbecue" svgProps={{ fill: "black" }} />
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div>
                <span className="text-primary font-bold">
                  Diversão em Familia
                </span>
                <div className="flex justify-center py-2">
                  <Icon icon="family" svgProps={{ fill: "black" }} />
                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div>
                <span className="text-primary font-bold">Festas</span>
                <div className="flex justify-center py-2">
                  <Icon icon="dj" svgProps={{ fill: "black" }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <section className="w-full pb-12 sm:bg-white md:bg-off flex items-center">
        <div className="md:grid grid-cols-2 sm:w-4/5 mx-auto pt-20">
          <div className="col-span-1 flex justify-center relative z-10 bg-white rounded-2xl">
            <Image src={jumpGirls} alt="boat" className="w-full rounded-2xl" />
          </div>
          <div className="col-span-1 z-20 relative bg-white rounded-2xl">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary font-Marcellus ">
                {" "}
                Por onde estamos?
              </h1>
              <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
              <p className="text-lg pt-4 font-extralight text-gray-600">
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

      <section>
        <Faq />
      </section>

      {/* A footer section */}
      <div className="bg-footer border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
}
