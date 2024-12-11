import React from 'react';

const DescriptionAboutProducts = () => {
    // Values and value names
    const details = [
        {
            label: 'Product Description',
            value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
            label: 'Product Varients',
            value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
    ];

    const certifications = ['Best Quality', 'Good Packing', 'Eco-Friendly'];

    return (
        <div className="p-[20px]">
            <h1 className="text-[#333] text-xl font-semibold mb-[15px]">Description About Products</h1>
            <div className="flex flex-col gap-[20px]">
                {details.map((item, index) => (
                    <div key={index} className='border-b border-[#33333394] pb-[10px]'>
                        <p className="font-semibold text-[#333] mb-[5px]">{item.label}:</p>
                        <p className="text-[#555] leading-relaxed">{item.value}</p>
                    </div>
                ))}

                <div>
                    <p className="font-semibold text-[#333] mb-[5px]">Product Certifications:</p>
                    <div className="flex flex-wrap gap-[10px] border-b border-[#33333394] pb-[10px]">
                        {certifications.map((certification, index) => (
                            <span
                                key={index}
                                className="bg-gray-400 text-white px-2 py-1 rounded text-sm"
                            >
                                {certification}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionAboutProducts;
