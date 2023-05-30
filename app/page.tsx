"use client";

// React Libs
import React, { useState, useEffect, Fragment } from "react";
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
import insta from "../src/images/pngs/insta.png";
import manBoat from "../src/images/pngs/manboat.png";
import jumpGirls from "../src/images/pngs/jump-girls.png";
import banner5 from "../src/images/pngs/banner5.jpg";

// Hooks & Utils
import { useIconGetter } from "../src/hooks/useIconGetter/useIconGetter";
import Footer from "@/src/components/Footer/footer";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "@/src/components/Modal/modal";
import Faq from "@/src/components/Faq/faq";
import CardList from "@/src/components/Cards/cards";
import { useBoatManagement } from "@/services/boatManagement";
import dynamic from "next/dynamic";
import WhatsMessage from "@/src/components/WhatsMessage/whatsMessage";

const MyMap = dynamic(() => import("@/src/components/Map/MyMap"), {
  ssr: false,
});

export interface Boat {
  Id?: string;
  YatchName: string;
  SizeBoat?: string;
  Included?: string;
  Capacity?: number;
  EndIn?: string;
  StartIn?: string;
  ExitLocation?: string;
  CreatedAt?: string;
  Images: string[];
  Description: string;
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boats, setBoats] = useState<Boat[]>([]);
  const [selectedBoat, setSelectedBoat] = useState<Boat>([] as any);
  const [step, setStep] = useState(0);
  const [randomIndexes, setRandomIndexes] = useState<number[]>([]);

  const { getBoatsDoc } = useBoatManagement();

  const { Icon } = useIconGetter();

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const offset = window.scrollY;

      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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

  const handleModal = (boat: Boat) => {
    setSelectedBoat(boat);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);

  useEffect(() => {
    getBoatsDoc().then((res) => {
      setBoats(res);
    });
  }, []);

  useEffect(() => {
    const newRandomIndexes = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * boats.length)
    );
    console.log(newRandomIndexes);
    setRandomIndexes(newRandomIndexes);
  }, [boats]);

  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const handleHover = () => {
    setMostrarMensagem(true);
  };

  const handleLeave = () => {
    setMostrarMensagem(false);
  };

  return (
    <div className="z-10" style={{ height: "200vh" }}>
      <div className="relative">
        <motion.button
          className="fixed bottom-4 right-4 z-10 p-3 bg-green-500 rounded-full cursor-pointer shadow-lg"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          whileHover={{ scale: 1.1 }}
        >
          <Icon icon="whats" svgProps={{ fill: "white" }} />
        </motion.button>

        {mostrarMensagem && (
          <motion.div
            className="fixed bottom-4 right-10 z-10 p-3 bg-green-500 rounded-full cursor-pointer shadow-lg"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "calc(100% - 160px)" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white font-bold z-50">Fale conosco</p>
          </motion.div>
        )}
      </div>

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
                  className="text-white cursor-pointer"
                >
                  Nossas embarcações
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("servicos")}
                  className="text-white cursor-pointer"
                >
                  Serviços
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("onde-estamos")}
                  className="text-white cursor-pointer"
                >
                  Onde estamos
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("nosso-trabalho")}
                  className="text-white cursor-pointer"
                >
                  Nosso trabalho
                </span>
              </li>
              <li className="text-sm sm:text-base text-center flex items-center">
                <span
                  onClick={() => scrollTo("faq")}
                  className="text-white cursor-pointer"
                >
                  FAQ
                </span>
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
                            <span
                              onClick={() => scrollTo("sobre-nos")}
                              className="text-white cursor-pointer"
                            >
                              Sobre nós
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
                            <span
                              onClick={() => scrollTo("nossas-embarcacoes")}
                              className="text-white"
                            >
                              Nossas embarcações
                            </span>
                          </li>

                          <li className="text-sm sm:text-base text-center flex items-center  border-b-2">
                            <span
                              onClick={() => scrollTo("onde-estamos")}
                              className="text-white cursor-pointer"
                            >
                              Onde estamos
                            </span>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center  border-b-2">
                            <span
                              onClick={() => scrollTo("nosso-trabalho")}
                              className="text-white cursor-pointer"
                            >
                              Nosso trabalho
                            </span>
                          </li>
                          <li className="text-sm sm:text-base text-center flex items-center  border-b-2">
                            <span
                              onClick={() => scrollTo("faq")}
                              className="text-white cursor-pointer"
                            >
                              FAQ
                            </span>
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
        style={{ top: "18%", left: "6%" }}
      >
        <animated.h1
          style={fade}
          className="text-white lg:text-large sm:text-5xl text-5xl font-Marcellus"
        >
          Force Yachts
        </animated.h1>
        <animated.div style={fade} className="flex gap-2 ">
          <div className="flex gap-4 h-20">
            <span className="text-white text-4xl lg:text-6xl sm:text-5xl font-Marcellus items-center flex gap-4">
              Navegue
            </span>
            <Icon icon="wave" svgProps={{ fill: "white" }} />
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
          className="text-lg sm:text-xl text-white font-Marcellus flex items-center mt-5"
        >
          Aluguéis premium de yachts e lanchas,
          <br />
          Explore os mares com estilo e conforto inigualáveis.
        </animated.p>
      </div>

      <section className="lg:h-fit" id="sobre-nos">
        <div className="flex justify-center items-center bg-white h-full">
          <div className="flex flex-col justify-center items-center relative">
            <div className="flex justify-center">
              <div className="pt-2 w-full px-4 lg:w-4/5 sm:p-4">
                <div className="flex justify-center mb-2">
                  <Icon icon="wheel" svgProps={{ fill: "#006aa1" }} />
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
              {boats.map((boat, index) => (
                <div
                  key={index}
                  className="bg-transparent shadow my-10 rounded-2xl hover:bg-white transition-all ease-out delay-200"
                >
                  <Image
                    src={boat?.Images[0]}
                    alt={boat.YatchName}
                    height={1500}
                    width={1500}
                    className="object-cover h-64 w-full rounded-t-2xl"
                  />
                  <div className="mt-2 px-8 py-4 relative">
                    <div className="flex justify-between">
                      <h2 className="text-xl font-bold text-primary">
                        {boat.YatchName}
                      </h2>
                      <span className="flex gap-2 text-base text-gray-400">
                        <Icon icon="location" svgProps={{ fill: "#DBDFE4" }} />
                        {boat.ExitLocation}
                      </span>
                    </div>
                    <div className="pt-2 h-32">
                      <p className="h-full font-extralight text-gray-600 overflow-hidden text-ellipsis">
                        {boat?.Description?.substring(0, 400) + "..."}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between p-4">
                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        <Icon icon="people" svgProps={{ fill: "#bdbdbd" }} />
                        <span className="text-gray-400">{boat.Capacity}</span>
                      </div>
                      <div className="flex gap-2">
                        <Icon icon="boatSize" svgProps={{ fill: "#bdbdbd" }} />
                        <span className="text-gray-400">
                          {boat.SizeBoat} pés
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleModal(boat)}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-extralight hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        Ver detalhes
                      </button>
                    </div>
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
        stylesContent={"bg-white w-full xl:w-3/4 !h-[300vh]"}
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
          arrows={selectedBoat?.Images?.length > 1 ? true : false}
          renderDotsOutside={true}
          showDots={false}
          swipeable={selectedBoat?.Images?.length > 1 ? true : false}
          draggable={selectedBoat?.Images?.length > 1 ? true : false}
          infinite={true}
          autoPlay={selectedBoat?.Images?.length < 1 ? true : false}
          containerClass="carousel-container"
        >
          {selectedBoat &&
            selectedBoat?.Images?.map((image, index) => (
              <div className="relative w-full h-72 md:h-[44rem]" key={index}>
                <Image
                  height={1500}
                  width={1500}
                  src={image}
                  alt={selectedBoat?.YatchName}
                  className="object-cover lg:h-[44rem] w-full"
                />
                <div className="absolute inset-0 bg-black opacity-20 flex items-center justify-center">
                  <h1 className="text-white text-5xl font-bold">
                    {selectedBoat?.YatchName}
                  </h1>
                </div>
              </div>
            ))}
        </Carousel>
        {
          {
            0: (
              <>
                <div className="md:grid grid-cols-2 p-4 gap-5 h-full sm:h-3/4">
                  <div className="flex justify-left border-2 rounded-2xl mb-4 sm:mb-0">
                    <div className="border-b border-black/10 p-4">
                      <h2 className="text-2xl font-extralight text-primary font-Marcellus ">
                        Informações da Embarcação
                      </h2>
                      <div className="w-8 h-0.5 ml-1 flex justify-start bg-primary"></div>
                      <div className="flex gap-2 py-4">
                        <Icon icon="boat" />
                        <h2 className="">{selectedBoat?.YatchName}</h2>
                      </div>
                      <p className="text-gray-400 text-sm overflow-hidden">
                        {selectedBoat?.Description?.substring(0, 200) + "..."}
                      </p>
                    </div>
                  </div>
                  <div className="border-2 rounded-2xl p-4">
                    <div className="">
                      <h2 className="text-2xl font-extralight text-primary font-Marcellus">
                        Detalhes:
                      </h2>
                      <div className="w-8 h-0.5 ml-1 flex justify-start bg-primary"></div>
                    </div>
                    <div className="grid grid-cols-1 py-4 gap-4">
                      <div className="flex justify-start gap-2">
                        <div className="flex items-center">
                          <Icon icon="people" />
                        </div>
                        <span className="font-light flex items-center">
                          Capacidade: {selectedBoat?.Capacity} pessoas
                        </span>
                      </div>
                      <div className="flex justify-start gap-2">
                        <div className="flex items-center">
                          <Icon icon="boatSize" />
                        </div>
                        <span className="font-light flex items-center">
                          Tamanho: {selectedBoat?.SizeBoat} pés
                        </span>
                      </div>
                      <div className="flex justify-start gap-2">
                        <div className="flex items-center">
                          <Icon icon="enter" />
                        </div>
                        <span className="font-light flex items-center">
                          Entrada às {selectedBoat?.StartIn}
                        </span>
                      </div>
                      <div className="flex justify-start gap-2">
                        <div className="flex items-center">
                          <Icon icon="exit" />
                        </div>
                        <span className="font-light flex items-center">
                          Retorno às {selectedBoat?.EndIn}
                        </span>
                      </div>
                      <div className="flex justify-start gap-2">
                        <div className="flex items-center">
                          <Icon icon="included" />
                        </div>
                        <span className="font-light flex items-center">
                          Incluso: {selectedBoat?.Included}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-primary text-white font-bold py-2 px-6 rounded"
                      onClick={() => setStep(1)}
                    >
                      Tenho Interesse
                    </button>
                  </div>
                </div>
              </>
            ),
            1: (
              <div className="w-11/12 mx-auto h-full sm:h-3/4">
                <WhatsMessage
                  selectedBoat={selectedBoat}
                  setStep={setStep}
                  step={step}
                />
              </div>
            ),
          }[step]
        }
      </Modal>

      <div className="bg-off">
        <CardList />
      </div>

      <section
        className="h-[26rem] sm:h-[20rem] lg:h-[50rem] bg-off flex items-center"
        id="nosso-trabalho"
      >
        {boats && boats.length > 0 && (
          <div className="lg:h-3/5 w-full px-4 md:w-4/5 mx-auto">
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
            >
              <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                <Image
                  src={boats[randomIndexes[1]]?.Images[randomIndexes[0]]}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 1"
                />
              </div>
              <div className="col-start-3 col-end-5 row-start-1 row-end-3 ">
                <Image
                  src={boats[randomIndexes[0]]?.Images[randomIndexes[1]]}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 2"
                />
              </div>
              <div className="col-start-5 col-end-9 row-start-1 row-end-6">
                <Image
                  src={boats[randomIndexes[1]]?.Images[randomIndexes[2]]}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 3"
                />
              </div>
              <div className="col-start-1 col-end-5 row-start-3 row-end-6">
                <Image
                  src={boats[randomIndexes[2]]?.Images[randomIndexes[1]]}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 4"
                />
              </div>
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
        )}

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

      <section
        className="w-full pb-12 sm:bg-white md:bg-off flex items-center"
        id="onde-estamos"
      >
        <div className="md:grid grid-cols-2 sm:w-4/5 mx-auto pt-20">
          <div className="col-span-1 flex justify-center relative z-10 bg-white rounded-2xl">
            <Image src={jumpGirls} alt="boat" className="w-full rounded-2xl" />
          </div>
          <div className="col-span-1 z-20 relative bg-white rounded-2xl">
            <div className="p-8">
              <h1 className="text-4xl font-bold text-primary font-Marcellus">
                Por onde nos encontrar?
              </h1>
              <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
              <p className="text-lg pt-4 font-extralight text-gray-600">
                Encontrar a Force Yacht é fácil! Se você é um entusiasta das
                redes sociais, visite nosso perfil no Instagram para obter
                informações atualizadas, fotos deslumbrantes das nossas lanchas
                e detalhes sobre os pacotes disponíveis.
              </p>
              <p className="text-lg pt-4 font-extralight text-gray-600">
                Não perca a oportunidade de explorar a beleza natural de Porto
                Belo enquanto desfruta do conforto e da emoção de uma lancha de
                alta qualidade. Na Force Yacht, garantimos que você tenha uma
                experiência única e memorável. Aguardamos ansiosamente o seu contato para começar a
                planejar sua aventura marítima. Vamos navegar juntos!{" "}
              </p>
            </div>
            <div className="flex px-8">
              <Link
                href="https://www.instagram.com/forceyachts/"
                target="_blank"
              >
                <Image src={insta} alt="insta" height={300} />
              </Link>
              <div className="p-4">
                <h1 className="text-2xl font-bold text-primary font-Marcellus">
                  Nos siga pelas redes sociais.
                </h1>
                <div>
                  <Link
                    href="https://www.instagram.com/forceyachts/"
                    target="_blank"
                  >
                    <Icon
                      icon="insta"
                      svgProps={{ fill: "#9c9c9c", width: "30px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="py-4 px-8 pb-2">
              <MyMap />
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <Faq />
      </section>

      <div className="bg-footer border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
}
