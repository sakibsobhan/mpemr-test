import React from "react";
import "./About.css";
import pmImg from "../../image/pm.png";
import advisorImg from "../../image/advisor.png";
import ministerImg from "../../image/minister.png";
import readMoreIcon from "../../image/read-more-icon.svg";
import aboutLight from "../../image/about-light.png";

const About = () => {
  return (
    <div>
      <div className="about-part py-[60px] md:py-[120px]">
        <div className="content_body">
          <div className="grid grid-cols-12 sm:items-center sm:gap-x-[45px] gap-y-[60px]">
            <div className="bio col-span-12 lg:col-span-6">
              <div className="grid grid-cols-12 gap-[30px]">
              <div className="left col-span-12 sm:col-span-6">
                <a href={"google.com"} className="big w-full relative inline-block">
                  <img
                    className="w-full max-w-full rounded-[10px] object-cover sm:h-[446px]"
                    src={pmImg}
                    alt=""
                  />
                  <div className="info-box absolute bottom-0 left-0 bg-white p-[15px] min-w-[80%] rounded-tr-xl">
                    <h4 className="text-[16px] font-bold text-black">Adviser (Minister)</h4>
                    <p className="text-[14px] text-[#8F8F8F] pt-2">Tawfiq-e-Elahi Chowdhury</p>
                  </div>
                </a>
              </div>
              <div className="right col-span-12 sm:col-span-6 grid gap-[25px]">
                <a href={"google.com"} className="small inline-block relative">
                  <img
                    className="w-full rounded-[10px] object-cover sm:h-[210px]"
                    src={advisorImg}
                    alt=""
                  />
                  <div className="info-box absolute bottom-0 left-0 bg-white p-[15px] min-w-[80%] rounded-tr-xl">
                    <h4 className="text-[16px] font-bold text-black">Adviser (Minister)</h4>
                    <p className="text-[14px] text-[#8F8F8F] pt-2">Tawfiq-e-Elahi Chowdhury</p>
                  </div>
                </a>
                <a href={"google.com"} className="small inline-block relative">
                  <img
                    className="w-full rounded-[10px] object-cover sm:h-[210px]"
                    src={ministerImg}
                    alt=""
                  />
                  <div className="info-box absolute bottom-0 left-0 bg-white p-[15px] min-w-[80%] rounded-tr-xl">
                    <h4 className="text-[16px] font-bold text-black">Adviser (Minister)</h4>
                    <p className="text-[14px] text-[#8F8F8F] pt-2">Tawfiq-e-Elahi Chowdhury</p>
                  </div>
                </a>
              </div>
              </div>
            </div>
            <div className="about col-span-12 lg:col-span-6">
              <div className="title">
                <div className="fancy_title relative">
                  <h2 className="font-semibold sm:text-[21px] text-[#006A4E] pl-2.5 leading-[24.41px] uppercase">
                    Ministry Related
                  </h2>
                </div>
                <h3 className="text-2xl sm:text-4xl py-4 font-semibold text-[#000225] mt-[-9px]">
                  Ministry of Power, Energy & Mineral
                </h3>
              </div>
              <p className="truncate_text text-[#8F8F8F] leading-[30px]">
                Welcome from Ministry of power, energy & mineral resources
                (MPEMR), bangladesh. MPE – ministry MR – has two separate
                departments/secretariats headed by two departments. Power Sector
                Power generation using conventional. Responsible for
                policy-making and implementation in all matters related
                transmission & distribution. Power sector is inextricably linked
                to all three functions generation.
              </p>
              <button className="flex items-center bg-[#000225] mt-14 py-[11px] px-[25px] rounded-3xl duration-300 hover:bg-[#F42A41] text-white"><img className="mr-3" src={readMoreIcon} alt="" /> Read More</button>
            </div>
          </div>
          <img className="md:block hidden mt-[30px] lg:mt-[60px] max-w-full" src={aboutLight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
