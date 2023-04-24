import { useEffect } from 'react';
import RegisterPage from './register';

export default function Home() {
  useEffect(() => {
    const iframe = document.getElementById('iframe');
    if (iframe instanceof HTMLIFrameElement) {
      iframe.setAttribute('crossorigin', 'use-credentials');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `window.__webtrader_params = {"trade_server":"HantecMarkets-Demo1","login":"0","version":4,"enabled":true,"mobile":false,"gwt_servers":[8,11,13,9,2,6,12,1,7,4,10,5,3],"script_version":"133257830800000000","utm_campaign":"web.terminal","utm_source":""};`;
      iframe.contentWindow!.document.head.appendChild(script);
      const inputLogin = document.getElementById('login') as HTMLInputElement;
      inputLogin.value = '50009607';
      inputLogin.placeholder = '50009607';
      const inputPassword = document.getElementById('login') as HTMLInputElement;
      inputLogin.value = 'N6w{53Gv';
      const okButton = iframe.contentWindow!.document.querySelector('button[text="OK"]') as HTMLButtonElement;
      if (okButton) {
        okButton.click();
      }
    }
  }, []);

  return (
    <main>
      {/* <div className=''>
        <RegisterPage />
      </div> */}
      <div className='w-full h-screen'>
        <iframe src='https://mt5.hmarkets.com/' id='iframe' allow='https://mt5.hmarkets.com/' className='w-full h-screen'>
        </iframe>
      </div>
    </main>
  )
}
