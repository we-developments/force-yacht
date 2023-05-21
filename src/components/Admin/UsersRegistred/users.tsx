import React from 'react'

const Users = () => {
    return (
        <div>
            <div className='flex justify-center mt-5 text-primary'>
                <p className='text-2xl'>Usuários Registrados</p>
            </div>
            <div >
                <div className='flex justify-around my-10'>
                    <div className="flex flex-col xl:w-2/3 border p-6 rounded-xl bg-white text-primary">
                        <div className="sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-sky-800">
                                            <tr>
                                                <th scope="col" className="px-6 py-4">Nome</th>
                                                <th scope="col" className="px-6 py-4">Telefone</th>
                                                <th scope="col" className="px-6 py-4">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="border-b dark:border-sky-800">
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">Exemplo1</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">(47) 9 9999-9999</td>
                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">teste@teste.com.br</td>
                                                <td className='items-center w-1/4 justify-center'>
                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                        Enviar mensagem
                                                    </button>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users