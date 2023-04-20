import Logo from '@/icons/logo'
import HomeIcon from '@/icons/home'
import Gear from '@/icons/gear'
import Users from '@/icons/users'
import Payments from '@/icons/payment'
import Signals from '@/icons/signals'
import Help from '@/icons/help'

const LeftMenu = () => {
    return (
        <div className='flex flex-col h-screen w-20 bg-slate-700'>
            <div className='flex w-full justify-center items-center p-5' id='logo'>
                <Logo />
            </div>
            <div className='flex justify-center' id='leftMenuIcons'>
                <nav>
                    <a className='' href='#'><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><HomeIcon /></div></a>
                    <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Signals /></div></a>
                    <a className='' href='#'><div className='mt-7 w-6 h-6 hover:text-slate-400'><Users color='text-slate-500' width='w-6' height='h-6' /></div></a>
                    <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Payments /></div></a>
                    <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Help /></div></a>
                </nav>
            </div>
            {/* <div></div> */}
            <div className='flex justify-center items-center p-5' id='configBottom'>
                <a className='' href='#'><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><Gear /></div></a>
            </div>
        </div>
    )
}

export default LeftMenu;