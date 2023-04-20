import NewUserForm from "@/components/create_user";

const LoginPage = () => {
    return (
        <>
            <div className='flex flex-row w-full h-screen bg-slate-500' id='rightContent'>
                <div className="bg-slate-700 w-full" id="left">
                    {/* <div className=" p-5 ">
                        <button id="Login">Login</button>
                        <button id="Register">Register</button>
                    </div> */}

                    {/* <NewUserForm/> */}
                </div>
                <div className="flex justify-center items-center w-1/3 bg-slate-900" id="right">
                    <div className="">
                        <NewUserForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage;