import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from './login.schema';
import { useRouter } from 'next/router';
import force from "../../../images/pngs/force.png"
import Image from 'next/image';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/api';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit = async (data: FormData) => {
  
    const { email, password } = data;

    signInWithEmailAndPassword(auth, email, password)
      .then((credentialUser) => {
        if(credentialUser){
          router.push("/dashboard");
        }
      }).catch((error) => {
        console.log(error.code)
        if(error.code == 'auth/user-not-found') alert('usuario n existe')
        if(error.code == 'auth/wrong-password') alert('senha errada')
      })
  };

  return (
    <>
    <div className="h-screen bg-gray-900">
      <div className="w-100 flex justify-center">
          <Image          
            width={300}
            height={300}
            src={force}
            alt="Your Company"
          />
        </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Entre com sua conta de administrador
          </h2>
      {/* Restante do código JSX */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm px-2">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email
              </label>
              <div className="mt-2">
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
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            </div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Senha
                </label>
                <div className="text-sm">
                  <Link href="/forgot-pLinkssword" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 bg-white/5 py-1
                      1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                      )}
                      />
                  </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Entrar
          </button>
        </div>
      </form>

    </div>
  </div>
  </>
)
};

export default LoginForm;