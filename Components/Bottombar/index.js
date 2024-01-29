import React, { useState } from 'react';

// import logo from "../../assets/TrailerAndLeasing/Images/logo.png";
// import logo1 from "../../assets/TrailerAndLeasing/Images/vanguard.png";

import { animateScroll as scroll } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  MobileIcon,
  NavItem,
  NavLinks,
} from './BottomBarElements';

const BottomBar = ({ toggle }) => {
  const [scrollNav] = useState(false);
  const [year, setYear] = useState(() => new Date().getFullYear());
  // const changeNav = ()=> {
  //   if(window.scrollY >= 100) {
  //     setScrollNav(true)
  //   }
  //   else{
  //     setScrollNav(false)
  //   }
  // }
  // useEffect(()=>{
  //   window.addEventListener('scroll',changeNav)
  // },[]);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="pl-16 pr-8 py-4">
        <div className="flex  md:flex-row flex-col items-center justify-center md:justify-between">
          <div className="flex  md:flex-row flex-col items-center justify-between lg:w-1/4 w-1/2">
            <div className="2xl:text-desc font-bold text-black  md:text-xs">
              Sitemap
            </div>
            <div className="2xl:text-desc font-bold text-black md:text-xs">
              Terms of Use
            </div>
            <div className="2xl:text-desc font-bold text-black  md:text-xs">
              Privacy Policy
            </div>
          </div>

          <div className="2xl:text-desc font-bold text-black  md:text-xs">
            Copyright ©KVLTires, {year}. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;
