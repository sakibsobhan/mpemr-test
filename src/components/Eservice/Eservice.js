import React from 'react';
import SideLink from '../SideLink/SideLink';
import eServiceLogo from '../../image/eservice-icon.png'

const Eservice = () => {
    return (
        <div>
            <div className="eService-page py-[60px] md:py-[120px]">
                <div className="content_body">
                    <div className="grid grid-cols-12 gap-[30px] lg:gap-[60px]">
                        <div className="card-group col-span-12 md:col-span-8">
                            <div className="grid grid-cols-12 gap-[30px]">
                                <div className="card-item hover:shadow-md duration-300 rounded-[10px] border-solid border-[1px] border-[#F7F7F7] overflow-hidden col-span-12 sm:col-span-6">
                                    <div className="top flex justify-center py-[60px] bg-[#F7F7F7]">
                                        <img className='w-[120px] h-[120px] object-cover' src={eServiceLogo} alt="" />
                                    </div>
                                    <div className="info p-[30px]">
                                        <h3 className='text-[#000225] text-[20px] font-semibold min-h-[60px]'>E-Documents Online</h3>
                                        <p className='text-[#555555] text-[13px] uppercase font-semibold mt-2 mb-3'>Power Division</p>
                                        <a className='text-[#07A74D] text-[13px] uppercase font-semibold' href={'google.com'}>Show Details</a>
                                    </div>
                                </div>
                                <div className="card-item hover:shadow-md duration-300 rounded-[10px] border-solid border-[1px] border-[#F7F7F7] overflow-hidden col-span-12 sm:col-span-6">
                                    <div className="top flex justify-center py-[60px] bg-[#F7F7F7]">
                                        <img className='w-[120px] h-[120px] object-cover' src={eServiceLogo} alt="" />
                                    </div>
                                    <div className="info p-[30px]">
                                        <h3 className='text-[#000225] text-[20px] font-semibold min-h-[60px]'>E-Documents Online</h3>
                                        <p className='text-[#555555] text-[13px] uppercase font-semibold mt-2 mb-3'>Power Division</p>
                                        <a className='text-[#07A74D] text-[13px] uppercase font-semibold' href={'google.com'}>Show Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="links col-span-12 md:col-span-4">
                            <SideLink></SideLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eservice;