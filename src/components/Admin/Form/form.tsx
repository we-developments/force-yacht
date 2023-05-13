import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./form.schema";

// Defina um tipo para os dados do formulário
interface FormValues {
  nomeEmbarcacao: string;
  peso: number;
  valor: number;
  capacidadePessoas: number;
  valorPorPessoa: number;
}

export default function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 bg-gray-100 rounded-md shadow-md h-fit"
    >
      <h1 className="text-lg font-bold text-center mb-4">
        Formulário de Embarcação
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-1">
          <label className="block text-sm pb-2">Nome da embarcação</label>
          <input
            type="text"
            {...register("nomeEmbarcacao")}
            name="text"
            id="text"
            className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            placeholder="Nome"
          />
          <p className="text-red-600">{errors.nomeEmbarcacao?.message}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Peso</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
            {...register("peso")}
          />
          <p className="text-red-600">{errors.peso?.message}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Valor</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
            {...register("valor")}
          />
          <p className="text-red-600">{errors.valor?.message}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Capacidade de pessoas</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
            {...register("capacidadePessoas")}
          />
          <p className="text-red-600">{errors.capacidadePessoas?.message}</p>
        </div>

        <div>
          <label className="block text-sm pb-2">Valor por pessoa</label>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:to-primary sm:text-sm sm:leading-6"
            type="number"
            {...register("valorPorPessoa")}
          />
          <p className="text-red-600">{errors.valorPorPessoa?.message}</p>
        </div>
      </div>

      <button
        type="submit"
        className="w-1/3 py-2 mt-4 text-white bg-tertiary rounded-md"
      >
        Enviar
      </button>
    </form>
  );
}
