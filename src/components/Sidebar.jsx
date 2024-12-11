import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="px-5 py-10 pb-20 bg-[#171C26] flex flex-col fixed w-1/6 h-screen">
        {/* Profile Section */}
        <div className="flex gap-3 items-center mb-5">
          <div>
            <img
              src={require("../Assets/images/profile-pic.jpg")}
              alt="Profile"
              className="w-[70px] h-[70px] rounded-full"
            />
          </div>
          <div>
            <h1 className="text-white">Jack Thomason</h1>
            <p className="text-gray-400">Admin</p>
          </div>
        </div>

        {/* Search Section */}
        <div className="border border-[#979797] rounded-md flex px-5 items-center mb-5">
          <input
            className="w-full border-none outline-none rounded-md text-white py-2 bg-[#171C26]"
            type="search"
            placeholder="Search"
          />
          <span className="text-gray-300">
            <FaSearch />
          </span>
        </div>

        {/* Scrollable Menu Section */}
        <div className="flex flex-col gap-3 overflow-y-auto scrollbar-hide h-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="dashboard"
          >
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="websitesettings"
          >
            Website Settings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="buyer"
          >
            Buyer
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productsellers"
          >
            Product Sellers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="osp"
          >
            OSP
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="product-module/all-products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="productrfq"
          >
            Product RFQ & Quotes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="servicerfq"
          >
            Services RFQ & Quotes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="order"
          >
            Order & Subscription
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="tickets"
          >
            Tickets
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white px-5 py-2 bg-blood-gradient rounded-md font-medium"
                : "text-white px-5 py-2 hover:bg-gray-500 rounded-md font-medium"
            }
            to="settings"
          >
            Settings
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
