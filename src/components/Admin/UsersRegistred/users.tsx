import { useUserManagement } from '@/services/userManagement'
import React, { useEffect, useState } from 'react'
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useIconGetter } from '@/src/hooks/useIconGetter';

type UserProps = {
    name: string,
    email: string,
    phone: string
}

const Users = () => {
    const [users, setUsers] = useState([] as UserProps[])

    const { getUsersDoc } = useUserManagement()

    const { Icon } = useIconGetter();

    useEffect(() => {
        getUsersDoc().then((usersResponse) => {
            if (usersResponse) setUsers(usersResponse)
        }).catch(err => console.log('err: ', err))
    }, [])

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
                                    {users && users.length > 0 ? (
                                        <table className="min-w-full text-left text-sm font-light">
                                            <thead className="border-b font-medium dark:border-sky-800">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">Nome</th>
                                                    <th scope="col" className="px-6 py-4">Telefone</th>
                                                    <th scope="col" className="px-6 py-4">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((user) => {
                                                        return (
                                                            <tr key={user.email} className="border-b dark:border-sky-800">
                                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">{user.name}</td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">{user.phone}</td>
                                                                <td className="whitespace-nowrap px-6 py-4 text-base font-normal">{user.email}</td>
                                                                <td className='items-center w-1/4 justify-center'>
                                                                    <button type='button' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                                                                        <Icon icon="whats" svgProps={{ fill: "white" }} />

                                                                        Enviar mensagem
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    ) : (
                                        <div className="flex bg-blue-200 rounded-lg items-center text-center justify-center w-full mt-4 px-16 h-16">
                                            <ExclamationTriangleIcon width={36} className='mr-2' />
                                            <p>
                                                Não existe <span className="font-medium"> Usuários!</span> cadastrados!
                                            </p>
                                        </div>
                                    )}
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