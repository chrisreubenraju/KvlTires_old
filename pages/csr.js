import React from "react";
import Head from "next/head";
import Image from "next/image";
import crs_banner from "../Assets/Images/Home/csr-banner.jpg";
import crs_img from "../Assets/Images/Home/csr-img.jpg";

const CSR = () => (
  <div className="maincontactform">
    <div className="row justify-between lg:flex">
      <div className="p-10 bg-red-600 2xl:w-full xl:w-full flex justify-center items-center">
        <div className="lg:ml-20 ml-4 col-4" style={{ width: "70%" }}>
          <div className="lg:text-left text-center">
            <div
              id="contactnew"
              className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12"
            >
              <div>
                <h3 className="text-white md:text-5xl text-2xl font-bold text-left font-poppins">
                  CSR
                </h3>
                <br />
                <h4 className="text-white md:text-2xl pt-6 text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                  A pledge that’s aligned with our ethical charter and everyday
                  commitments
                </h4>
                <br />
                <p className="text-white pt-4 text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                  Corporate Social Responsibility is a part and parcel of the
                  way we operate our business across the United States. Being
                  socially responsible for us means not only fulfilling a few
                  legal formalities but also going beyond all regular
                  compliances. It includes investing “more” into human capital,
                  the environment, and the relations with every individual in
                  the ambit of our business operations.
                  <br />
                  <br />
                  We understand that Corporate Social Responsibility has a big
                  role to play in the industry we operate in. It’s an industry
                  where there is a need to foster research and innovation so
                  that sustainable technologies and behaviors can be promoted.
                  Now with digital technologies in place, we can better monitor
                  and analyze our activities. As part of our efforts, new
                  electric vehicles are joining our fleet for last-mile
                  deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <Image
            src={crs_banner}
            alt="Banner"
            className="grayscale img-fluid"
            width={1200} // Set your desired width
            height={600} // Set your desired height
          />
        </div>
      </div>
    </div>
    <div className="row justify-between lg:flex">
      <div className="p-10  2xl:w-full xl:w-full flex justify-center items-center">
        <div className="col-8">
          <Image
            src={crs_img}
            alt="Banner"
            className="grayscale img-fluid"
            width={1000} // Set your desired width
            height={700} // Set your desired height
          />
        </div>
        <div className="lg:ml-20 ml-4 col-4" style={{ width: "70%" }}>
          <div className="lg:text-left text-center">
            <div
              id="contactnew"
              className="flex justify-start items-center xl:justify-start xl:items-start pb-8 pt-12"
            >
              <div>
                <p className="text-black pt-4 text-left lg:pr-0 md:mr-16 mr-4 font-Helvetica">
                  Responsibility and orderliness are keywords that define our
                  branding and business development activities. Our pledge of
                  empowering humanity through various ways is aligned with our
                  ethical charter and everyday commitments. We focus on the
                  workplace as well as society in general while greatly valuing
                  long-lasting and mutual relationships with our people,
                  customers, business partners, and patrons.
                  <br />
                  <br />
                  Our CSR activities are an integral part of our management
                  strategies wherein we can integrate and address social and
                  environmental concerns. Through CSR, we can strike a perfect
                  balance between social, environmental, and economic
                  imperatives even while growing our business and exceeding
                  stakeholders’ expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CSR;
