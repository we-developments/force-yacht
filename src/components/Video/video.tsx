"use client";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import Image from "next/image";
import { useEffect, useState } from "react";
import lancha1 from "../../images/pngs/lancha1.jpg";
import lancha2 from "../../images/pngs/lancha2.jpg";
import lancha3 from "../../images/pngs/lancha3.jpg";
import lancha4 from "../../images/pngs/lancha4.jpg";

export default function Video({ boats }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false);

  const [isMobile, setIsMobile] = useState(false);
  const { Icon } = useIconGetter();

  useEffect(() => {
    const checkMobile = () => {
      // Aqui estamos assumindo "mobile" como qualquer dispositivo com largura de tela menor que 768px
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setIsMobile(isMobile);
      isMobile ? setIsHovered(true) : "";
    };

    // Verifica imediatamente ao carregar a página
    checkMobile();

    // Atualiza ao redimensionar a janela
    window.addEventListener("resize", checkMobile);

    // Limpando evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      className="h-[34rem] sm:h-[20rem] lg:h-[50rem] bg-off flex items-center"
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
          {!isMobile ? (
            <div
              className="grid grid-rows-5 grid-columns-6 gap-2 h-full relative cursor-pointer col-span-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="col-start-1 col-end-3 row-start-1 row-end-3">
                <Image
                  src={lancha2}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 1"
                />
              </div>
              <div className="col-start-3 col-end-5 row-start-1 row-end-3 ">
                <Image
                  src={lancha1}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 2"
                />
              </div>
              <div className="col-start-5 col-end-9 row-start-1 row-end-6">
                <Image
                  src={lancha3}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 3"
                />
              </div>
              <div className="col-start-1 col-end-5 row-start-3 row-end-6">
                <Image
                  src={lancha4}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 4"
                />
              </div>
              {isHovered && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  onClick={() => setSelectedVideo(true)}
                >
                  <div className="">
                    <span className="text-white text-3xl">
                      Assista nosso vídeo
                    </span>
                    <div className="flex justify-center">
                      <Icon
                        svgProps={{ fill: "#fff", width: "80px" }}
                        icon="play"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="relative">
                <Image
                  src={lancha2}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 4"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  onClick={() => setSelectedVideo(true)}
                >
                  <div className="">
                    <span className="text-white text-3xl">
                      Assista nosso vídeo
                    </span>
                    <div className="flex justify-center">
                      <Icon
                        svgProps={{ fill: "#fff", width: "80px" }}
                        icon="play"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {selectedVideo && (
        <div
          className="fixed z-[9999999999999] top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50"
          onClick={(event) => {
            // Confira se o clique foi no fundo e não no vídeo ou no botão de fechamento.
            if (event.target === event.currentTarget) {
              setSelectedVideo(false);
            }
          }}
        >
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/828589406?h=22114885e6&byline=0&portrait=0&title=0"
            width="840"
            height="360"
            allowFullScreen
            className="z-40"
          ></iframe>
          <button
            onClick={() => setSelectedVideo(false)}
            className="absolute top-4 right-10 bg-black bg-opacity-50 rounded-full p-2 text-white text-2xl z-[999999999999]"
          >
            X
          </button>
        </div>
      )}
    </section>
  );
}
