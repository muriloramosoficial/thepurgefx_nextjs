import LoginUserForm from '@/components/login_user';
import LogoText from '@/icons/logo_name';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image'


const RegisterPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 675px)');
    const isMediumScreen = useMediaQuery('(max-width: 675px)')

    if (isSmallScreen) {
        return (
            <div className='flex flex-col justify-center pt-5 items-center w-full h-screen bg-slate-500 min-w-[350px]' id='rightContent'>
                <LogoText color='text-slate-400' width='w-2/3' height='' />
                <div className="w-full" id="left">
                    <LoginUserForm />
                </div>
            </div>
        );
    } else {
        return (
            <div className='flex flex-row justify-between'>
                <div className='w-full'>
                    {/* <Image src={'https://wallpaperaccess.com/full/5838295.png'} alt='' width={300} height={100}/> */}
                    <img className='w-full h-screen opacity-30' src='https://wallpaperaccess.com/full/5838295.png' />
                </div>
                <div className='flex flex-col justify-center pt-5 items-center w-1/3 h-screen bg-slate-800 min-w-[350px]' id='rightContent'>
                    <LogoText color='text-slate-400' width='w-2/3' height='' />
                    <div className="w-full" id="left">
                        <LoginUserForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterPage;