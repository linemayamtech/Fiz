import React from 'react';

const ProductManagementDetails = () => {
    // Data for the product management details
    const details = [
        { label: 'Buyer Added By', value: 'Administrator' },
        { label: 'Product Time', value: '13:30' },
        { label: 'Product Last Modified Date', value: '12-12-2024' },
        { label: 'Product Owner', value: 'Administrator' },
        { label: 'Product Recommended Role', value: '...' },
    ];

    const additionalDetails = [
        { label: 'Buyer Added Date', value: '12/11/24' },
        { label: 'Product Last Modified By', value: 'Administrator' },
        { label: 'Product Last Modified Time', value: '13:30' },
        { label: 'Next Step', value: '...' },
        { label: 'Tags', value: '...' },
    ];

    return (
        <div>
            <div className="p-[10px] border-b border-[#3333338a]">
                <h1 className="text-[#333] text-xl font-semibold ps-[10px]">Product Management Details</h1>
            </div>
            <div className="p-[20px] grid grid-cols-2 gap-x-[20px]">
                <div className="ps-[10px]">
                    {details.map((item, index) => (
                        <div key={index} className="flex py-[15px]">
                            <p className="font-semibold text-[#333] w-[200px]">{item.label}:</p>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
                <div className="ps-[10px]">
                    {additionalDetails.map((item, index) => (
                        <div key={index} className="flex py-[15px]">
                            <p className="font-semibold text-[#333] w-[200px]">{item.label}:</p>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductManagementDetails;