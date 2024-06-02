import React from "react";
import intoImage from "../assets/Hero-image-2.png";

const Intro = () => {
  return (
    <>
      <div className="bg-black flex">
        <div className="text-start ml-[163px] py-[89px] flex flex-col gap-4">
          <h1 className="text-[#ED0137] text-[44px] font-normal">
            INTRODUCTION
          </h1>
          <p className="text-white text-[24px] font-normal">
            We've all been in the mud once, and now we've <br /> decided to
            fight it out. <br />
            Pay tribute to those pioneers of WEB3 and the <br /> warriors who
            dedicated their love to the <br />
            blockchain. Save the lucky ones alive, join us to save the future!{" "}
            <br />
            Our mission is to empower everyone to share <br /> wealth and
            succeed. <br />
            <span className="text-slate-600">read more...</span>
          </p>
          <button className="w-[127px] h-[38px] mr-[90px] rounded-3xl text-white bg-gradient-to-r from-[#ED0137] to-[#F05733]">
            Documents
          </button>
        </div>
        <img
          src={intoImage}
          alt="introImage"
          className=" w-[795px] h-[795px] mt-[-77px]"
        />
      </div>
    </>
  );
};

export default Intro;
