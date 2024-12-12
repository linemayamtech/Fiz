import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './ProductModule.css'; // Import external CSS file for transitions

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
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
                    >
                        All Product List
                    </NavLink>
                    <NavLink
                        to="/product-module/add-products"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
                    >
                        Add Product
                    </NavLink>
                    <NavLink
                        to="/product-module/category-management"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
                    >
                        Category Management
                    </NavLink>
                    <NavLink
                        to="/product-module/hsn-management"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
                    >
                        HSN Management
                    </NavLink>
                    <NavLink
                        to="/product-module/unit-settings"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
                    >
                        Unit Settings
                    </NavLink>
                    <NavLink
                        to="/product-module/related-product-settings"
                        className={({ isActive }) =>
                            isActive
                                ? 'nav-link active-link text-sm'
                                : 'nav-link text-sm'
                        }
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
};

export default ProductModule;
