import React from 'react';
import useMediaQuery from '../../Hooks/CustomMediaQuery';
import { AboutUs__PageData } from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Image from 'next/image';
const AboutUs_Tires = () => {
  const isDesktop = useMediaQuery('(min-width:1148px)');
  const isMobile = useMediaQuery('(min-width:768px)');
  return (
    <div
      className="mb-8 "
      style={{
        position: 'relative',
        marginTop: '-3.6rem',
        zIndex: '5',
      }}
    >
      <div className="lg:flex block lg:flex-col flex-row items-center ">
        <div
          className="bg-white px-7 pt-3"
          style={{
            clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0% 100%)',
          }}
        >
          <div
            className="text-white  flex items-center justify-center px-24 m  bg-red-600 pt-4
           text-center  font-bold lg:text-5xl text-3xl"
            style={{
              clipPath: 'polygon(13% 0, 88% 0, 100% 100%, 0% 100%)',
            }}
          >
            ABOUT-US
          </div>
        </div>
        <div className="w-full bg-red-600">
          {isDesktop ? (
            <div className="px-32 ">
              <div id="grid" className="flex flex-row justify-evenly  px-20">
                {AboutUs__PageData[0].TireSection[0].TiresList.map(
                  (index, id) => (
                    <div className=" text-center pb-1 pt-12 mx-12" key={id}>
                      <div className="flex justify-center">
                        <div className=" flex">
                          <Image
                            loading="lazy"
                            src={index.Image}
                            alt={index.Description}
                          />
                        </div>
                      </div>

                      <h2 className="lg:text-xl text-lg text-white font-bold font-poppins h-12">
                        {index.Description}
                      </h2>
                      {/* <p className="pt-6 lg:text-sm font-normal px-2 text-center font-Helvetica">
                    {index.desc}
                  </p> */}
                    </div>
                  )
                )}
              </div>
              <div className="py-4">
                <hr></hr>
              </div>

              <div className="mb-6 w-full text-center text-white">
                {AboutUs__PageData[0].TireSection[0].Description}
              </div>
              {/* <div className="w-full bg-white h-1 mb-4">
              <span>2</span>
            </div> */}
            </div>
          ) : (
            <Swiper
              modules={[Autoplay]}
              loop
              slidesPerView={isMobile ? 2 : 1}
              spaceBetween={30}
              speed={1400}
              autoplay={{
                delay: 1300,
                disableOnInteraction: false,
              }}
            >
              {AboutUs__PageData[0].TireSection[0].TiresList.map(
                (newdata, id) => (
                  <SwiperSlide key={id}>
                    <div>
                      <div id="grid" className=" bg-red-600 -mx-4  ">
                        <div className=" text-center">
                          <div className="flex justify-center">
                            <div className="flex">
                              <Image
                                loading="lazy"
                                src={newdata.Image}
                                alt={newdata.Description}
                              />
                            </div>
                          </div>

                          <h2 className="lg:text-xl text-white  text-lg font-bold font-Helvetica ">
                            {newdata.Description}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs_Tires;
