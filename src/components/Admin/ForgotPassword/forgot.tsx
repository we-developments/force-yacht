import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Image from "next/image";
import force from "../../../images/pngs/force.png"


const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Email is invalid"),
});

interface FormData {
  email: string;
}

const ForgotPasswordForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const sendResetPasswordEmail = async (email: string) => {
    // Adicione sua lógica para enviar e-mail de redefinição de senha aqui.
    // Substitua a lógica abaixo pela sua própria implementação de envio de e-mail.
    const response = await fetch("your_api_endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  };

  const onSubmit = async (data: FormData) => {
    const { email } = data;
    const result = await sendResetPasswordEmail(email);

    if (result.success) {


    } else {
      // Mostre uma mensagem de erro se o e-mail não puder ser enviado.
      console.error("Unable to send reset password email");
    }
  };

  return (
    <>
      <form
        className="space-y-6 h-screen bg-gray-900 flex items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full px-2 sm:max-w-sm m-auto h-screen block ">
        <div className="w-100 flex justify-center">
          <Image          
            width={300}
            height={300}
            src={force}
            alt="Your Company"
          />
        </div>
        <span className="text-white text-2xl font-bold block text-center mb-4">Enviaremos um email com sua nova senha.</span>
          <div className="items-center">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email
            </label>
            <div className="my-4">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Enviar uma nova senha
            </button>
          </div>
          <p className="mt-10 text-center text-sm text-gray-400">
            Recuperou sua senha?{" "}
            <a
              href="/admin"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
              Entre aqui
            </a>
          </p>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
