import TelegramCount from "@/components/telegramCount";
import Users from "@/icons/users";

const DashboardContent = () => {
    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4">
            <div className="flex flex-row p-10 bg-slate-600 rounded-xl" id="card01">
                <div className="flex mr-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-slate-500 w-12 h-12">
                        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-end items-end align-middle" id="group">
                        <div id="result"><span className="text-2xl font-bold text-green-500">512</span></div>
                        <div id="title"><span className="text-sm font-semibold text-slate-400">Total Users</span></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-10 bg-slate-600 rounded-xl" id="card02">
                <div className="flex mr-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-slate-500 w-12 h-12">
                        <path fillRule="evenodd" d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-end items-end align-middle" id="group">
                        <div id="result"><span className="text-2xl font-bold text-green-500">385</span></div>
                        <div id="title"><span className="text-sm font-semibold text-slate-400">Actived Accounts</span></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-10 bg-slate-600 rounded-xl" id="card03">
                <div className="flex mr-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-slate-500 w-12 h-12">
                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                        <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-end items-end align-middle" id="group">
                        <div id="result"><span className="text-2xl font-bold text-green-500">12.438,02$</span></div>
                        <div id="title"><span className="text-sm font-semibold text-slate-400">Total Earned</span></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-10 bg-slate-600 rounded-xl" id="card03">
                <div className="flex mr-5 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-slate-500 w-12 h-12" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex flex-col justify-end items-end align-middle" id="group">
                        <div id="result"><span className="text-2xl font-bold text-green-500"><TelegramCount /></span></div>
                        <div id="title"><span className="text-sm font-semibold text-slate-400">Telegram Subscribers</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent;