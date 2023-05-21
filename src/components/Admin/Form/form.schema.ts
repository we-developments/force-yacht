// Define a schema de validação do Yup
import * as yup from 'yup';

export const schema = yup.object().shape({
  YatchName: yup.string().required("Nome da embarcação é obrigatório"),
  SizeBoat: yup.number().required("Peso é obrigatório").positive("Peso deve ser um número positivo"),
  Capacity: yup.number().required("Valor é obrigatório").positive("Valor deve ser um número positivo"),
  StartIn: yup.date().required(""),
});