import NewUserForm from '@/components/create_user';
import LogoText from '@/icons/logo_name';
import useMediaQuery from '@mui/material/useMediaQuery';

const RegisterPage = () => {
    const isSmallScreen = useMediaQuery('(max-width: 375px)');
    const isMediumScreen = useMediaQuery('(max-width: 685px)')

    if (isSmallScreen) {
        return (
            <div className='flex flex-col justify-center pt-5 items-center w-full h-screen bg-slate-500 min-w-[350px]' id='rightContent'>
                <LogoText color='text-slate-400' width='w-2/3' height='' />
                <div className="w-full" id="left">
                    <NewUserForm />
                </div>
            </div>
        );
    } else if (isMediumScreen) {
        return <h1> Tela Média</h1>
    } else {
        return <h1>Tela grande</h1>;
    }
}

export default RegisterPage;