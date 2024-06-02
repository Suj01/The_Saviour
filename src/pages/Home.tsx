

import React from "react";
import Navbar from "../routes/Navbar";
import logo from "../assets/savior-logo.svg";
import bgImage from "../assets/Hero-Image-1.png";
import AllRoutes from "../routes/AllRoutes";

const Home: React.FC = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-[588px] bg-cover"
      >
        <div className="flex justify-between items-center bg-cover bg-center">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[116px] h-[117px] mt-[27px] ml-[88px]"
            />
            <p className="text-[32px] font-normal leading-8 text-white">
              Saviour
            </p>
          </div>
          <div>
            <Navbar />
            {/* <AllRoutes /> */}
          </div>
          <button className="w-[127px] h-[38px] mr-[90px] rounded-3xl text-white bg-gradient-to-r from-[#ED0137] to-[#F05733]">
            Connect wallet
          </button>
        </div>
        <p className="text-[45px] text-[#FBF6F6] loading-[54px] font-normal mt-[178px] ml-[123px]  text-center">
          Where Blockchain Heroes Thrive, Rescuing <br />
          Dreams, Elevating Fortunes.
        </p>
      </div>
    </>
  );
};

export default Home;
