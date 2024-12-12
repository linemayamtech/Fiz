// 2. AllProductsHeader.jsx
import React from 'react';
import { LuCloudDownload } from "react-icons/lu";

const AllProductsHeader = ({ 
    currentPage, 
    totalPages, 
    handlePageChange, 
    itemsPerPage, 
    handleItemsPerPageChange,
    setIsModalOpen 
}) => {
    return (
        <div className="ps-[30px] flex justify-between mb-4">
            <h1 className="text-2xl font-semibold text-[#667085]">All Product List</h1>
            <div className="flex items-center gap-[20px]">
                <div className="flex gap-[5px] bg-[#CDDCFA] text-[#002F79] items-center px-3 py-1 rounded-[5px] font-semibold">
                    <LuCloudDownload />
                    <button onClick={() => setIsModalOpen(true)}>Bulk Import</button>
                </div>
                <div className="flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 mr-2"
                        onClick={() => handlePageChange("prev")}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2">Page {currentPage}</span>
                    <button
                        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 ml-2"
                        onClick={() => handlePageChange("next")}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
                <div className="flex items-center">
                    <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                    <input
                        id="itemsPerPage"
                        type="number"
                        min="1"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                        className="w-[60px] border border-gray-300 rounded px-2 py-1"
                    />
                </div>
            </div>
        </div>
    );
};

export default AllProductsHeader;           