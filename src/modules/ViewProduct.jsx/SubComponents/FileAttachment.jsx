import React, { useState } from 'react';
import productImg1 from '../../../Assets/images/productImage2.jpg';
import ProductImg2 from '../../../Assets/images/productImage3.jpg';

const FileAttachment = () => {
    const [isProductImagesModalOpen, setProductImagesModalOpen] = useState(false);
    const [isCertificationsModalOpen, setCertificationsModalOpen] = useState(false);

    const toggleProductImagesModal = () => {
        setProductImagesModalOpen(!isProductImagesModalOpen);
    };

    const toggleCertificationsModal = () => {
        setCertificationsModalOpen(!isCertificationsModalOpen);
    };

    return (
        <div>
            <div className="p-[10px] border-b border-[#3333338a]">
                <h1 className="text-[#333] text-xl font-semibold ps-[10px]">File Attachment</h1>
            </div>
            <div className="p-[20px] grid grid-cols-2 gap-x-[20px]">
                {/* Product Images */}
                <div className="ps-[10px] flex py-[15px]">
                    <p className="font-semibold text-[#333] w-[200px]">Product Images:</p>
                    <a
                        href="#"
                        onClick={toggleProductImagesModal}
                        className="text-blue-500 underline cursor-pointer"
                    >
                        View
                    </a>
                </div>
                {/* Certifications */}
                <div className="ps-[10px] flex py-[15px]">
                    <p className="font-semibold text-[#333] w-[200px]">Certifications:</p>
                    <a
                        href="#"
                        onClick={toggleCertificationsModal}
                        className="text-blue-500 underline cursor-pointer"
                    >
                        View
                    </a>
                </div>
            </div>

            {/* Product Images Modal */}
            {isProductImagesModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-[20px] rounded shadow-lg w-[80%] max-w-[500px]">
                        <h2 className="text-xl font-semibold mb-[10px]">Product Images</h2>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <img src={productImg1} alt="Product 1" className="w-[100px] h-[100px]" />
                            <img src={ProductImg2} alt="Product 2" className="w-[100px] h-[100px]" />
                        </div>
                        <button
                            onClick={toggleProductImagesModal}
                            className="mt-[20px] px-[10px] py-[5px] bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Certifications Modal */}
            {isCertificationsModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-[20px] rounded shadow-lg w-[80%] max-w-[500px]">
                        <h2 className="text-xl font-semibold mb-[10px]">Certifications</h2>
                        <div className="grid grid-cols-2 gap-[10px]">
                            <img src={productImg1} alt="Product 1" className="w-[100px] h-[100px]" />
                            <img src={ProductImg2} alt="Product 2" className="w-[100px] h-[100px]" />
                        </div>
                        <button
                            onClick={toggleCertificationsModal}
                            className="mt-[20px] px-[10px] py-[5px] bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileAttachment;
