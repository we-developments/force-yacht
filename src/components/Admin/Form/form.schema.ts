// Define a schema de validação do Yup
import * as yup from 'yup';

export const schema = yup.object().shape({
    nomeEmbarcacao: yup.string().required("Nome da embarcação é obrigatório"),
    peso: yup.number().required("Peso é obrigatório").positive("Peso deve ser um número positivo"),
    valor: yup.number().required("Valor é obrigatório").positive("Valor deve ser um número positivo"),
    capacidadePessoas: yup.number().required("Capacidade de pessoas é obrigatório").positive("Capacidade de pessoas deve ser um número positivo"),
    valorPorPessoa: yup.number().required("Valor por pessoa é obrigatório").positive("Valor por pessoa deve ser um número positivo"),
  });