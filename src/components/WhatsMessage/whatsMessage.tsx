import { Boat } from "@/app/page";
import React, { useEffect, useState } from "react";
import { useUserManagement } from "@/services/userManagement";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useIconGetter } from "@/src/hooks/useIconGetter";
import InputMask from "react-input-mask";

type WhatsProps = {
  name: string;
  phone: string;
  email: string;
  message: string;
  extras: string;
};

interface WhatsMessageProps {
  selectedBoat?: any;
  step?: number;
  setStep?: React.Dispatch<React.SetStateAction<number>> | any;
  isWhatsOpen: boolean;
  handleModal: (boat?: any) => void;
}

const WhatsMessage = ({
  selectedBoat,
  step,
  setStep,
  isWhatsOpen,
  handleModal,
}: WhatsMessageProps) => {
  const [dataSend, setDataSend] = useState({} as WhatsProps);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [extras, setExtras] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { getUserDoc, createUserDoc } = useUserManagement();

  const { Icon } = useIconGetter();

  const handleDataSend = (key: string, value: string) => {
    if (key && value) {
      setDataSend({ ...dataSend, [key]: value });
    }
  };
  
  const handleSubmit = () => {
    setNameError("");
    setPhoneError("");
    setEmailError("");

    if (name.trim() === "") {
      setNameError("Por favor, preencha o campo Nome.");
      return;
    }

    if (phone.trim() === "") {
      setPhoneError("Por favor, preencha o campo Telefone.");
      return;
    }

    if (email.trim() === "") {
      setEmailError("Por favor, preencha o campo E-mail.");
      return;
    }

    const formData = {
      name,
      phone,
      email,
      extras,
    };

    setName("");
    setPhone("");
    setEmail("");
    setExtras("");

    let dataWithMessage = "";

    


    if (selectedBoat && Object.keys(selectedBoat).length > 0) {
      dataWithMessage = `Olá, meu nome é ${formData.name}, tive interesse no aluguel da lancha ${selectedBoat?.YatchName}, gostaria de saber mais informações.`;
      if (formData?.extras?.length > 0) {
        dataWithMessage += ` Dúvidas extras: ${formData.extras}`;
      }
      handleDataSend("message", dataWithMessage);
    } else {
      dataWithMessage = `Olá, meu nome é ${formData.name}, tive interesse em alugar uma lancha, gostaria de saber mais informações. `;
      if (formData?.extras?.length > 0) {
        dataWithMessage += ` Algumas das minhas dúvidas: ${formData.extras}`;
      }
      handleDataSend("message", dataWithMessage);
    }

    let number = "55" + "47 99191-5647".replace(/[^\d]/g, "");

    let url = '';

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Este URL é usado para dispositivos móveis
      url = `whatsapp://send?text=${encodeURIComponent(dataWithMessage)}&phone=${number}`;
    } else {
      // Este URL é usado para desktop
      url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(dataWithMessage)}`;
    }

    getUserDoc(formData.email)
      .then((user: any) => {
        if (!user.length) {
          createUserDoc(formData)
            .then((res) => {
              window.open(
                `${url}&text=${encodeURIComponent(dataWithMessage)}`
              );
              setTimeout(() => {

                handleModal();
              }, 2000)
            })
            .catch((err) => console.log(err));
        } else {
          window.open(`${url}&text=${encodeURIComponent(dataWithMessage)}`);
          setTimeout(() => {

            handleModal();
          }, 2000)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 p-4 w-full">
        {isWhatsOpen && (
          <button type="button" className="py-4 w-5" onClick={() => setStep(0)}>
            <ArrowLeftIcon width={20} />
          </button>
        )}
        <h1 className="text-4xl font-bold text-primary text-left w-full font-Marcellus ">
          {isWhatsOpen
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <span className="text-red-500 text-sm">{nameError}</span>
            )}
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">Telefone</label>
            <InputMask
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
    ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
    focus:to-primary sm:text-sm sm:leading-6"
              mask="(99) 99999-9999"
              type="tel"
              name="messageToUser"
              placeholder="(99) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && (
              <span className="text-red-500 text-sm">{phoneError}</span>
            )}
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">E-mail</label>
            <input
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
              ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
              focus:to-primary sm:text-sm sm:leading-6"
              type="email"
              name="userEmail"
              placeholder="exemplo@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}
          </div>
          <div className="pb-4">
            <label className="block text-sm pb-2">
              Alguma informação extra que gostaria de adicionar?
            </label>
            <textarea
              className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
              name="extras"
              placeholder="Gostaria de alugar esta lancha no período X até Y, para Z pessoas..."
              value={extras}
              onChange={(e) => setExtras(e.target.value)}
            />
          </div>
        </div>
        <div className="p-4">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center gap-3"
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
