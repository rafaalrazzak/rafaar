import Script from 'next/script';

const Analytics = () => {
  return (
    <>
      {/* <Script
        async
        src='https://eu.umami.is/script.js'
        data-website-id='452bc90f-47ab-4d3e-840e-fcb04b7d548f'
      /> */}
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-WZEKV3JVLM'
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-WZEKV3JVLM');
        `}
      </Script>
    </>
  );
};

export default Analytics;
