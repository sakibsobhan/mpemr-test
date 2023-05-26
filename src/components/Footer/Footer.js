import React from 'react';
import logo from '../../image/logo.png';
import fbIcon from '../../image/facebook-icon.svg'


const Footer = () => {
    return (
        <div className='bg-[#000225] pt-[50px]'>
            <div className="content_body">
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="col-span-12 lg:col-span-2">
                        <a href={'google.com'} className="logo">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                        <h3 className='font-medium text-2xl text-white leading-[29px] mb-[20px]'>Development Partner</h3>
                        <ul>
                            <li><a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'google.com'}>World Bank</a></li>
                            <li><a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'google.com'}>ADB</a></li>
                            <li><a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'google.com'}>JICA</a></li>
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                        <h3 className='font-medium text-2xl text-white leading-[29px] mb-[20px]'>Contact</h3>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'mailto:info@mpemr.gov.bd'}>info@mpemr.gov.bd</a>
                        <br />
                        <div className="phone-number flex flex-wrap gap-x-3 gap-y-1">
                        <p className='text-[#E1E2E6] text-lg leading-[32px]'>Tel:</p>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'tel:+889551261'}>9551261,</a>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'tel:+889555962'}> 9555962,</a>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'tel:+889566099'}> 9566099,</a>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'tel:+889572097'}> 9572097,</a>
                        <a className='text-[#E1E2E6] text-lg leading-[32px] hover:text-[#F42A41] duration-300' href={'tel:+889554664'}> 9554664</a>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                        <div className="social-icon flex gap-3">
                            <a className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#07A74D] hover:bg-[#F42A41]  duration-300' href={'googel.com'}>
                                <img className='h-[13px]' src={fbIcon} alt="" />
                            </a>
                            <a className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#07A74D] hover:bg-[#F42A41]  duration-300' href={'googel.com'}>
                                <img className='h-[13px]' src={fbIcon} alt="" />
                            </a>
                            <a className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#07A74D] hover:bg-[#F42A41]  duration-300' href={'googel.com'}>
                                <img className='h-[13px]' src={fbIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center py-[36px] border-t-[1px] border-[#333551] mt-[50px]">
                    <p className='text-white'>Copyright @ 2023 All rights reserved. Power by <a className='text-[#F42A41]' href={'absolutionit.com'}>absolutionit.com</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;