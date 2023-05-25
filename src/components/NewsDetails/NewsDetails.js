import React from 'react';
import './NewsDetails.css'
import thumbImg from '../../image/news-details-img.png'
import searchIcon from '../../image/search-icon.svg'
import smallThumb from '../../image/small-thumb-img.png'
import SideLink from '../SideLink/SideLink';
import shareIcon from '../../image/share-icon.svg';

const NewsDetails = () => {
    return (
        <div className='py-[60px] lg:py-[120px]'>
            <div className="content-body">
                <div className="news-title md:px-[110px]">
                    <div className="meta flex gap-5 items-center">
                        <a href='https://mpemr.gov.bd/news' className='uppercase font-semibold text-[#555555] hover:text-[#F42A41] duration-300'>Blog</a>
                        <span className='w-[5px] h-[5px] bg-[#D9D9D9] rounded-full'></span>
                        <p className='uppercase font-semibold text-[#555555]'>December 20, 2023</p>
                    </div>
                    <h3 className='text-[#000225] font-semibold text-2xl sm:text-4xl leading-[34px] sm:leading-[44px] mt-[26px]' >Bangladesh Petroleum Corporation was established by Ordinance No. of 1976.</h3>
                </div>
                <div className="thumbnail-img my-[30px] sm:my-[60px] text-center">
                    <img className='max-w-full max-h-[640px] object-cover' src={thumbImg} alt="" />
                </div>
                <div className="lg:grid lg:grid-cols-12 gap-[60px]">
                    <div className="news-body lg:col-span-8 mb-16 lg:mb-0">
                        <div className="news-details-content">
                            <p className='text-[#707070] leading-[30px]'>So far 5 coal fields have been discovered in Bangladesh. The total reserves of coal in the 5 discovered coal fields are estimated at 3300 million tonnes. The use of coal as a fuel for power generation and brick kilns is gradually increasing. A mining lease was granted in 1994 by the Bureau of Mineral Resources Development in favor of Barapukuria Coal Mining Company Limited (BCMCL) for mining coal in Parvatipur Upazila of Dinajpur District. At present, coal is being extracted from the coalfield in the underground mining process (Under Ground Mining Process) and government revenue is being collected by selling the coal produced with 525 megawatt power generation in the power generation center located in the coal mining area. Besides, prospecting license was granted on 21.12.2008 in favor of Petrobangla for exploration of coal in Dighipara of Nawabganj Upazila of Dinajpur District. The said Exploration Agreement executed with Petrobangla has been transferred in favor of BCMCL on 21.10.2015 with a view to further development and acceleration of exploration activities. Currently feasibility study activities are underway by BCMCL to explore the coalfield. <br /> So far 5 coal fields have been discovered in Bangladesh. The total reserves of coal in the 5 discovered coal fields are estimated at 3300 million tonnes. The use of coal as a fuel for power generation and brick kilns is gradually increasing. A mining lease was granted in 1994 by the Bureau of Mineral Resources Development in favor of Barapukuria Coal Mining Company Limited (BCMCL) for mining coal in Parvatipur Upazila of Dinajpur District. At present, coal is being extracted from the coalfield in the underground mining process (Under Ground Mining Process) and government revenue is being collected by selling the coal produced with 525 megawatt power generation in the power generation center located in the coal mining area. Besides, prospecting license was granted on 21.12.2008 in favor of Petrobangla for exploration of coal in Dighipara of Nawabganj Upazila of Dinajpur District. The said Exploration Agreement executed with Petrobangla has been transferred in favor of BCMCL on 21.10.2015 with a view to further development and acceleration of exploration activities. Currently feasibility study activities are underway by BCMCL to explore the coalfield. </p>
                            <div className="share mt-10 sm:mt-20">
                                <button className='flex gap-3 items-center bg-[#E6F6ED] text-[#07A74D] px-[25px] py-3 rounded-full'><img src={shareIcon} alt="" /> Share</button>
                            </div>
                        </div>
                    </div>
                    <div className="side-bar lg:col-span-4">
                        <div className="search bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px]">
                            <form className='relative' action="#">
                                <input className='w-full h-[45px] rounded-md px-[15px] outline-none placeholder:text-[#8F8F8F] placeholder:font-semibold ' type="text" placeholder='Search'/>
                                <button className='absolute top-[50%] translate-y-[-50%] right-[15px]'><img src={searchIcon} alt="" /></button>
                            </form>
                        </div>
                        <div className="recent-news  bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px]">
                            <h4 className='text-[#000225] font-semibold text-[21px] leading-none'>Related News</h4>
                            <a href={'https://google.com'} className="news-card flex gap-[20px] mt-[30px] pb-[30px] border-solid border-b-[1px] border-[#D9D9D9]">
                                <div className="small-thumb-img w-[80px] min-w-[80px]">
                                    <img className='small-img w-full h-[90px] object-cover rounded-md' src={smallThumb} alt="" />
                                </div>
                                <div className="details flex flex-col justify-between">
                                    <p className='text-[#8F8F8F;] uppercase text-[13px] leading-[13px]'>april 3 2022</p>
                                    <h4 className='recent-news-title text-[#000225] font-bold'>United to promote versatile and cost-effective project plan</h4>
                                    <a className='text-[#F42A41] font-medium text-[13px]' href={'googel.com'}>Read More</a>
                                </div>
                            </a>
                            <a href={'https://google.com'} className="news-card flex gap-[20px] mt-[30px] pb-[30px] border-solid border-b-[1px] border-[#D9D9D9]">
                                <div className="small-thumb-img w-[80px] min-w-[80px]">
                                    <img className='small-img w-full h-[90px] object-cover rounded-md' src={smallThumb} alt="" />
                                </div>
                                <div className="details flex flex-col justify-between">
                                    <p className='text-[#8F8F8F;] uppercase text-[13px] leading-[13px]'>april 3 2022</p>
                                    <h4 className='recent-news-title text-[#000225] font-bold'>United to promote versatile and cost-effective project plan</h4>
                                    <a className='text-[#F42A41] font-medium text-[13px]' href={'googel.com'}>Read More</a>
                                </div>
                            </a>
                            <a href={'https://google.com'} className="news-card flex gap-[20px] mt-[30px]">
                                <div className="small-thumb-img w-[80px] min-w-[80px]">
                                    <img className='small-img w-full h-[90px] object-cover rounded-md' src={smallThumb} alt="" />
                                </div>
                                <div className="details flex flex-col justify-between">
                                    <p className='text-[#8F8F8F;] uppercase text-[13px] leading-[13px]'>april 3 2022</p>
                                    <h4 className='recent-news-title text-[#000225] font-bold'>United to promote versatile and cost-effective project plan</h4>
                                    <a className='text-[#F42A41] font-medium text-[13px]' href={'googel.com'}>Read More</a>
                                </div>
                            </a>
                        </div>
                        <SideLink></SideLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetails;