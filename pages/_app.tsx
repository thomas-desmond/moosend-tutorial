import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>      
        <script
        dangerouslySetInnerHTML={{
          __html: `
            //load TrackerJS
            !function(t,n,e,o,a){function d(t){var n=~~(Date.now()/3e5),o=document.createElement(e);o.async=!0,o.src=t+"?ts="+n;var a=document.getElementsByTagName(e)[0];a.parentNode.insertBefore(o,a)}t.MooTrackerObject=a,t[a]=t[a]||function(){return t[a].q?void t[a].q.push(arguments):void(t[a].q=[arguments])},window.attachEvent?window.attachEvent("onload",d.bind(this,o)):window.addEventListener("load",d.bind(this,o),!1)}(window,document,"script","//cdn.stat-track.com/statics/moosend-tracking.min.js","mootrack");
            //tracker has to be initialized otherwise it will generate warnings and wont sendtracking events
            mootrack('init', 'b508168ba5484a89a49e08de1994c633');
            mootrack('trackPageView');
          `,
        }}
      />

      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
