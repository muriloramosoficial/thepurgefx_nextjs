import CloseIcon from '../icons/close';
import LoadIcon from '../icons/load_icon';
import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function NewUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isRegError, setIsRegError] = useState(false);
  const [counter, setCounter] = useState(10);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const now = new Date().toISOString();

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
        password: data.password,
        actived: false,
        balance: 0,
        createdAt: now,
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
      reset();
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

  return (
    <div className='items-center justify-center p-10'>

      <div className="relative pl-1 pr-1 pb-3">
        <input type="text" id="password" className="block text-center uppercase text-2xl mb-2 border-t-2 border-b-2 border-slate-700 p-2.5 w-full text-slate-700 bg-transparent" placeholder="CREATE AN ACCOUNT" disabled={true} />
      </div>

      <div className={isRegister ? 'flex flex-row justify-between items-center bg-green-600 text-green-200 text-sm font-bold p-5 rounded-md mb-5' : 'hidden'} id='alertMessage'>
        <h1>Successfully Registered!</h1>
        <div className='flex flex-row items-center text-sm text-green-400 font-semibold'>
          <p className='mr-5'>{counter}</p>
          <CloseIcon color='text-slate-100' width='w-3' height='h-3' />
        </div>
      </div>
      <div className={isRegError ? 'flex flex-row justify-between items-center bg-red-600 text-red-200 text-sm font-bold p-5 rounded-md mb-5' : 'hidden'} id='alertMessage'>
        <h1>Failed to Register!</h1>
        <div className='flex flex-row items-center text-sm text-red-400 font-semibold'>
          <p className='mr-5'>{counter}</p>
          <CloseIcon color='text-slate-100' width='w-3' height='h-3' />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} id='formRegister'>
        <div className="relative">
          <div className='flex flex-row justify-center items-center'>
            <label htmlFor="username" className="absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3.5 peer-focus:text-slate-200 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">USERNAME</label>
            {errors.username && ''}
          </div>
          <input tabIndex={1} maxLength={20} type="text" id="username" className="block lowercase rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-slate-600 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " {...register("username", { required: true })} />
        </div>
        <div className="relative mt-5">
          <label htmlFor="email" className="absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3.5 peer-focus:text-slate-200 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">EMAIL ADDRESS</label>
          <input tabIndex={2} maxLength={20} type="email" id="email" className="block lowercase rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-slate-600 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " {...register("email", { required: true })} />
          {errors.email && <p className='text-xs text-red-700 uppercase'><span className='text-xs text-red-700 font-bold uppercase'>email</span> is required!</p>}
        </div>
        <div className="relative mt-5">
          <label htmlFor="password" className="absolute text-sm text-slate-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-3.5 peer-focus:text-slate-200 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">PASSWORD</label>
          <input tabIndex={3} minLength={10} maxLength={30} type="password" id="password" className="block lowercase rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-slate-200 bg-slate-600 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer" placeholder=" " {...register("password", { required: true })} />
          {errors.password && <p className='text-xs text-red-700 uppercase'><span className='text-xs text-red-700 font-bold uppercase'>password</span> is required!</p>}
        </div>
        <div className='flex flex-row justify-center items-center mt-5'>
          <button className='flex justify-center items-center bg-slate-600 rounded-lg pb-3.5 pt-3.5 w-full text-sm text-slate-200 dark:bg-gray-700 border-0 border-gray-300 appearance-none dark:text-white dark:border-slate-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600' type="submit" disabled={isLoading}>
            {isLoading ? <LoadIcon /> : 'REGISTER'}
          </button>
        </div>
      </form>
    </div>
  );
}
