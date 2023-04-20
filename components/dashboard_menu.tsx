import Bell from '@/icons/bell';
import User from '@/icons/user';
import { useState } from 'react'

const DashboardMenu = () => {
    const [Active, setActive] = useState(true);

    function handleClick() {
        setActive(!Active);
    }

    return (
        <>
            <div className='flex justify-between items-center p-3 h-20 bg-slate-600' id='rightMenuContent'>
                <div id='left'>.</div>
                <div className='flex flex-row' id='right'>
                    <div className='flex items-center mr-5 cursor-pointer text-slate-500 hover:text-slate-400' id='userIcon'>
                        {/* Alterar função onclick */}
                        <button onClick={handleClick}><Bell /></button>
                    </div>
                    <div className='text-slate-500 cursor-pointer hover:text-slate-400' id='userIcon'>
                        <User width='w-14' height='h-14' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardMenu;