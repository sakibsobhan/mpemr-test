import React from 'react';
import searchIcon from '../../image/search-icon.svg'
import officer from '../../image/officer.png'

const Officers = () => {
    return (
        <div>
            <div className="officers-section py-[60px] md:py-[120px]">
                <div className="content_body">
                <div className="search bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px] sm:mb-[60px]">
                            <form className='relative' action="#">
                                <input className='w-full h-[45px] rounded-md px-[15px] outline-none placeholder:text-[#8F8F8F] placeholder:font-semibold ' type="text" placeholder='Search Officers'/>
                                <button className='absolute top-[50%] translate-y-[-50%] right-[15px]'><img src={searchIcon} alt="" /></button>
                            </form>
                        </div>
                    <div className="officers-list grid grid-cols-12 gap-x-[30px] gap-y-[45px]">
                        <div className="officer-card col-span-6 md:col-span-4 lg:col-span-3">
                            <img className='rounded-[10px] w-full sm:h-[360px] object-cover' src={officer} alt="" />
                            <div className="officer-info mt-[10px]">
                                <h4 className='text-[#000225] text-lg leading-[34px] font-semibold'>Mr. Md. Anichur Rahman</h4>
                                <p className='text-[#555555] text-[13px] py-1 font-semibold uppercase'>Senior secretary (Energy)</p>
                                <a className='text-[#006A4E] text-[13px] uppercase font-semibold' href={'google.com'}>Read More</a>
                            </div>
                        </div>
                        <div className="officer-card col-span-6 md:col-span-4 lg:col-span-3">
                            <img className='rounded-[10px] w-full sm:h-[360px] object-cover' src={officer} alt="" />
                            <div className="officer-info mt-[10px]">
                                <h4 className='text-[#000225] text-lg leading-[34px] font-semibold'>Mr. Md. Anichur Rahman</h4>
                                <p className='text-[#555555] text-[13px] py-1 font-semibold uppercase'>Senior secretary (Energy)</p>
                                <a className='text-[#006A4E] text-[13px] uppercase font-semibold' href={'google.com'}>Read More</a>
                            </div>
                        </div>
                        <div className="officer-card col-span-6 md:col-span-4 lg:col-span-3">
                            <img className='rounded-[10px] w-full sm:h-[360px] object-cover' src={officer} alt="" />
                            <div className="officer-info mt-[10px]">
                                <h4 className='text-[#000225] text-lg leading-[34px] font-semibold'>Mr. Md. Anichur Rahman</h4>
                                <p className='text-[#555555] text-[13px] py-1 font-semibold uppercase'>Senior secretary (Energy)</p>
                                <a className='text-[#006A4E] text-[13px] uppercase font-semibold' href={'google.com'}>Read More</a>
                            </div>
                        </div>
                        <div className="officer-card col-span-6 md:col-span-4 lg:col-span-3">
                            <img className='rounded-[10px] w-full sm:h-[360px] object-cover' src={officer} alt="" />
                            <div className="officer-info mt-[10px]">
                                <h4 className='text-[#000225] text-lg leading-[34px] font-semibold'>Mr. Md. Anichur Rahman</h4>
                                <p className='text-[#555555] text-[13px] py-1 font-semibold uppercase'>Senior secretary (Energy)</p>
                                <a className='text-[#006A4E] text-[13px] uppercase font-semibold' href={'google.com'}>Read More</a>
                            </div>
                        </div>
                        <div className="officer-card col-span-6 md:col-span-4 lg:col-span-3">
                            <img className='rounded-[10px] w-full sm:h-[360px] object-cover' src={officer} alt="" />
                            <div className="officer-info mt-[10px]">
                                <h4 className='text-[#000225] text-lg leading-[34px] font-semibold'>Mr. Md. Anichur Rahman</h4>
                                <p className='text-[#555555] text-[13px] py-1 font-semibold uppercase'>Senior secretary (Energy)</p>
                                <a className='text-[#006A4E] text-[13px] uppercase font-semibold' href={'google.com'}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Officers;