import { useEffect } from 'react';
import RegisterPage from './register';

export default function Home() {
  useEffect(() => {
    const iframe = document.getElementById('iframe');
    if (iframe instanceof HTMLIFrameElement) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `window.__webtrader_params = {"trade_server":"HantecMarkets-Demo1","login":"0","version":4,"enabled":true,"mobile":false,"gwt_servers":[8,11,13,9,2,6,12,1,7,4,10,5,3],"script_version":"133257830800000000","utm_campaign":"web.terminal","utm_source":""};`;
      iframe!.contentWindow!.document.head.appendChild(script);
    }
  }, []);

  return (
    <main>
      {/* <div className=''>
        <RegisterPage />
      </div> */}
      <div>
        <iframe src='https://trade.mql5.com/trade' id='iframe'>
        </iframe>
      </div>
    </main>
  )
}
