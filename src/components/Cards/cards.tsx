import family from "../../images/pngs/family.jpg";
import party from "../../images/pngs/party.jpg";
import jumpMan from "../../images/pngs/jumpMan.jpg";

import { useIconGetter } from "@/src/hooks/useIconGetter";
import Image from "next/image";


export default function Card() {
  const { Icon } = useIconGetter();

  return (
    <div className="relative bg-off">
      {/* Background image and overlap */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="relative w-full flex-1 bg-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://force-yachts.s3.sa-east-1.amazonaws.com/banner3.jpg"
              alt="Banner"
              className="h-full w-full object-cover object-center"
              fill
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50" />
        </div>
        <div className="h-32 w-full bg-off md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="https://force-yachts.s3.sa-east-1.amazonaws.com/banner3.jpg"
                alt="Banner"
                className="h-full w-full object-cover object-center"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-32">
          <div className="flex justify-center mb-2">
            <Icon icon="anchor" svgProps={{ fill: "white" }} />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extralight tracking-tight sm:text-4xl font-Marcellus text-white">
              Fornecemos um serviço essencial para quem procura
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300 font-Marcellus">
              Diversão em família, eventos, comemorações...	
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="relative -mt-96 sm:mt-0"
      >
        <h2 id="collection-heading" className="sr-only">
          Collections
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
          <div className="group relative h-96 rounded-2xl bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto">
            <div>
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-2xl "
              >
                <div className="absolute inset-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={party}
                    alt="family"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-2xl p-6">
                <div>
                  <p
                    aria-hidden="true"
                    className="text-lg text-white font-Marcellus"
                  >
                    Faça sua festa, comemoração, evento...
                  </p>
                  <h3 className="mt-1 font-light text-white flex gap-10">
                    <div>
                      <span className="absolute inset-0" />
                      Desfrute do melhor da vida
                    </div>
                    <div className="absolute top-0 pt-2">
                      <Icon icon="party" svgProps={{ fill: "#006aa1" }} />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 rounded-2xl bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto">
            <div>
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-2xl "
              >
                <div className="absolute inset-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={jumpMan}
                    alt="family"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-2xl p-6">
                <div>
                  <p
                    aria-hidden="true"
                    className="text-lg text-white font-Marcellus"
                  >
                    Aprecie uma bela visão do mar...
                  </p>
                  <h3 className="mt-1 font-light text-white flex gap-10">
                    <div>
                      <span className="absolute inset-0" />
                      Divirta-se como quiser
                    </div>
                    <div className="absolute top-0 pt-2">
                      <Icon icon="cheer" svgProps={{ fill: "#006aa1" }} />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative h-96 rounded-2xl bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto">
            <div>
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={family}
                    alt="family"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-2xl p-6">
                <div>
                  <p
                    aria-hidden="true"
                    className="text-lg text-white font-Marcellus"
                  >
                    Traga sua familia...
                  </p>
                  <h3 className="mt-1 font-light text-white flex gap-10">
                    <div>
                      <span className="absolute inset-0" />
                      Aproveite os momentos ao lado de quem ama
                    </div>
                    <div className="absolute top-0 pt-2">
                      <Icon icon="family" svgProps={{ fill: "#006aa1" }} />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
