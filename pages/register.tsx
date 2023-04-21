import NewUserForm from "@/components/create_user";
import LogoText from "@/icons/logo_name";
import { isMobile } from "react-device-detect";

const RegisterPage = () => {
    return (
        <>
            {isMobile ?
                <div className='flex flex-row w-full h-screen bg-slate-500' id='rightContent'>
                    <div className="flex justify-center items-center bg-slate-700 w-full" id="left">
                        <NewUserForm />
                    </div>
                </div>
                :
                <div className='flex flex-col justify-center mt-5 pt-7 items-center w-full h-screen bg-slate-700' id='rightContent'>
                    {/* <div className='w-3/5'>
            <LogoText color='text-slate-200' width='' height='' />
          </div> */}
                    <LogoText color='text-slate-200' width='w-2/3' height='' />
                    <div className="w-full" id="left">
                        <NewUserForm />
                    </div>
                </div>
            }
        </>
    )
}

export default RegisterPage;