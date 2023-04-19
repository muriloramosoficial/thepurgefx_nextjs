import Image from 'next/image'
import Logo from '@/icons/logo'
import HomeIcon from '@/icons/home'
import Gear from '@/icons/gear'
import Users from '@/icons/users'
import Payments from '@/icons/payment'
import Signals from '@/icons/signals'
import User from '@/icons/user'
import Bell from '@/icons/bell'
import DashboardContent from './dashboard'
import UsersContent from './users'
import { useState } from 'react'
import Help from '@/icons/help'

export default function Home() {
  const [Active, setActive] = useState(true);

  function handleClick() {
    setActive(!Active);
  }

  return (
    <>
      <div className='flex flex-row'>
        <div className='flex flex-col justify-between h-screen w-20 bg-slate-700' id='leftMenu'>
          <div className='flex w-full justify-center items-center p-5' id='logo'>
            <Logo />
          </div>
          <div className='flex justify-center' id='leftMenuIcons'>
            <nav>
              <a className='' href='#'><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><HomeIcon /></div></a>
              <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Signals /></div></a>
              <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Users /></div></a>
              <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Payments /></div></a>
              <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Help /></div></a>
            </nav>
          </div>
          {/* <div></div> */}
          <div className='flex justify-center items-center p-5' id='configBottom'>
            <a className='' href='#'><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><Gear /></div></a>
          </div>
        </div>
        <div className='flex flex-col w-full bg-slate-500' id='mainContent'>
          <div className='flex justify-between items-center p-3 h-20 bg-slate-600' id='rightMenuContent'>
            <div id='left'></div>
            <div className='flex flex-row' id='right'>
              <div className='flex items-center mr-5 cursor-pointer text-slate-500 hover:text-slate-400' id='userIcon'>
                {/* Alterar função onclick */}
                <button onClick={handleClick}><Bell /></button>
              </div>
              <div className='text-slate-500 cursor-pointer hover:text-slate-400' id='userIcon'>
                <User />
              </div>
            </div>
          </div>
          <div className='h-full p-5' id='rightContent'>
            {Active ? <DashboardContent /> : <UsersContent />}
          </div>
        </div>
      </div>
    </>
  )
}
