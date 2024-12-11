import React from 'react';

const SelfLifeDetails = () => {
    // Values for the Self Life details
    const productLife = 'Product Life';
    const duration = '30 Days';

    return (
        <div>
            <div className="p-[10px] border-b border-[#3333338a]">
                <h1 className="text-[#333] text-xl font-semibold ps-[10px]">Self Life Details</h1>
            </div>
            <div className="p-[20px] grid grid-cols-2 gap-x-[20px]">
                <div className="ps-[10px] flex py-[15px]">
                    <p className=" text-[#333] w-[200px]">{productLife}</p>
                </div>
                <div className="ps-[10px] flex py-[15px]">
                    <p className="text-[#333]">{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default SelfLifeDetails;
