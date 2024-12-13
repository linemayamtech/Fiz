import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { TbUserPentagon } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { TbPremiumRights } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import profile from "../Assets/images/profile-pic.jpg";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="px-5 py-10 pb-20 bg-[#171C26] flex flex-col gap-[10px] fixed w-1/6 h-screen">
        <div className="flex gap-3">
          <div>
            <img
              src={profile}
              alt="Profile"
              className="xl:w-[70px] xl:h-[70px] lg:w-[50px] lg:h-[50px] rounded-full"
            />
          </div>
          <div>
            <h1 className="text-white">Jack Thomas</h1>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>
        <div className="border border-[#979797] rounded-md flex px-5 items-center">
          <input
            className="w-full border-none outline-none rounded-md text-white py-2 bg-[#171C26]"
            type="search"
            placeholder="Search"
          />
          <span className="text-gray-300">
            <FaSearch />
          </span>
        </div>
        <div className="flex flex-col py-2 gap-2 overflow-y-scroll custom-scrollbar">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="dashboard"
          >
            <MdOutlineSpaceDashboard />
            <span className="text-white md:text-sm xl:text-lg">Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="websitesettings"
          >
            <FaGlobe />
            <span className="text-white md:text-sm xl:text-lg">Website Settings</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="buyer"
          >
            <LuShoppingCart />
            <span className="text-white md:text-sm xl:text-lg">Buyer</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productsellers"
          > 
          <BsShop />      
          <span className="text-white md:text-sm xl:text-lg">Product Sellers</span>
           
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="osp"
          >
            <TbUserPentagon />
            <span className="text-white md:text-sm xl:text-lg">OSP</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="product-module/all-products"
          >
            <AiFillProduct />
            <span className="text-white md:text-sm xl:text-lg">Products</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="services"
          >
            <GrServices />
            <span className="text-white md:text-sm xl:text-lg">Services</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productrfq"
          >
            <IoDocumentTextOutline />
            <span className="text-white md:text-sm xl:text-lg">Product RFQ & Quotes</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="servicerfq"
          >
            <HiOutlineDocumentSearch />
            <span className="text-white md:text-sm xl:text-lg">Services RFQ & Quotes</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="order"
          >
            <TbPremiumRights />
            <span>Order & Subscription</span>
            
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="tickets"
          >
            <IoTicketSharp />
            <span className="text-white md:text-sm xl:text-lg">Tickets</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white flex gap-2 items-center px-2 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white flex gap-2 items-center px-2 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="settings"
          >
            <CiSettings />
            <span className="text-white md:text-sm xl:text-lg">Settings</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
