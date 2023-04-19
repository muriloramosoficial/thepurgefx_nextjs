const Card = () => {
    return (
        <>
            <div className="flex mr-5 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-slate-500 w-12 h-12">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
            </div>
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-end items-end align-middle" id="group">
                    <div id="result"><span className="text-2xl font-bold text-green-500"><UsersCount/></span></div>
                    <div id="title"><span className="text-sm font-semibold text-slate-400">Total Users</span></div>
                </div>
            </div>
        </>
    )
}

export default Card;