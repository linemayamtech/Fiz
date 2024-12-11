import React from 'react';

const ProductOwnedDetails = () => {
    // Data for the product owned details
    const details = [
        { label: 'Seller ID', value: 'p896355' },
        { label: 'Email ID', value: 'renisha@emayamtech.com' },
        { label: 'Supplier Ratings', value: 4.5, isRating: true },
        { label: 'Seller Name', value: 'Emayam Technology' },
        { label: 'Mobile Number', value: '1234567890' },
    ];

    // Function to render stars
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0; // Handle half star for decimal values
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <span className="text-yellow-500">
                {"★".repeat(fullStars)}
                {halfStars === 1 && "★"}
                <span className="text-gray-400">{"☆".repeat(emptyStars)}</span>
            </span>
        );
    };

    return (
        <div>
            <div className="p-[10px] border-b border-[#3333338a]">
                <h1 className="text-[#333] text-xl font-semibold ps-[10px]">Product Owned By</h1>
            </div>
            <div className="p-[20px] grid grid-cols-2 gap-x-[20px]">
                <div className="ps-[10px]">
                    {details.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex py-[15px]">
                            <p className="font-semibold text-[#333] w-[150px]">{item.label}:</p>
                            <p>
                                {item.isRating ? (
                                    renderStars(item.value) // Render the stars here
                                ) : (
                                    item.value
                                )}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="ps-[10px]">
                    {details.slice(3).map((item, index) => (
                        <div key={index} className="flex py-[15px]">
                            <p className="font-semibold text-[#333] w-[150px]">{item.label}:</p>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductOwnedDetails;
