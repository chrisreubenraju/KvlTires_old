// import Script from 'next/script';
import React, { useRef, useState } from 'react';
import Head from 'next/head';

import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Partytown } from '@builder.io/partytown/react';
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
  OrganizationJsonLd,
} from 'next-seo';
import Script from 'next/script';
import { Navbar, Footer, TopUpbar, Topbar } from '../Components';

import '../styles/globals.css';
import '../styles/Home.scss';
import '../styles/Customswiper.css';
import { StateContext } from '../context/StateContext';

import Sidebar from '../Components/Sidebar';
import ErrorBoundary from '../Components/ErrorBoundary';
import useMediaQuery from '../Hooks/CustomMediaQuery';
import { useWindowSize } from '../Hooks/WindowSize';

import BottomBar from '../Components/Bottombar';
import CookiePopup from './CookiePopup';

const MyApp = ({ Component, pageProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [PcurrPos, setPcurrPos] = useState({ x: 0, y: 0 });
  const [hideOnScroll, setHideOnScroll] = useState(true);
  const { width, height } = useWindowSize();

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;

      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      setPcurrPos(currPos);
    },
    [hideOnScroll],
    false,
    false,
    200
  );

  const isDesktop = useMediaQuery('(min-width:1148px)');
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.kvltires.com/"
        />

        <link
          rel="icon"
          type="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
        />
        <meta charSet ="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="kwdSgXRdzSwS7aQ_UINlRiFYoSoQkOtVuGOG5NntQqE"
        />

        {/* <Partytown debug forward={['dataLayer.push']} /> */}
        {/* <Script
          strategy="worker"
          src="https://www.googletagmanager.com/gtag/js?id=GTM-PHKPDRM"
        /> */}
        {/* <!-- Google Tag Manager --> */}

        {/* <script src="https://example.com/analytics.js" type="text/partytown" /> */}
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-PHKPDRM', { 
                page_path: window.location.pathname,
            });
        `,
          }}
        />

        {/* <script
dangerouslySetInnerHTML={ (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PHKPDRM')
}
/> */}

        {/* <!-- End Google Tag Manager --> */}

        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PHKPDRM');`,
          }}
        />
      </Head>
      {/* <body> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHKPDRM"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://kvltires.com/',
          },
          {
            position: 2,
            name: 'tires services',
            item: 'https://kvltires.com/services',
          },
          {
            position: 3,
            name: '24X7 roadside assistance',
            item: 'https://kvltires.com/services/roadside-assistance',
          },
          {
            position: 4,
            name: 'locations',
            item: 'https://kvltires.com/locations',
          },
          {
            position: 5,
            name: 'Careers',
            item: 'https://kvltires.com/careers',
          },
        ]}
      />
      
      <OrganizationJsonLd
        name="KVL Tires"
        legalName="KVL Tires"
        url="https://kvltires.com/"
        logo="https://kvltires.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKvlTiresLogo.c226bd2d.png&w=384&q=75"
        contactPoint={[
          // {
          //   telephone: ' 401-555-1212',
          //   contactType: 'customer service',
          //   areaServed: 'US',
          //   availableLanguage: ['English', 'Spanish', 'French'],
          // },
          {
            telephone: '800-808-002',
            contactType: 'customer service',
            contactOption: 'TollFree',
            availableLanguage: 'en',
            areaServed: 'US',
          },
          // {
          //   telephone: ' 877-453-1304',
          //   contactType: 'technical support',
          //   contactOption: 'TollFree',
          //   areaServed: ['US', 'CA'],
          //   availableLanguage: ['English', 'French'],
          // },
        ]}
        sameAs={[
          'https://www.facebook.com/kvltires',
          'https://www.instagram.com/kvltires/',
          'https://www.linkedin.com/company/kvltires/',
        ]}
      /> */}
      {/* <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '100',
          pointerEvents: 'none',
        }}
      >
        <Snowfall
          style={{ zIndex: '100' }}
          height="100%"
          width="100%"
          color="#ffff"
          snowflakeCount={100}
          radius={[0.3, 2.0]}
          speed={[0.5, 3.0]}
          wind={[-0.5, 2.0]}
        />
      </div> */}

      <StateContext>
        {isDesktop ? <TopUpbar /> : null}
        <Topbar toggle={toggle} postion={PcurrPos} />
        <ErrorBoundary>
          {' '}
          <Navbar toggle={toggle} postion={PcurrPos} />
        </ErrorBoundary>
        <Component {...pageProps} />
        <div>
          <Footer />
          <BottomBar />
        </div>
        {/* <Script
      src="https://kit.fontawesome.com/d16bf6a891.js"
      crossOrigin="anonymous"
    /> */}{' '}
        <ErrorBoundary>
          {!isDesktop ? <Sidebar isOpen={isOpen} toggle={toggle} /> : null}
        </ErrorBoundary>
        <CookiePopup />
      </StateContext>
      {/* </body> */}
    </>
  );
};

export default MyApp;
