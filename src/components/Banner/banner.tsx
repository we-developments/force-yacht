import banner5 from "../../images/pngs/banner5.jpg"
import Logo from "../../images/pngs/force.png";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Fragment, useState } from "react";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function Banner({isMobile, handleScroll, scrolled}: any) {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { Icon } = useIconGetter();

  const handleHover = () => {
    setMostrarMensagem(true);
  };

  const handleLeave = () => {
    setMostrarMensagem(false);
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

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });


  return (
    <>
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
    </>
  );
}
