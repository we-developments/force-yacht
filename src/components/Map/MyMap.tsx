import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import Link from "next/link";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import Image from "next/image";
import insta from "../../images/pngs/insta.png";
import jumpGirls from "../../images/pngs/jump-girls.png";


const MyMap = () => {
  const [isClient, setIsClient] = useState(false);
  const { Icon } = useIconGetter();

  return (
    <section
      className="w-full pb-12 sm:bg-white md:bg-off flex items-center"
      id="onde-estamos"
    >
      <div className="md:grid grid-cols-2 sm:w-4/5 mx-auto pt-20">
        <div className="col-span-1 flex justify-center relative bg-white rounded-2xl">
          <Image src={jumpGirls} alt="boat" className="w-full rounded-2xl" />
        </div>
        <div className="col-span-1 z-20 relative bg-white rounded-2xl">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-primary font-Marcellus">
              Por onde nos encontrar?
            </h1>
            <div className="w-8 h-1 mt-2 ml-1 flex justify-start bg-primary"></div>
            <p className="text-lg pt-4 font-extralight text-gray-600">
              Encontrar a Force Yacht é fácil! Se você é um entusiasta das redes
              sociais, visite nosso perfil no Instagram para obter informações
              atualizadas, fotos deslumbrantes das nossas lanchas e detalhes
              sobre os pacotes disponíveis.
            </p>
            <p className="text-lg pt-4 font-extralight text-gray-600">
              Não perca a oportunidade de explorar a beleza natural de Porto
              Belo enquanto desfruta do conforto e da emoção de uma lancha de
              alta qualidade. Na Force Yacht, garantimos que você tenha uma
              experiência única e memorável. Aguardamos ansiosamente o seu
              contato para começar a planejar sua aventura marítima. Vamos
              navegar juntos!{" "}
            </p>
          </div>
          <div className="flex px-8">
            <Link href="https://www.instagram.com/forceyachts/" target="_blank">
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
                  className="flex items-center gap-2"
                >
                  <Icon
                    svgProps={{ fill: "#9c9c9c", width: "30px" }}
                    icon="insta"
                  />
                    <p className="text-primary text-normal font-semibold text-lg">@forceyachts</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-4 px-8 pb-2">
            <MapContainer
              center={[-27.154327, -48.54359]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: 400, width: "100%", borderRadius: 16 }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-27.154327, -48.54359]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyMap;
