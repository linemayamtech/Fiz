import React, { useState } from 'react';
import ProductManagement from './ProductManagement.jsx';
import ProductDetails from './ProductDetails';
import SelfLifeDetails from './SelfLifeDetails.jsx';
import SellerDetails from './SellerDetails.jsx';
import BuyerDetails from './BuyerDetails.jsx';
import ProductDescription from './ProductDescription';
// Import other child components

const AddProduct = () => {
    const [formData, setFormData] = useState({
        projectManagement: {},
        productDetails: {},
        selfLifeDetails: {},
        sellerDetails: {},
        buyerDetails: {},
        productDescription: {},
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Send the formData to your backend
    };

    return (
        <div>
            <div className='px-[30px] shadow-custom rounded-[15px] py-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold text-[#667085]'>Add Product</h1>
                    {/* Toggle Button */}
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Project Management Section */}
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                        <h1 className='text-xl font-semibold underline text-[#333] py-3'>Product Management Details</h1>
                        <ProductManagement
                            data={formData.projectManagement}
                            setData={(data) => setFormData({ ...formData, projectManagement: data })}
                        />
                    </div>
                    {/* Product Details Section */}
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                    <h1 className='text-xl font-semibold underline text-[#333] py-3'>Product Details</h1>
                        <ProductDetails
                            data={formData.productDetails}
                            setData={(data) => setFormData({ ...formData, productDetails: data })}
                        />
                    </div>
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                    <h1 className='text-xl font-semibold underline text-[#333] py-3'>Self Life & Expiry Details</h1>
                        <SelfLifeDetails
                            data={formData.selfLifeDetails}
                            setData={(data) => setFormData({ ...formData, selfLifeDetails: data })}
                        />
                    </div>
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                    <h1 className='text-xl font-semibold underline text-[#333] py-3'>Product Of Seller</h1>
                        <SellerDetails
                            data={formData.sellerDetails}
                            setData={(data) => setFormData({ ...formData, sellerDetails: data })}
                        />
                    </div>
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                    <h1 className='text-xl font-semibold underline text-[#333] py-3'>Product Of Buyer</h1>
                        <BuyerDetails
                            data={formData.buyerDetails}
                            setData={(data) => setFormData({ ...formData, buyerDetails: data })}
                        />
                    </div>
                    <div className="px-[30px] py-6 shadow-custom mt-5">
                    <h1 className='text-xl font-semibold underline text-[#333] py-3'>Description About Products</h1>
                        <ProductDescription
                            data={formData.productDescription}
                            setData={(data) => setFormData({ ...formData, productDescription: data })}
                        />
                    </div>
                    {/* Add other sections similarly */}

                    <div className="flex justify-end mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddProduct;
