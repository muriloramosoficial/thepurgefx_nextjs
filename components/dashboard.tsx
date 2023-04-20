import DashboardContent from '../pages/dashboard'
import UsersContent from '../pages/users'
import { useState } from 'react'
import DashboardMenu from './dashboard_menu'
import Logo from '@/icons/logo'
import HomeIcon from '@/icons/home'
import Gear from '@/icons/gear'
import Users from '@/icons/users'
import Payments from '@/icons/payment'
import Signals from '@/icons/signals'
import Help from '@/icons/help'
import User from '@/icons/user'
import Bell from '@/icons/bell'
import PaymentsContent from '@/pages/payments'
import SignalsContent from '@/pages/signals'

const Dashboard = () => {
  const [Active, setActive] = useState('dashboard');

  function handleClick(menuOption: any) {
    setActive(menuOption);
  }
  // function handleClick() {
  //   setActive(!Active);
  // }

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col justify-between h-screen w-20 bg-slate-800' id='leftMenu'>
        <div className='flex w-full justify-center items-center p-5' id='logo'>
          <Logo />
        </div>
        <div className='flex justify-center' id='leftMenuIcons'>
          <nav>
            <a className='' onClick={() => handleClick('dashboard')}><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><HomeIcon /></div></a>
            <a className='' onClick={() => handleClick('signals')}><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Signals /></div></a>
            <a className='' onClick={() => handleClick('users')}><div className='mt-7 w-6 h-6 hover:text-slate-400'><Users color='text-slate-500' width='w-6' height='h-6' /></div></a>
            <a className='' onClick={() => handleClick('payments')}><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Payments /></div></a>
            <a className='' href='#'><div className='mt-7 w-6 h-6 text-slate-500 hover:text-slate-400'><Help /></div></a>
          </nav>
        </div>
        {/* <div></div> */}
        <div className='flex justify-center items-center p-5' id='configBottom'>
          <a className='' href='#'><div className='w-6 h-6 text-slate-500 hover:text-slate-400'><Gear /></div></a>
        </div>
      </div>
      <div className='flex flex-col w-full bg-slate-500' id='mainContent'>
        <div className='flex justify-between items-center p-3 h-20 bg-slate-700' id='rightMenuContent'>
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
        <div className='p-5' id='rightContent' style={{ height: 'calc(100vh - 90px)', overflowY: 'scroll', overflowX: 'hidden' }}>
          {/* {Active === 'dashboard' ? <DashboardContent /> : <UsersContent />} */}
          {Active === 'dashboard' ? <DashboardContent /> :
            Active === 'users' ? <UsersContent /> :
              Active === 'payments' ? <PaymentsContent /> :
                Active === 'signals' ? <SignalsContent /> : <DashboardContent />
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
