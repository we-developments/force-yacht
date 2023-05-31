"use client";

// React Libs
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/font.css";

// Assets
import manBoat from "../src/images/pngs/manboat.png";

// Hooks & Utils
import { useIconGetter } from "../src/hooks/useIconGetter/useIconGetter";
import Footer from "@/src/components/Footer/footer";
import Modal from "@/src/components/Modal/modal";
import Faq from "@/src/components/Faq/faq";
import { useBoatManagement } from "@/services/boatManagement";
import dynamic from "next/dynamic";
import WhatsMessage from "@/src/components/WhatsMessage/whatsMessage";
import Video from "@/src/components/Video/video";
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";

const MyMap = dynamic(() => import("@/src/components/Map/MyMap"), {
  ssr: false,
});
const Banner = dynamic(() => import("@/src/components/Banner/banner"), {
  ssr: false,
});
const Boats = dynamic(() => import("@/src/components/Boats/boats"), {
  ssr: false,
});
const CardList = dynamic(() => import("@/src/components/Cards/cards"), {
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
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boats, setBoats] = useState<Boat[]>([]);
  const [selectedBoat, setSelectedBoat] = useState<Boat>([] as any);
  const [step, setStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isWhatsOpen, setIsWhatsOpen] = useState(true);

  const { getBoatsDoc } = useBoatManagement();

  const { Icon } = useIconGetter();

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

  return (
    <div className="z-10" style={{ height: "200vh" }}>
      <Banner
        setIsWhatsOpen={setIsWhatsOpen}
        setStep={setStep}
        isMobile={isMobile}
        handleScroll={handleScroll}
        scrolled={scrolled}
        handleModal={handleModal}
        isWhatsOpen={isWhatsOpen}
      />
      <section className="lg:h-fit" id="sobre-nos">
        <div className="flex justify-center items-center bg-white h-full">
          <div className="flex flex-col justify-center items-center relative py-4">
            <Icon icon="wheel" svgProps={{ fill: "#006aa1" }} />
            <div className="flex justify-center">
              <div className="pt-2 w-full px-4 lg:w-4/5 sm:p-4">
                <div className="flex justify-center mb-2"></div>
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

      <Boats boats={boats} handleModal={handleModal}/>

      <Modal
        isOpen={isModalOpen}
        handleModal={handleModal}
        stylesContent={"bg-white w-full xl:w-3/4 !h-[300vh] relative"}
      >
        <button type="button" className="z-30 w-5 right-4 top-2 absolute rounded-sm" onClick={() => setIsModalOpen(false)}>
          <XCircleIcon width={30} color="#02100E"/>
        </button>
        {
          isWhatsOpen && (
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
          arrows={selectedBoat && selectedBoat?.Images?.length > 1 ? true : false}
          renderDotsOutside={true}
          showDots={false}
          swipeable={selectedBoat && selectedBoat?.Images?.length > 1 ? true : false}
          draggable={selectedBoat && selectedBoat?.Images?.length > 1 ? true : false}
          infinite={true}
          autoPlay={selectedBoat && selectedBoat?.Images?.length < 1 ? true : false}
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
                  className="object-cover h-full lg:h-[44rem] w-full"
                />
                <div className="absolute inset-0 bg-black opacity-20 flex items-center justify-center">
                  <h1 className="text-white text-5xl font-bold">
                    {selectedBoat?.YatchName}
                  </h1>
                </div>
              </div>
            ))}
        </Carousel>
        )}
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
                  <div className="py-4 md:py-0">
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
                  isWhatsOpen={isWhatsOpen}
                />
              </div>
            ),
          }[step]
        }
      </Modal>

      <div className="bg-off">
        <CardList />
      </div>

      <Video boats={boats} />

      <MyMap/>



      <section id="faq">
        <Faq />
      </section>

      <div className="bg-footer border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
}
