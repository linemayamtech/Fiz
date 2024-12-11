import React from 'react';

const ProductDetails = () => {
    // Data for the product details
    const details = [
        { label: 'Product ID', value: 'P896345' },
        { label: 'HSN Code For Product', value: '018104' },
        { label: 'Default Unit Measure', value: 'Kg' },
        { label: 'Product Capacity', value: '2,000 Kg' },
        { label: 'Production Leads Time in Days', value: '30 Days' },
    ];

    const additionalDetails = [
        { label: 'Product Name', value: 'Rice' },
        { label: 'Category Of Product', value: 'Agriculture & Food Product' },
        { label: 'Indicative Price Range', value: '$245 - $549' },
        { label: 'Present Stock Status', value: 'In Stock' },
        { label: 'Minimum Order Quality', value: '3Kg' },
    ];

    return (
        <div>
            <div className="p-[10px] border-b border-[#3333338a]">
                <h1 className="text-[#333] text-xl font-semibold ps-[10px]">Product Details</h1>
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

export default ProductDetails;