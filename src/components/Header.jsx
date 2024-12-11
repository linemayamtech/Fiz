import React, { useState } from 'react';
import Logo from '../Assets/images/ZeroMiddleMan Logo 3.png';
import { LuPhoneCall } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import profile from "../Assets/images/profile-pic.jpg"

const Header = () => {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <div>
                <div className='w-full flex flex-wrap md:flex-nowrap border-b border-gray-200'>
                    <div className='p-2 border-r border-gray-200'>
                        <img src={Logo} alt="logo" className='' />
                    </div>
                    <div className='w-full'>
                        <div className='flex border-b border-gray-200'>
                            <div className='w-1/2'>
                                <div className='flex justify-start w-full'>
                                    <div className='flex items-center p-2'>
                                        <LuPhoneCall /><span className='ps-2'>+1 222-555-33-99</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2 p-2'>
                                <div className='flex justify-end gap-[20px]'>
                                    <a href="" className='bg-[#D0236C] p-2 text-[#FFF]'>Listing Service Dashboard</a>
                                    <a href="" className='bg-[#D0236C] p-2 text-[#FFF]'>Liaison Service Dashboard</a>
                                    <a href="" className='bg-[#D0236C] p-2 text-[#FFF]'>Directory Service Dashboard</a>
                                </div>
                            </div>
                        </div>
                        <div className='p-3 flex items-center gap-[20px]'>
                            <div className=''>
                                <form action="">
                                    <div className="flex items-center space-x-4 border border-[#0C92CC] rounded-[20px] px-2">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="option1"
                                                name="radioOption"
                                                value="option1"
                                                checked={selectedOption === "option1"}
                                                onChange={handleRadioChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="option1" className="text-lg text-[#69BCDF]">Buyer</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="option2"
                                                name="radioOption"
                                                value="option2"
                                                checked={selectedOption === "option2"}
                                                onChange={handleRadioChange}
                                                className="mr-2"
                                            />
                                            <label htmlFor="option2" className="text-lg text-[#69BCDF]">Seller</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <select name="" id="" className='border border-[#0C92CC] rounded-[20px] px-2 py-1 text-[#0C92CC] outline-none'>
                                    <option selected disabled value="">Choose Country</option>
                                    <option value="">India</option>
                                    <option value="">Africa</option>
                                    <option value="">USA</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className='border border-[#0C92CC] rounded-[20px] px-2 py-1 text-[#0C92CC] outline-none'>
                                    <option selected disabled value="">Choose State</option>
                                    <option value="">India</option>
                                    <option value="">Africa</option>
                                    <option value="">USA</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className='border border-[#0C92CC] rounded-[20px] px-2 py-1 text-[#0C92CC] outline-none'>
                                    <option selected disabled value="">Choose City</option>
                                    <option value="">India</option>
                                    <option value="">Africa</option>
                                    <option value="">USA</option>
                                </select>
                            </div>
                            <div>
                                <select name="" id="" className='border border-[#0C92CC] rounded-[20px] px-3 py-1 text-[#0C92CC] outline-none'>
                                    <option selected disabled value="">Nature Of Business</option>
                                    <option value="">Wholesale</option>
                                    <option value="">Africa</option>
                                    <option value="">USA</option>
                                </select>
                            </div>
                            <div className='flex border border-[#333] rounded-[20px]'>
                                <select name="" id="" className=' px-3 py-1  outline-none rounded-tl-[20px] rounded-bl-[20px] border-r border-[#333]  '>
                                    <option selected value="products">Products</option>
                                    <option value="categories">Categories</option>
                                    <option value="hsnCode">HSN Code</option>
                                    <option value="services">Services</option>
                                    <option value="others">Others</option>
                                </select>
                                <input type="text" placeholder='Search here.....' className='lg:w-[450px] ps-1' />
                                <div className='flex items-center bg-[#FF0000] text-[#fff] font-semibold gap-[5px] px-2 rounded-tr-[20px] rounded-br-[20px]'>
                                    <GoSearch className='text-[#fff]' />
                                    <button className=''>Search</button>
                                </div>
                            </div>
                            <div className='w-full flex justify-end items-center mr-3'>
                                <div className=' border-[3px] border-gray-400 rounded-full w-[56px] p-[2px]'>
                                    <img
                                        src={profile}
                                        alt="profile"
                                        className='rounded-full w-[50px] h-[50px]'
                                        onError={(e) => e.target.src = 'path/to/fallback/image.png'} // Fallback image in case of error
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
