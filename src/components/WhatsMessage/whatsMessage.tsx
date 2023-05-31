import { Boat } from "@/app/page";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type WhatsProps = {
  name: string;
  mobileNumber: string;
  email: string;
  message: string;
  extras: string;
};

interface WhatsMessageProps {
  selectedBoat?: Boat;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>> | any;
  isWhatsOpen: boolean;
}

const WhatsMessage = ({ selectedBoat, step, setStep, isWhatsOpen }: WhatsMessageProps) => {
  const [dataSend, setDataSend] = useState({} as WhatsProps);

  const handleDataSend = (key: string, value: string) => {
    if (key && value) {
      setDataSend({ ...dataSend, [key]: value });
    }
  };

  const { Icon } = useIconGetter();

  const handleSubmit = () => {
    let number = "11 98356-8718".replace(/[^\w\s]/gi, "").replace(/ /g, "");

    let url = `https://web.whatsapp.com/send?phone=${number}`;

    window.open(`${url}&text=${encodeURI(dataSend.message)}&app_absent=0`);
  };

  useEffect(() => {
    let dataWithMessage = "";

    if (selectedBoat) {
      dataWithMessage = `      
      Olá, meu nome é ${dataSend.name}, tive interesse no aluguel da lancha ${selectedBoat?.YatchName}, gostaria de saber mais informações.
      Dúvidas extras: ${dataSend.extras}
      `;
    } else {
      dataWithMessage = `      
      Olá, meu nome é ${dataSend.name}, tive interesse em alugar uma lancha, gostaria de saber mais informações.
      Dúvidas extras: ${dataSend.extras}`
    }
    handleDataSend("message", dataWithMessage);
  }, [dataSend]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 p-4 w-full">
        {isWhatsOpen && (
          <button type="button" className="py-4 w-5" onClick={() => setStep(0)}>
            <ArrowLeftIcon width={20} />
          </button>
        )}
        <h1 className="text-4xl font-bold text-primary text-left w-full font-Marcellus ">
          {selectedBoat
            ? "Teve interesse nesta embarcação?"
            : "Teve interesse em alguma embarcação?"}
        </h1>
        <span className="text-gray-500 text-left w-full py-2">
          Fale conosco pelo WhatsApp e lhe daremos as informações necessárias.
        </span>

        <div className="">
          <div className="pb-4">
            <label className="block text-sm pb-2">Nome</label>
            <input
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-primary sm:text-sm sm:leading-6"
              type="text"
              name="numberUser"
              placeholder="John Doe"
              id="numberUser"
              onChange={(e) => {
                handleDataSend("name", e.target.value);
              }}
            />
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">Telefone</label>
            <InputMask
              mask="(99) 9999-9999"
              maskChar={null}
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
          ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:to-primary sm:text-sm sm:leading-6"
              type="tel"
              name="messageToUser"
              id="messageToUser"
              placeholder="(99) 9999-9999"
              onChange={(e) => {
                handleDataSend("mobileNumber", e.target.value);
              }}
            />
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">E-mail</label>

            <input
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:to-primary sm:text-sm sm:leading-6"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="exemplo@exemplo.com"
              onChange={(e) => {
                handleDataSend("email", e.target.value);
              }}
            />
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">
              Alguma informação extra que gostaria de adicionar?
            </label>

            <textarea
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
              name="extras"
              id="extras"
              placeholder="Gostaria de alugar esta lancha no período X até Y, para Z pessoas..."
              onChange={(e) => {
                handleDataSend("extras", e.target.value);
              }}
            />
          </div>
        </div>
      <div className="p-4">
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          <Icon icon="whats" svgProps={{ fill: "white" }} />
          Enviar mensagem
        </button>
      </div>
      </div>

    </div>
  );
};

export default WhatsMessage;
