import React from 'react';
import officer from '../../image/officer.png'


const OfficersDetails = () => {
    return (
        <div>
            <div className="officer-details-part py-[60px] md:py-[120px]">
                <div className="content_body">
                    <div className="grid">
                    <div className="officer-image bg-[#F7F7F7] rounded-[10px]">
                        <img className='rounded-[10px] max-w-[260px]' src={officer} alt="" />
                    </div>
                    <div className="officer-details-info bg-[ #F7F7F7] rounded-[10px] p-[60px]">

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficersDetails;