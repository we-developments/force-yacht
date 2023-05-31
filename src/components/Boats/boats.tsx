import { Boat } from "@/app/page";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import Image from "next/image";
import Carousel from "react-multi-carousel";

export default function Boats({ boats, handleModal }: any) {
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

  const { Icon } = useIconGetter();

  return (
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
              {boats.map((boat: any, index: number) => (
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
                  <div className="sm:flex block justify-between p-4">
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
                    <div className="py-4 sm:py-0 flex justify-end">
                      <button
                        type="button"
                        onClick={() => handleModal(boat)}
                        className="p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-extralight hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
  );
}
