import React from "react";

const HeaderAndFilters = ({
    idFilter,
    setIdFilter,
    productIdFilter,
    setProductIdFilter,
    companyNameFilter,
    setCompanyNameFilter,
    statusFilter,
    setStatusFilter,
    currentPage,
    totalPages,
    itemsPerPage,
    setItemsPerPage,
    handlePageChange,
}) => {
    return (
        <div className="ps-[30px] flex justify-between mb-4">
            <h1 className="text-2xl font-semibold text-[#667085]">All Product List</h1>
            <div className="flex items-center gap-[20px]">
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
                <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                <input
                    id="itemsPerPage"
                    type="number"
                    min="1"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="w-[60px] border border-gray-300 rounded px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Filter by ID"
                    value={idFilter}
                    onChange={(e) => setIdFilter(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Filter by Product ID"
                    value={productIdFilter}
                    onChange={(e) => setProductIdFilter(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Filter by Company Name"
                    value={companyNameFilter}
                    onChange={(e) => setCompanyNameFilter(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Deactive">Deactive</option>
                </select>
            </div>
        </div>
    );
};

export default HeaderAndFilters;
