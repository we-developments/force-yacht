import React, { useEffect, useState } from 'react'

type WhatsProps = {
  name: string,
  mobileNumber: string,
  email: string,
  message: string
}

const WhatsMessage = () => {
  const [dataSend, setDataSend] = useState({} as WhatsProps)

  const handleDataSend = (key: string, value: string) => {
    if (key && value) {
      setDataSend({ ...dataSend, [key]: value })
    }
  }

  const handleSubmit = () => {
    let number = ('11 98356-8718').replace(/[^\w\s]/gi, "").replace(/ /g, "");

    let url = `https://web.whatsapp.com/send?phone=${number}`;

    window.open(`${url}&text=${encodeURI(dataSend.message)}&app_absent=0`);
  }

  useEffect(() => {
    let dataWithMessage = `
        Nome: ${dataSend.name}
        Email: ${dataSend.email}
        Exemplos ↑
        
        Olá, meu nome é ${dataSend.name} e eu tenho interesse em alugar uma lancha.
    `
    handleDataSend('message', dataWithMessage)
  }, [dataSend])

  return (
    <div>

      <div className='flex flex-col gap-2 '>
        <div>
          <label className="block text-sm pb-2">Nome</label>
          <input
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:to-primary sm:text-sm sm:leading-6"
            type="tel"
            name="numberUser"
            id="numberUser"
            onChange={(e) => { handleDataSend('name', e.target.value) }}
          />
        </div>
        <div>
          <label className="block text-sm pb-2">Telefone</label>
          <input
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
           ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
           focus:to-primary sm:text-sm sm:leading-6"
            type="text"
            name="messageToUser"
            id="messageToUser"
            onChange={(e) => { handleDataSend('mobileNumber', e.target.value) }}
          />
        </div>
        <div>
          <label className="block text-sm pb-2">E-mail</label>

          <input
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
            focus:to-primary sm:text-sm sm:leading-6"
            type="email"
            name="userEmail"
            id="userEmail"
            onChange={(e) => { handleDataSend('email', e.target.value) }}
          />
        </div>
      </div>

      <div className='my-4'>
        <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handleSubmit}>
          Enviar mensagem
        </button>
      </div>
    </div>
  )
}

export default WhatsMessage