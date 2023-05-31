"use client"
import { useIconGetter } from "@/src/hooks/useIconGetter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Video({ boats }: any) {
    const [isHovered, setIsHovered] = useState(false);
    const [randomIndexes, setRandomIndexes] = useState<number[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<boolean>(false);

    const { Icon } = useIconGetter();

    useEffect(() => {
        const newRandomIndexes = Array.from({ length: 4 }, () =>
          Math.floor(Math.random() * boats.length)
        );
        setRandomIndexes(newRandomIndexes);
      }, [boats]);

    return (
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
                  src={boats[randomIndexes[1]]?.Images[0]}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 1"
                />
              </div>
              <div className="col-start-3 col-end-5 row-start-1 row-end-3 ">
                <Image
                  src={boats[randomIndexes[0]]?.Images[0]}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 2"
                />
              </div>
              <div className="col-start-5 col-end-9 row-start-1 row-end-6">
                <Image
                  src={boats[randomIndexes[1]]?.Images[0]}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 3"
                />
              </div>
              <div className="col-start-1 col-end-5 row-start-3 row-end-6">
                <Image
                  src={boats[randomIndexes[2]]?.Images[0]}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  alt="Image 4"
                />
              </div>
              {isHovered && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setSelectedVideo(true)}>
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
              onClick={() => setSelectedVideo(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              X
            </button>
          </div>
        )}
      </section>
    )
}