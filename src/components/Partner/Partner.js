import React from "react";
import partnerLogo from "../../image/partner-logo.png";
import "./Partner.css";

const Partner = () => {
  return (
    <div className="partner-part py-[60px] lg:py-[120px]">
        <div className="content-body">
            <div className="title text-center">
                <h3 className="text-4xl font-semibold text-[#000225] mt-[-9px]">Our Partner</h3>
                <p className="max-w-3xl mx-auto text-base text-[#8F8F8F] mt-[20px]">
                Responsible for policy-making and implementation in all matters
                related to transmission & distribution. Power sector is inextricably
                linked to all three functions generation.
                </p>
            </div>
            <div className="partner-tab">
                    <div className="tab-btn flex mt-[27px] justify-center gap-3">
                        <button className="font-medium text-white bg-[#006A4E] px-4 rounded-2xl h-[30px]">Electricity</button>
                        <button className="active font-medium text-white bg-[#F42A41] px-4 rounded-2xl h-[30px] ">EMRD</button>
                    </div>
                    <div className=" mt-14 card-group flex flex-wrap justify-center gap-[10px]">
                        <a href={'https://https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                        <a href={'https://mpemr.gov.bd'} className="card w-[30%] sm:w-[20%] lg:w-[11%] flex justify-center bg-white align-middle">
                            <img src={partnerLogo} className="max-w-full" alt="" />
                        </a>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default Partner;
