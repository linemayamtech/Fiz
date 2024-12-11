import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { FiMail } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import ProductOwnedDetails from './SubComponents/ProductOwnedDetails';
import ProductDetails from './SubComponents/ProductDetails';
import ProductManagementDetails from './SubComponents/ProductManagementDetails';
import SelfLifeDetails from './SubComponents/SelfLifeDetails';
import FileAttachment from './SubComponents/FileAttachment';
import DescriptionAboutProducts from './SubComponents/DescriptionAboutProducts';

const ViewProduct = () => {
    return (
        <div className='p-[30px]'>
            <div className='shadow-custom rounded-[20px]'>
                <div className='flex justify-between border-b border-gray-200 pb-2 px-[30px] py-[10px]'>
                    <div>
                        <h1 className='text-xl text-gray-400 font-semibold'>Product Details</h1>
                    </div>
                    <div className='flex gap-[15px]'>
                        <div className='flex gap-[5px] rounded-[5px] items-center px-3 py-1 bg-[#25D366] text-[#fff] font-semibold'>
                            <FaWhatsapp />
                            <button>Whatsapp</button>
                        </div>
                        <div className='flex gap-[5px] rounded-[5px] items-center px-3 py-1 bg-[#333333] text-[#fff] font-semibold'>
                            <TbPhoneCall />
                            <button>Call</button>
                        </div>
                        <div className='flex gap-[5px] rounded-[5px] items-center border border-[#0C92CC] text-[#0C92CC] font-semibold'>
                            <div className='bg-[#0C92CC] px-2 py-2 text-[#fff]'>
                                <FiMail />
                            </div>
                            <button className='px-2'>Send Mail</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className="mr-2 bg-[#333333] p-1 px-2 rounded-[5px] text-[#fff] text-xl">
                            <FaRegEdit />
                        </button>
                        <button className="text-[#fff] px-2 py-1 bg-[#FF0000] text-xl rounded-[5px]">
                            <MdDeleteOutline />
                        </button>
                    </div>
                </div>
                <div className='py-[20px]'>
                    {/* Render the nested components here */}
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'>
                        <ProductOwnedDetails />
                    </div>
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'>
                        <ProductManagementDetails />
                    </div>
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'> 
                        <ProductDetails />
                    </div>
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'>
                        <SelfLifeDetails />
                    </div>
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'>
                        <FileAttachment />
                    </div>
                    <div className='shadow-custom mx-[30px] my-[20px] rounded-[15px]'>
                        <DescriptionAboutProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
