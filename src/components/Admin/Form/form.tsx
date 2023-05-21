import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.schema";
import { Timestamp } from "firebase/firestore";
import { useState } from "react";
import { useBoatManagement } from "@/services/boatManagement";

// Defina um tipo para os dados do formulário
interface FormValues {
  selectedBoat: BoatProps,
  handleSaveNewBoat: (values: any) => void;
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
  Images: string[],
  ExitLocation: string,
  length: number
}

type ErrorsProps = {
  Capacity: string,
  SizeBoat: string,
  Included: string,
  YatchName: string,
  StartIn: string,
  EndIn: string,
  Images: string,
  ExitLocation: string,
}

export default function Formulario({ selectedBoat, handleSaveNewBoat }: FormValues) {

  const [errors, setErrors] = useState({} as ErrorsProps)
  const [values, setValues] = useState(selectedBoat || {
    Capacity: 0,
    SizeBoat: '',
    Included: '',
    YatchName: '',
    StartIn: '',
    EndIn: '',
    Images: [],
    ExitLocation: '',
  })

  const { createBoatsDoc } = useBoatManagement()

  const handleSave = (e: any) => {
    e.preventDefault()

    let newErrors = {} as ErrorsProps

    if (!values.YatchName) {
      newErrors.YatchName = 'Este campo é obrigatório';
    }
    if (!values.Capacity) {
      newErrors.Capacity = 'Este campo é obrigatório';
    }
    if (!values.SizeBoat) {
      newErrors.SizeBoat = 'Este campo é obrigatório';
    }
    if (!values.Included) {
      newErrors.Included = 'Este campo é obrigatório';
    }
    if (!values.StartIn) {
      newErrors.StartIn = 'Este campo é obrigatório';
    }
    if (!values.EndIn) {
      newErrors.EndIn = 'Este campo é obrigatório';
    }
    if (!values.ExitLocation) {
      newErrors.ExitLocation = 'Este campo é obrigatório';
    }


    if (!values.Images || values.Images.length === 0) {
      newErrors.Images = "É necessário selecionar pelo menos uma imagem";
    }

    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some((error) => error !== "");
    if (!hasErrors) {
      handleSaveNewBoat(values)
    }

  }

  const handleValue = (key: string, value: any) => {
    setValues({ ...values, [key]: value })

    Object.keys(errors).map(error => {
      if (error === key) {
        setErrors({ ...errors, [key]: '' })
      }
    })
  }

  return (
    <form
      className="p-8 bg-gray-100 rounded-md shadow-md h-fit"
    >
      <h1 className="text-lg font-bold text-center mb-4">
        Formulário de Embarcação
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm pb-2">Nome da embarcação</label>
          <input
            value={values?.YatchName || ''}
            onChange={(e) => { handleValue("YatchName", e.target.value) }}
            type="text"
            name="text"
            id="text"
            className="block p-2 w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            placeholder="Nome"
          />
          <p className="text-red-600 text-sm">{errors.YatchName}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Capacidade de pessoas</label>
          <input
            value={values?.Capacity || ''}
            onChange={(e) => { handleValue("Capacity", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
          />
          <p className="text-red-600 text-sm">{errors.Capacity}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Tamanho da embarcação</label>
          <input
            value={values?.SizeBoat || ''}
            onChange={(e) => { handleValue("SizeBoat", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
          />
          <p className="text-red-600 text-sm">{errors.SizeBoat}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Incluso</label>
          <input
            value={values?.Included || ''}
            onChange={(e) => { handleValue("Included", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="string"
          />
          <p className="text-red-600 text-sm">{errors.Included}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Horário de saída</label>
          <input
            value={values?.StartIn || ''}
            onChange={(e) => { handleValue("StartIn", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="time"
          />
          <p className="text-red-600 text-sm">{errors.StartIn}</p>
        </div>
        <div>
          <label className="block text-sm pb-2">Horário de retorno</label>
          <input
            value={values?.EndIn || ''}
            onChange={(e) => { handleValue("EndIn", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="time"
          />
          <p className="text-red-600 text-sm">{errors.EndIn}</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-3">
        <div >
          <label className="block text-sm pb-2">Imagens</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="file"
            name="images"
            id="images"
            multiple
            onChange={(e) => handleValue('Images', e.target.files)}
          />
          <p className="text-red-600 text-sm">{errors.Images}</p>

        </div>

        <div >
          <label className="block text-sm pb-2">Local</label>
          <input
            value={values?.ExitLocation || ''}
            onChange={(e) => { handleValue("ExitLocation", e.target.value) }}
            className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="string"
          />
          <p className="text-red-600 text-sm">{errors.ExitLocation}</p>
        </div>
      </div>


      <button
        onClick={(e) => handleSave(e)}
        className="w-1/3 py-2 mt-4 text-white bg-tertiary rounded-md"

      >
        Enviar
      </button>
    </form>
  );
}
