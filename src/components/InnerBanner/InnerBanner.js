import React from 'react';
import './InnerBanner.css'
import bannerImg from '../../image/inner-banner.png'

const InnerBanner = () => {
    const innerBannerBgImg = {
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div>
            <div className="inner-banner py-[30px] lg:py-[120px] max-h-[468px]" style={innerBannerBgImg}>
                <div className="content_body">
                    <div className="inner flex flex-wrap items-start gap-5 relative z-10 bg-white rounded-[10px] px-7 py-7 sm:px-14 sm:py-20">
                        <div className="flex items-center gap-5">
                            <a className='text-[#000225] font-semibold leading-5 hover:text-[#F42A41] duration-300' href="https://mepmr.gov.bd">MPEMR</a>
                            <span className='line w-10 sm:w-28 h-px bg-[#000225]'></span>
                        </div>
                        <div className="inner-title">
                            <h5 className='text-[#000225] font-semibold leading-5'>Electricity Department</h5>
                            <h3 className='text-[#000225] font-semibold text-2xl sm:text-4xl leading-10 uppercase mt-[10px] sm:mt-[30px]'>at a glance</h3>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerBanner;