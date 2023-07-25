import { useUserManagement } from "@/services/userManagement";
import React, { useEffect, useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useIconGetter } from "@/src/hooks/useIconGetter";

type UserProps = {
  name: string;
  email: string;
  phone: string;
  id: number;
};

const Users = () => {
  const [users, setUsers] = useState([] as UserProps[]);

  const { getUsersDoc, deleteUserDoc } = useUserManagement();

  const { Icon } = useIconGetter();

  function handleDelet(currentId: number) {
    deleteUserDoc(currentId)
      .then(() => {
        getUsersDoc()
          .then((usersResponse) => {
            if (usersResponse) setUsers(usersResponse);
          })
          .catch((err) => console.log("err: ", err));
      })
      .catch((err) => console.log("err: ", err));
  }

  function sendMessage(userNumber: string) {
    let number = userNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    let message = encodeURIComponent("Digite aqui a mensagem para o usuário..");
    let url = `https://web.whatsapp.com/send?phone=${number}&text=${message}`;

    // Abre uma nova janela do navegador com o URL
    window.open(url, "_blank");
  }

  useEffect(() => {
    getUsersDoc()
      .then((usersResponse) => {
        if (usersResponse) setUsers(usersResponse);
      })
      .catch((err) => console.log("err: ", err));
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-5 text-primary">
        <p className="text-2xl">Usuários Registrados</p>
      </div>
      <div>
        <div className="md:flex justify-around my-10">
          <div className="flex flex-col w-full border p-6 rounded-xl bg-white text-primary">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                <div className="flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                            >
                              Nome
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Número
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                            </th>
      
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {users.map((person) => (
                            <tr key={person.email} className="even:bg-gray-50">
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                {person.name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.phone}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {person.email}
                              </td>
                              <td className="relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 gap-2 flex">
                                <button
                                  type="button"
                                  className="bg-green-600 hover:bg-green-700 text-white font-bold p-1 rounded flex gap-2 items-center text-xs"
                                  onClick={() => sendMessage(person.phone)}
                                >
                                  <Icon
                                    icon="whats"
                                    svgProps={{ fill: "white" }}
                                  />
                                  Enviar mensagem
                                </button>
                                <button
                                  type="button"
                                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center"
                                  onClick={() => handleDelet(person.id)}
                                >
                                  Deletar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
