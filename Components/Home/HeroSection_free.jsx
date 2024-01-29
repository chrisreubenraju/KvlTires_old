import React from 'react';
// import { Link } from 'react-scroll';
// import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeroContainer, HeroContent, HeroBg } from './HeroElements';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
// import Video from './media/bgvideo.mp4';

const Gradients = styled.div`
  background-image: linear-gradient(
    230.87deg,
    rgba(0, 0, 0, 0.7) 10.28%,
    rgba(0, 0, 0, 0) 91.36%
  );
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;

const HeroSection_free = ({ data }) => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <>
      <div
        id="careerHeadertwo"
        style={{
          backgroundImage:
            // eslint-disable-next-line operator-linebreak
            'url(' +
            'https://raw.githubusercontent.com/Kalfreight-In/KalTires_new/main/Assets/Images/Career/headerbanner.jpg' +
            ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: isMobile ? '50vh' : '70vh',
          // display: 'flex',
          // flexDirection: 'row',
          // alignItems: 'end',
          // justifyContent: 'center',
          width: '100%',
          margin: '0',
          padding: '0',
          // position: 'relative',
        }}
      >
        <h1 className="text-center flex justify-center items-end lg:h-careerheaderHeight h-careerheaderMobileH md:text-5xl xl:text-6xl text-4xl  font-poppins  font-bold text-white font-xl  pb-0 lg:pb-4   lg:mx-0 block-inline">
          JOIN OUR <br></br>DIVERSIFIED TEAM!
        </h1>
      </div>
      <HeroContainer>
        <Gradients />
        <HeroBg
          className=" mt-0 "
          BackgroundImage={isMobile ? data.imgMobile : data.img}
        />
        <HeroContent>
          <div className=" lg:pl-20  pl-0 lg:-mb-20 2xl:-mb-0 md:pb-0 pb-8  text-left">
            <div className="lg:flex flex-row lg:mx-0 md:ml-0 ml-8 md:mr-0 mr-4">
              <div className=" sm:block " />

              <div
                className={`overflow-hidden ml-0 ${
                  data.Heading.length > 12
                    ? data.Heading === 'Off-The-Road Tires'
                      ? 'w-full'
                      : data.Heading === 'WE HELP YOU ACHIEVE YOUR DREAMS'
                      ? 'lg:w-8/12'
                      : 'lg:w-7/12'
                    : 'lg:w-10/12'
                }  w-full `}
              >
                <motion.div
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 1.9 }}
                >
                  <div
                    className={` ${
                      data.Heading ? 'lg:border-l-4 ' : null
                    } border-PrimaryTwo anima lg:pl-3 pl-0`}
                  >
                    <motion.div
                      whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                      transition={{ duration: 1.5 }}
                    >
                      <div className="2xl:text-5xl xl:text-4xl font-poppins lg:text-3xl text-2xl font-bold text-white font-xl  pb-0 lg:pb-4 lg:border-b-0 border-b-4  border-y-PrimaryTwo lg:mx-0 block-inline">
                        {data.Heading.toUpperCase()}
                      </div>
                    </motion.div>

                    {/* <div className="lg:border-l-4 border-y-amber-400 " /> */}
                    <motion.div
                      whileInView={{ x: [-100, 0], opacity: [0.5, 1] }}
                      transition={{ duration: 1.4 }}
                    >
                      <p
                        className={`lg:text-xl  text-white  font-Helvetica font-xl  lg:block lg:pt-0 pt-2  pr-0   ${
                          data.desc
                            ? data.desc.length > 66
                              ? 'lg:pr-28'
                              : 'lg:pr-0'
                            : null
                        } `}
                      >
                        {data.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* <div className="lg:border-l-4 border-y-amber-400 " /> */}

                {data.CTA1 ? (
                  <div className="md:mt-10 mt-4 text-lg flex justify-start md:justify-center   lg:justify-start ">
                    <a
                      href={isDesktop ? data.CTA1.Slink : data.CTA1.link}
                      className="flex flex-row justify-center lg:justify-start"
                    >
                      <motion.div
                        id={data?.page}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white font-poppins  hover:border-0   font-semibold   shadow-sm hover:shadow-md shadow-yellow-shadow  hover:drop-shadow-lg  flex items-center justify-center 2xl:w-52 lg:w-36 w-32 2xl:h-12 h-10 2xl:text-descnew lg:text-md lg:text-md   2xl:p-0 p-4 lg:text-left transition duration-300 ease-in-out lg:bg-none bg-kaltire-red"
                      >
                        <p>{data.CTA1.heading}</p>
                      </motion.div>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
export default HeroSection_free;
