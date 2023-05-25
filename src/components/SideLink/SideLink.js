import React from 'react';

const SideLink = () => {
    return (
        <div>
            <div className="link-card bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px]">
                <h4 className='text-[#000225] font-semibold text-[21px] leading-none'>Information</h4>
                <ul className='mt-[10px]'>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://pmo.gov.bd/">Prime Minister’s Office</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://www.parliament.gov.bd/">Bangladesh Parliament</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://a2i.gov.bd/">Access To Information (a2i)</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://bangladesh.gov.bd/index.php">National Web Portal of Bangladesh</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://www.bangladesh.gov.bd/site/view/all_eservices/">National E-Service</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://forms.mygov.bd/">All Forms of Service</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://services.portal.gov.bd/">Sebakunja</a></li>
                    <li> <a className='block pt-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://bdpost.portal.gov.bd/">Post Code</a></li>
                </ul>
            </div>
            <div className="link-card bg-[#F7F7F7] rounded-[10px] p-[30px] mb-[30px]">
                <h4 className='text-[#000225] font-semibold text-[21px] leading-none'>Information</h4>
                <ul className='mt-[10px]'>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="http://ocsms.desco.org.bd:8080/login">e-Services (DESCO)</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://www.bpdb.gov.bd/">Customer Care (BPDB)</a></li>
                    <li> <a className='block pt-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://dpdc.gov.bd/site/page/c3697773-e03c-41ee-b1c8-043d7e7bf1db/Online-Bill-Payment-for-Post-Paid-Customer">Bill Payment (DPDC)</a></li>
                </ul>
            </div>
            <div className="link-card bg-[#F7F7F7] rounded-[10px] p-[30px]">
                <h4 className='text-[#000225] font-semibold text-[21px] leading-none'>General Report</h4>
                <ul className='mt-[10px]'>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://bpdb.gov.bd/bpdb/index.php?option=com_content&view=article&id=126&Itemid=17">Maximum Generation</a></li>
                    <li> <a className='block border-b-[1px] border-[#D9D9D9] py-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://bpdb.gov.bd/bpdb/index.php?option=com_content&view=article&id=20&Itemid=18">Daily Generation Archive</a></li>
                    <li> <a className='block pt-3.5 text-[#8F8F8F] font-medium hover:text-[#F42A41] hover:pl-[5px] duration-300' href="https://bpdb.gov.bd/bpdb/index.php?option=com_content&view=article&id=151&Itemid=118">BPDB Daily Generation Report</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideLink;