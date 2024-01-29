import React from 'react';
import Head from 'next/head';
import { Departments } from '../Components/Career/Departments';
import { PerkBenifits } from '../Components/Career/PerkBenifits';
import { Ykvl } from '../Components/Career/Ykvl';
import { SubResume } from '../Components/Career/SubResume';
import { CareerHeader } from '../Components/Career/CareerHeader';

const career = () => (
  <div>
    <Head>
      <title> Make Your Career with KVL Tires – Join Us Today</title>

      <meta
        name="description"
        content="We are looking for self-motivated & enthusiastic individuals to help us achieve the best in the Heavy Vehicle industry. Email your resume at info@kvltires.com"
      />
      <meta
        name="keywords"
        content="Careers, Careers at KVL Tires, Management, Sales Manager, Service Technical, Warehouse Manager, Delivery Driver, Administration "
      />
      {/* <!_ _ Open Graph / Facebook _ _> */}
      <meta
        property="og:title"
        content="Make Your Career with KVL Tires – Join Us Today"
      />
      <link rel="canonical" href="https://www.kvltires.com/careers" />
      <meta
        property="og:url"
        content="https://www.kvltires.com/services/roadside-assistance"
      />
      <meta property="og:image" content="https://www.kvltires.com/careers" />
      <meta property="og:type" content="page" />
      <meta
        property="og:description"
        content="We are looking for self-motivated &amp; enthusiastic individuals to help us achieve the best in the Heavy Vehicle industry. Email your resume at info@kvltires.com"
      />
      <meta property="og:locale" content="en" />
    </Head>
    <CareerHeader />
    <Ykvl />
    <Departments />
    <PerkBenifits />
    <SubResume />
  </div>
);

export default career;
