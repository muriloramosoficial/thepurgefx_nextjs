import CloseIcon from '@/icons/close';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isRegError, setIsRegError] = useState(false);
  const [counter, setCounter] = useState(10);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const response = await fetch('/api/new_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        securityKey: '123',
        username: data.username,
        email: data.email,
        password: data.password
      })
    });
    const result = await response.json();
    const statusCode = response.status;
    console.log(result);
    console.log(statusCode);
    setIsLoading(false);

    if (statusCode === 201) {
      console.log("Cadastro efetuado com sucesso");
      setIsRegister(true);
    } else {
      console.log("Erro ao efetuar o cadastro");
      setIsRegError(true)
    }
  };

  useEffect(() => {
    if (isRegister) {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        setIsRegister(false);
        setCounter(10);
      }, 10000);
    }
  }, [isRegister]);

  useEffect(() => {
    if (isRegError) {
      const intervalId = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        setIsRegister(false);
        setCounter(10);
      }, 10000);
    }
  }, [isRegError]);

  return (
    <>  
        {isLoading ? 
            <div className={isRegister ? 'flex flex-row justify-between items-center w-full bg-green-600 text-green-200 text-lg font-bold p-5 rounded-md mb-5' : 'hidden'} id='alertMessage'>
            <h1>Successfully registered user on the platform!</h1>
            <div className='flex flex-row items-center text-sm text-green-400 font-semibold'>
                <p className='mr-5'>{counter}</p>
                <CloseIcon color='text-slate-400' width='w-3' height='h-3'/>
            </div>
          </div> :
          <div className={isRegError ? 'flex flex-row justify-between items-center w-full bg-red-600 text-red-200 text-lg font-bold p-5 rounded-md mb-5' : 'hidden'} id='alertMessage'>
          <h1>Successfully registered user on the platform!</h1>
          <div className='flex flex-row items-center text-sm text-red-400 font-semibold'>
              <p className='mr-5'>{counter}</p>
              <CloseIcon color='text-slate-400' width='w-3' height='h-3'/>
          </div>
        </div>   
        }
      {/* <div className={isRegister ? 'flex flex-row justify-between items-center w-full bg-green-600 text-green-200 text-lg font-bold p-5 rounded-md mb-5' : 'hidden'} id='alertMessage'>
        asdasdadasdas {counter}s
      </div> */}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" {...register("username", { required: true })} />
          {errors.username && <span>Username é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" {...register("email", { required: true })} />
          {errors.email && <span>E-mail é obrigatório</span>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register("password", { required: true })} />
          {errors.password && <span>Password é obrigatório</span>}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Criando usuário...' : 'Criar usuário'}
        </button>
      </form>
    </>
  );
}
