import React from 'react';

import Head from 'next/head';
import HeroSection from '../../Components/Home/HeroSection';
import Onsiteservice from '../../Components/Roadside_Assitance/Onsiteservice';
import Roadside from '../../Components/Roadside_Assitance/Roadside';
import EmergencyAssists from '../../Components/Roadside_Assitance/EmergencyAssists';
import { BreadcrumbJsonLd } from 'next-seo';
import RoadsideAssistantBg from '../../Assets/Images/Roadside_Assistance/RoadsideAssistantBg.jpg';

const data = [
  {
    id: 1,
    img: RoadsideAssistantBg,
    imgMobile: RoadsideAssistantBg,
    Heading: 'ARE YOU STUCK ON THE ROAD WITH A FLAT TIRE? ',
    Alttag: 'Convenient Roadside Assistance',
    desc: 'Get Quick & Convenient Roadside Assistance',

    CTA1: {
      heading: 'Call Now',
      Slink: 'tel:800-808-0025',
      link: 'tel:800-808-0025',
    },
    CTA12: { heading: 'Inventory', link: 'contactus' },
    page: 'roadside',
  },
];

const roadsideAssistance = () => (
  <div>
    <Head>
      <title>
        Roadside Assistance Near Me | Truck Roadside service - Kvltires
      </title>

      <meta
        name="description"
        content="Are you looking for a 24X7 Roadside Assistance service? Kvl Tires is the best 24-Hour Emergency Roadside Assistance Services Provider in your area. With our top-rated customer service and affordable rates. Call now.
        "
      />
      <meta
        name="keywords"
        content="24/7ROADSIDE ASSISTANCE, On-Site Services, Nationwide Presence, Competitive Price, Friendly & Experienced Technicians"
      />
      <link
        rel="canonical"
        href="https://www.kvltires.com/services/roadside-assistance"
      />
      <meta
        property="og:title"
        content="24/7 Roadside Assistance| Heavy Vehicle | Complete Tire Services"
      />
      <meta
        property="og:url"
        content="https://www.kvltires.com/services/roadside-assistance"
      />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/KvlTiresLogo.png"
      />
      <meta property="og:type" content="page" />
      <meta
        property="og:description"
        content="KVL Tires provide 24X7 Roadside Assistance service near me breakdown to everyone in need. Our trained &amp; knowledgeable staff are always ready to answer your service calls."
      />
      <meta property="og:locale" content="en" />
    </Head>

    <HeroSection data={data[0]} />
    <Roadside />
    <EmergencyAssists />
    <Onsiteservice />
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 0,
          name: 'Home',
          item: 'https://www.kvltires.com/',
        },
        {
          position: 1,
          name: 'Roadside Assistance',
          item: 'https://www.kvltires.com/services/roadside-assistance',
        },
      ]}
    />
  </div>
);

export default roadsideAssistance;
