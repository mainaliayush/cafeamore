import React, { useState } from "react";
import Delivery from "../img/delivery.png";
import { useNavigate } from "react-router-dom";
// import HeroBg from "../img/heroBg.png";
// import { heroData } from "../utils/data";
import HeroImgSlider from "./HeroImgSlider";

const HomeContainer = () => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/menu");
  }
  const navigateToCatering = () => {
    navigate("/catering");
  }
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-5" id="home">
      <div className="py-8 flex-1 flex flex-col items-start  justify-start gap-6">
        <div className="flex items-center gap-2 justify-center mt-2 sm:mt-10 bg-red-100 px-4 py-1 -mb-2 rounded-full">
          <p className="flex text-base text-red-700 font-semibold ">
            Free Delivery in NJ/NYC
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor ">
          BEST CATERING SERVICE IN{" "}{" "}
          <span className="text-red-700 text-[2.5rem] lg:text-[4.5rem]">
            NEW JERSEY
          </span>
        </p>
        <p className="text-base text-textColor  text-center md:text-left md:w-[80%]">
          We are as involved as possible in making sure that your quick
          breakfast before heading to you office, or sigh of relief as you sit
          down in front of your lunch, is worth it. Our customers matter to us,
          from the smallest details to the bigger ones. Our stories carry only
          quality produce, premium meats, top-of-the-line breads, and high
          quality teas and coffees.
        </p>
        <div className="flex flex-row gap-5 md:gap-8 ml-10">
          <button
            onClick={navigateToMenu}
            type="button"
            className="bg-red-500 text-white w-full md:w-auto px-4 py-2 md:mb-5 rounded-lg  hover:bg-red-700 transition-all ease-in-out duration-100"
          >
            ORDER LUNCHBOX
          </button>
          <button
            onClick={navigateToCatering}
            type="button"
            className="bg-red-500 text-white w-full md:w-auto px-4 py-2 md:mb-5 rounded-lg hover:bg-red-700 transition-all ease-in-out duration-100"
          >
            ORDER CATERING
          </button>
        </div>
      </div>

      <HeroImgSlider />

      <div className="py-2 flex-1 ml-auto flex items-center relative">
        {/* <img
          src={HeroBg}
          // className="h-420 ml-auto w-full lg:w-auto md:w-auto lg:h-650"
          alt="hero-bg"
        /> */}

        {/* <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 lg:px-32 lg:pt-20 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-5 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.img}
                  className="w-20 lg:w-40 -mt-8 lg:-mt-20
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] my-1 lg:text-sm font-semibold text-lighttextGray">
                  {n.decp}
                </p>
                <p className="text-xs font-semibold text-headingColor">
                  Price: ${n.price}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </section>
  );
};
export default HomeContainer;
