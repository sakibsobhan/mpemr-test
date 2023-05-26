import React from 'react';
import ImportantProjectImg from '../../image/important-project-img.png'
import './ProjectFeed.css'
import { Timeline } from 'react-twitter-widgets'
import twitterLogo from '../../image/twitter.png'
import facebookLogo from '../../image/facebook.png'
import youtubeLogo from '../../image/youtube.png'


const ProjectFeed = () => {
    return (
        <div className='bg-[#F8FAFF] py-[60px] md:py-[120px]'>
            <div className="content_body">
                <div className="grid grid-cols-12 lg:gap-[30px] gap-y-[60px]">
                    <div className="col-span-12 lg:col-span-8">
                        <div className="title">
                            <div className="fancy_title relative">
                                <h2 className='font-semibold sm:text-[21px] text-[#006A4E] pl-2.5 leading-[24.41px] uppercase'>Ministry of power</h2>
                            </div>
                                <h3 className="text-2xl sm:text-4xl py-4 font-semibold text-[#000225] mt-[-9px]">Our Most Important Running Projects</h3>
                        </div>
                        <div className="latest-project-item mt-[27px]">
                            <img className='max-w-full' src={ImportantProjectImg} alt="" />
                            <p className='text-[#555555;] font-semibold text-[16px] sm:text-2xl mt-[18px] leading pr-0 md:pr-16'>Bangladesh begins construction work on rooppur nuclear power plant - Power Technology.</p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <div className="feed py-8 bg-white rounded-[20px] max-h-[740px]">
                            <div className="tab flex flex-nowrap px-6 border-b-[1px] border-solid border-[#E8E8E8]">
                                <button className='active py-4 mb-[-1px] px-4 sm:px-6'><img src={twitterLogo} alt="" /></button>
                                <button className='py-4 mb-[-1px] px-4 sm:px-6'><img src={youtubeLogo} alt="" /></button>
                                <button className='py-4 mb-[-1px] px-4 sm:px-6'><img src={facebookLogo} alt="" /></button>
                            </div>
                            <div className="content px-6 pt-6">
                                <Timeline
                                        dataSource={{
                                            sourceType: 'profile',
                                            screenName: 'mopemr'
                                        }}
                                        options={{
                                            height: '550'
                                        }}
                                        />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectFeed;