import { useUserManagement } from "@/services/boatManagement"
import { useEffect, useState } from "react"
import { PhotoIcon } from "@heroicons/react/24/outline";

function classNames(...classes: Array<Object>) {
  return classes.filter(Boolean).join(' ')
}

type BoatProps = {
  id: string,
  Capacity: number,
  SizeBoat: string,
  Included: string,
  YatchName: string,
  CreatedAt: Date,
  StartIn: string,
  EndIn: string,
  ExitLocation: string,
  length: number
}

export default function Boats() {
  const [boats, setBoats] = useState([])

  const { getBoatsDoc } = useUserManagement()

  useEffect(() => {
    getBoatsDoc().then((boats) => {
      if (boats.length) setBoats(boats)
    }).catch(err => console.log('erro: ', err))
  }, [])

  return (
    <div className="pr-2 sm:pr-6 lg:pr-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Embarcações cadastradas</h1>
          <p className="mt-2 text-sm text-gray-700">
            Aqui será possível conferir, inserir e editar as <strong className="font-semibold text-gray-900">Embarcações</strong> ja cadastradas
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-tertiary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cadastrar nova Embarcação
          </button>
        </div>
      </div>
      {boats && boats?.length > 0 ? (
        <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg px-2">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Nome Embarcação
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Capacidade
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Tamanho
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Incluido
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Horários
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Local de saída
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Imagens
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <button className="sr-only">Edit</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {boats.map((boat: BoatProps, planIdx) => (
                <tr key={boat?.id}>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                    )}
                  >
                    <div className="font-medium text-gray-900">
                      {boat.YatchName}
                    </div>
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {boat.Capacity} Pessoas
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {boat.SizeBoat} Pés
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                    )}
                  >
                    {boat.Included}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    Saída: {boat.StartIn}Hrs <br />
                    Retorno: {boat.EndIn}Hrs
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    {boat.ExitLocation}
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-gray-200',
                      'px-3 py-3.5 text-sm text-gray-500'
                    )}
                  >
                    <PhotoIcon width={32} className="hover:text-primary cursor-pointer hover:animate-bounce"/>
                  </td>
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                    )}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                    >
                      Edit<span className="sr-only"></span>
                    </button>
                    {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[200px] flex items-center justify-center">
          <div className="flex bg-yellow-100 rounded-lg p-4 mb-4 justify-center  h-16">
            <p>
              Ainda não existe nenhum registro de <span className="font-medium"> embarcações!</span> Por favor, cadastre uma nova embarcação.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}