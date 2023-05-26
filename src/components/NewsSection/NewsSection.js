import React from 'react';
import './NewsSection.css'
import newsThumbImage from '../../image/news-thumb-img.png'

const NewsSection = () => {
    return (
        <div className='news-part py-[60px] lg:py-[120px]'>   
            <div className="content_body">
            <div className="flex flex-wrap justify-between align-middle gap-4">
                    <div className="title">
                                <div className="fancy_title relative">
                                    <h2 className='font-semibold sm:text-[21px] text-[#006A4E] pl-2.5 leading-[24.41px] uppercase'>Ministry of power</h2>
                                </div>
                                    <h3 className="text-2xl sm:text-4xl py-4 font-semibold text-[#000225] mt-[-9px]">Our Partner</h3>
                    </div>
                <div className="news-tab">
                    <div className="tab-btn flex sm:mt-[27px] mt-0 justify-center gap-3">
                        <button className="font-medium text-white bg-[#006A4E] px-4 rounded-2xl h-[30px]">News</button>
                        <button className="active font-medium text-white bg-[#F42A41] px-4 rounded-2xl h-[30px] ">Office</button>
                    </div>
                </div>
            </div>
            <div className="news-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-[30px]">
                <a href={'google.com'} className="news-card inline-block">
                    <img className='w-100 min-w-full h-[245px] object-cover rounded-lg' src={newsThumbImage} alt="" />
                    <p className="text-[16px] sm:text-[21px] ease-in-out hover:underline decoration-transparent hover:decoration-[#555555] duration-300 hover:underline-offset-4 font-semibold text-[#555555] leading-[26px] sm:leading-[31px] mt-2.5 sm:mt-[22px] line-clamp-2">Bangladesh Petroleum Corporation Was Established by Ordinance Established by Ordinance</p>
                </a>
                <a href={'google.com'} className="news-card inline-block">
                    <img className='w-100 min-w-full h-[245px] object-cover rounded-lg' src={newsThumbImage} alt="" />
                    <p className="text-[16px] sm:text-[21px] ease-in-out hover:underline decoration-transparent hover:decoration-[#555555] duration-300 hover:underline-offset-4 font-semibold text-[#555555] leading-[26px] sm:leading-[31px] mt-2.5 sm:mt-[22px]  line-clamp-2">Bangladesh Petroleum Corporation Was Established by Ordinance Established by Ordinance</p>
                </a>
                <a href={'google.com'} className="news-card inline-block">
                    <img className='w-100 min-w-full h-[245px] object-cover rounded-lg' src={newsThumbImage} alt="" />
                    <p className="text-[16px] sm:text-[21px] ease-in-out hover:underline decoration-transparent hover:decoration-[#555555] duration-300 hover:underline-offset-4 font-semibold text-[#555555] leading-[26px] sm:leading-[31px] mt-2.5 sm:mt-[22px]  line-clamp-2">Bangladesh Petroleum Corporation Was Established by Ordinance Established by Ordinance</p>
                </a>
                
            </div>
            <div className="text-center mt-[20px] sm:mt-[50px]">
                <a className='all-news-btn' href={'google.com'}>All News</a>
            </div>
        </div>
        </div>
    );
};

export default NewsSection;