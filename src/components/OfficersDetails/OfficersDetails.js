import React from 'react';
import officer from '../../image/officer.png'


const OfficersDetails = () => {
    return (
        <div>
            <div className="officer-details-part py-[60px] md:py-[120px]">
                <div className="content_body">
                    {/* <div className="grid items-center grid-cols-12 gap-[60px]">
                    <div className="left col-span-12 sm:col-span-12 md:col-span-5">
                    <div className="officer-image md:inline-block text-center bg-[#F7F7F7] py-6 md:py-0 rounded-[10px]">
                        <img className='inline-block md:mt-[80px] md:ml-[80px] md:mb-[-80px] md:mr-[-80px] rounded-[10px] max-w-full md:max-w-[260px]' src={officer} alt="" />
                    </div>
                    </div>
                    <div className="right col-span-12 sm:col-span-12 md:col-span-7">
                    <div className="officer-details-info bg-[#F7F7F7] rounded-[10px] p-[30px] md:p-[60px]">
                        <h3 className='text-4xl text-[#000225] font-semibold'>Mr. Md. Anichur Rahman</h3>
                        <p className='text-[#555555] font-semibold uppercase mt-2'>Senior secretary (Energy)</p>
                        <ul className='mt-6'>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Name:</span> Mr. Md. Anichur Rahman (4610)</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Designation:</span> Senior Secretary</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Office:</span> Department of Energy and Mineral Resources</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Email:</span> secretary@emrd.gov.bd</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Mobile:</span> 01713-266373</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Phone:</span> (Office) +08802-9514933</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Intercom:</span> (Office) 101</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Phone:</span> (Home) +8802-41031009</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Fax:</span> +08802-9545110</li>


                        </ul>
                    </div>
                    </div>
                    </div> */}
                    <div className="md:flex items-center">
                    <div className="left md:w-[40%] mt-[-80px]">
                    <div className="officer-image md:inline-block text-center bg-[#F7F7F7] py-6 md:py-0 rounded-[10px]">
                        <img className='inline-block md:mt-[30px] lg:mt-[80px] md:ml-[30px] lg:ml-[80px] md:mb-[-83px] lg:mb-[-80px] md:mr-[-80px] rounded-[10px] max-w-full md:max-w-[260px]' src={officer} alt="" />
                    </div>
                    </div>
                    <div className="right md:w-[60%] mt-[60px] md:mt-0">
                    <div className="officer-details-info bg-[#F7F7F7] rounded-[10px] p-[30px] md:p-[60px]">
                        <h3 className='text-2xl md:text-4xl text-[#000225] font-semibold'>Mr. Md. Anichur Rahman</h3>
                        <p className='text-[#555555] font-semibold uppercase mt-2'>Senior secretary (Energy)</p>
                        <p className='text-[#8F8F8F] mt-6'>
                        নামঃ জনাব মোঃ আনিছুর রহমান (৪৬১০) <br />

                        পদবিঃ সিনিয়র সিচব <br />

                        অফিসঃ জ্বালানি ও খনিজ সম্পদ বিভাগ <br />

                        ই-মেইলঃ secretary@emrd.gov.bd <br />

                        মোবাইলঃ০১৭১৩-২৬৬৩৭৩ <br />

                        ফোনঃ (অফিস) +০৮৮০২-৯৫১৪৯৩৩ <br />

                        ইন্টারকমঃ ১০১ <br />

                        ফোনঃ (বাসা) +৮৮০২-৪১০৩১০০৯ <br />

                        ফ্যাক্সঃ +০৮৮০২-৯৫৪৫১১০  <br />
                        </p>
                        {/* <ul className='mt-6'>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Name:</span> Mr. Md. Anichur Rahman (4610)</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Designation:</span> Senior Secretary</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Office:</span> Department of Energy and Mineral Resources</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Email:</span> secretary@emrd.gov.bd</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Mobile:</span> 01713-266373</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Phone:</span> (Office) +08802-9514933</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Intercom:</span> (Office) 101</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Phone:</span> (Home) +8802-41031009</li>
                            <li className='text-[#8F8F8F] mb-2'><span className='font-medium'>Fax:</span> +08802-9545110</li>
                        </ul> */}
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficersDetails;