import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const ProductModule = () => {
    return (
        <div>
            <div className='p-[30px] border-b border-gray-200 w-full'>
                <h1 className='text-2xl font-semibold text-[#667085]'>Products</h1>
            </div>
            <div>
                <div className='flex gap-[40px] py-[20px] ps-[30px]'>
                    <NavLink
                        to="/product-module/all-products"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray', // Active text color
                            textDecoration: isActive ? 'underline' : 'none', // Active underline
                            textDecorationColor: isActive ? '#FF0000' : 'none', // Active underline color
                        })}
                    >
                        All Product List
                    </NavLink>
                    <NavLink
                        to="/product-module/add-products"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray',
                            textDecoration: isActive ? 'underline' : 'none',
                            textDecorationColor: isActive ? '#FF0000' : 'none',
                        })}
                    >
                        Add Product
                    </NavLink>
                    <NavLink
                        to="/product-module/category-management"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray',
                            textDecoration: isActive ? 'underline' : 'none',
                            textDecorationColor: isActive ? '#FF0000' : 'none',
                        })}
                    >
                        Category Management
                    </NavLink>
                    <NavLink
                        to="/product-module/hsn-management"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray',
                            textDecoration: isActive ? 'underline' : 'none',
                            textDecorationColor: isActive ? '#FF0000' : 'none',
                        })}
                    >
                        HSN Management
                    </NavLink>
                    <NavLink
                        to="/product-module/unit-settings"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray',
                            textDecoration: isActive ? 'underline' : 'none',
                            textDecorationColor: isActive ? '#FF0000' : 'none',
                        })}
                    >
                        Unit Settings
                    </NavLink>
                    <NavLink
                        to="/product-module/related-product-settings"
                        className="font-bold text-gray-500"
                        style={({ isActive }) => ({
                            color: isActive ? '#FF0000' : 'gray',
                            textDecoration: isActive ? 'underline' : 'none',
                            textDecorationColor: isActive ? '#FF0000' : 'none',
                        })}
                    >
                        Related Product Settings
                    </NavLink>
                </div>
                <div className='py-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default ProductModule;
