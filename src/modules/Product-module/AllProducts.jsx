import React, { useState } from "react";
import { LuCloudDownload } from "react-icons/lu";
import { Link } from "react-router-dom";


const AllProducts = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [idFilter, setIdFilter] = useState("");
    const [productIdFilter, setProductIdFilter] = useState("");
    const [companyNameFilter, setCompanyNameFilter] = useState("");
    const [emailFilter, setEmailFilter] = useState("");
    const [phoneNumberFilter, setPhoneNumberFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    

    // Dummy data for the table
    const dummyData = Array.from({ length: 30 }, (_, index) => ({
        id: index + 1,
        productId: `P${1000 + index}`,
        companyName: `Company ${index + 1}`,
        email: `company${index + 1}@example.com`,
        phoneNumber: `+123456789${index}`,
        ratings: Math.round(Math.random() * 5),
        status: index % 2 === 0 ? "Active" : "Deactive",
    }));

    const [filteredProducts, setFilteredProducts] = useState(dummyData);
    const [selectedFilter, setSelectedFilter] = useState(""); // To store the selected filter type
    const [filterValue, setFilterValue] = useState("");

    // Apply filters
    const filteredData = dummyData.filter((item) => {
        const matchesId = idFilter ? item.id.toString().includes(idFilter) : true;
        const matchesProductId = productIdFilter
            ? item.productId.toLowerCase().includes(productIdFilter.toLowerCase())
            : true;
        const matchesCompanyName = companyNameFilter
            ? item.companyName.toLowerCase().includes(companyNameFilter.toLowerCase())
            : true;
        const matchesEmail = emailFilter
            ? item.email.toLowerCase().includes(emailFilter.toLowerCase())
            : true;
        const matchesPhoneNumber = phoneNumberFilter
            ? item.phoneNumber.includes(phoneNumberFilter)
            : true;
        const matchesStatus = statusFilter ? item.status === statusFilter : true;
        return (
            matchesId &&
            matchesProductId &&
            matchesCompanyName &&
            matchesEmail &&
            matchesPhoneNumber &&
            matchesStatus
        );
    });

    // Pagination logic
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Select all rows
    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedRows(currentItems.map((row) => row.id));
        } else {
            setSelectedRows([]);
        }
    };

    // Select a specific row
    const handleRowSelect = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    // Render star ratings
    const renderStars = (rating) => {
        const filledStars = "★".repeat(rating);
        const emptyStars = "☆".repeat(5 - rating);
        return (
            <span className="text-yellow-500">
                {filledStars}
                <span className="text-gray-400">{emptyStars}</span>
            </span>
        );
    };

    // Page change logic
    const handlePageChange = (direction) => {
        if (direction === "next" && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageNumberClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const toggleMenu1 = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleMenu2 = () => {
        setIsMenuOpen2(!isMenuOpen2);
    };

    const toggleMenu3 = () => {
        setIsMenuOpen3(!isMenuOpen3);
    };

    const handleItemsPerPageChange = (e) => {
        const value = e.target.value;
        if (value === "" || /^[0-9\b]+$/.test(value)) {
            const numberValue = Number(value);
            if (numberValue > 0) {
                setItemsPerPage(numberValue);
                setCurrentPage(1);
            }
        }
    };

    // Handle filter type change
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    // Handle filter value change
    const handleValueChange = (e) => {
        setFilterValue(e.target.value);
    };

    // Apply filter logic
    const handleApplyFilter = () => {
        if (!selectedFilter || !filterValue) {
            alert("Please select a filter type and enter a value.");
            return;
        }

        // Filter products based on the selected filter and input value
        const filtered = dummyData.filter((product) => {
            const productValue = product[selectedFilter]?.toString().toLowerCase();
            return productValue?.includes(filterValue.toLowerCase());
        });

        setFilteredProducts(filtered);
        setIsMenuOpen3(false); // Close the dropdown after applying the filter
    };

    // Clear the filter
    const handleClearFilter = () => {
        setFilteredProducts(dummyData);
        setSelectedFilter("");
        setFilterValue("");
    };

    return (
        <div className="p-4">
            {/* Header Section */}
            <div className="ps-[30px] flex justify-between mb-4">
                <h1 className="text-2xl font-semibold text-[#667085]">All Product List</h1>
                <div className="flex items-center gap-[20px]">
                    <div className="flex gap-[5px] bg-[#4e5d789f] text-[#002F79] items-center px-2 py-1 rounded-[5px] font-semibold">
                        <LuCloudDownload />
                        <button>Bulk Import</button>
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

            {/* Table Section */}
            <div className="overflow-x-auto border border-gray-300 rounded-[10px]">
                <div className="flex justify-center items-center w-full gap-[70px] p-3">
                    <input
                        type="text"
                        placeholder="Id"
                        value={idFilter}
                        onChange={(e) => setIdFilter(e.target.value)}
                        className=" mt-2 border border-gray-300 rounded px-2 py-1 w-[100px]"
                    />
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={companyNameFilter}
                        onChange={(e) => setCompanyNameFilter(e.target.value)}
                        className="w-[160px] mt-2 border border-gray-300 rounded px-2 py-1"
                    />
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-[160px] mt-2 border border-gray-300 rounded px-2 py-1 outline-none"
                    >
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Deactive">Deactive</option>
                    </select>
                    <div className="mt-2 relative">
                        <a href="#" onClick={toggleMenu1} className="border border-gray-300 px-2 py-1  rounded text-gray-400 w-[100px] ">Menu</a>
                        <div className={`flex flex-col bg-[#fff] p-3 rounded shadow-lg absolute top-[30px] w-[150px] ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <a href="" className="font-semibold py-1">Pick Column</a>
                            <a href="" className="font-semibold py-1">Export Products</a>
                        </div>
                    </div>
                    <div className="mt-2 relative">
                        <a href="#" onClick={toggleMenu2} className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[130px]">
                            Action
                            <div className={`flex flex-col bg-[#fff] p-3 rounded shadow-lg text-[#000] absolute top-[30px] w-[250px] ${isMenuOpen2 ? 'block' : 'hidden'}`}>
                                <a href="" className="font-semibold py-1">Bulk Edit</a>
                                <a href="" className="font-semibold py-1">Delete</a>
                                <a href="" className="font-semibold py-1">Export Selected</a>
                                <a href="" className="font-semibold py-1">Assigned To</a>
                                <a href="" className="font-semibold py-1">Clear Assignment</a>
                                <a href="" className="font-semibold py-1">Email to Selected Contacts</a>
                                <a href="" className="font-semibold py-1">SMS to selected Contacts</a>
                                <a href="" className="font-semibold py-1">Whatsapp Message to selected Contacts</a>
                                <a href="" className="font-semibold py-1">Add Tags</a>
                            </div>
                        </a>
                    </div>
                    <div className="mt-2 relative">
                        <a
                            href="#"
                            onClick={toggleMenu3}
                            className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[130px]"
                        >
                            Filter
                        </a>
                        <div
                            className={`bg-[#fff] p-3 rounded shadow-lg text-[#000] absolute top-[30px] w-[480px] ${isMenuOpen3 ? "block" : "hidden"
                                }`}
                        >
                            <div className="flex gap-[20px] py-4 px-3 border-b border-gray-400 justify-center">
                                <select
                                    className="outline-none border border-gray-400 rounded"
                                    value={selectedFilter}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Select</option>
                                    <option value="id">Id</option>
                                    <option value="productId">Product Id</option>
                                    <option value="companyName">Company Name</option>
                                    <option value="email">Email</option>
                                    <option value="phoneNumber">Phone Number</option>
                                    <option value="status">Status</option>
                                </select>
                                <span className="border border-gray-400 rounded text-gray-400 font-semibold px-2 py-1">
                                    Equals
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter value here"
                                    className="border border-gray-400 rounded ps-1"
                                    value={filterValue}
                                    onChange={handleValueChange}
                                />
                            </div>
                            <div className="pt-2 flex justify-end">
                                <button
                                    onClick={handleApplyFilter}
                                    className="bg-[#0C92CC] px-2 py-1 text-[#fff] font-semibold mr-2"
                                >
                                    Apply Filter
                                </button>
                                <button
                                    onClick={handleClearFilter}
                                    className="bg-gray-400 px-2 py-1 text-[#fff] font-semibold"
                                >
                                    Clear Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    <a href="" className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[160px]">Add Group</a>
                        <a href="" className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[160px]">Last Update</a>
                    </div>
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    ID
                                    <input
                                        type="text"
                                        placeholder="Id"
                                        value={idFilter}
                                        onChange={(e) => setIdFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Product ID
                                    <input
                                        type="text"
                                        placeholder="Product Id"
                                        value={productIdFilter}
                                        onChange={(e) => setProductIdFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Company Name
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        value={companyNameFilter}
                                        onChange={(e) => setCompanyNameFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Email
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={emailFilter}
                                        onChange={(e) => setEmailFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    />
                                </th>
                                <th className="border border-gray-300 px-4 py-2">
                                    Phone Number
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        value={phoneNumberFilter}
                                        onChange={(e) => setPhoneNumberFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    />
                                </th>

                                <th className="border border-gray-300 px-4 py-2">
                                    Status
                                    <select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        className="w-full mt-2 border border-gray-300 rounded px-2 py-1"
                                    >
                                        <option value="">All</option>
                                        <option value="Active">Active</option>
                                        <option value="Deactive">Deactive</option>
                                    </select>
                                </th>
                                <th className="border border-gray-300 px-4 py-2">Ratings</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={() => handleRowSelect(row.id)}
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{row.id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{row.productId}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link to={'/product-module/view-product'}>{row.companyName}</Link>
                                        
                                        </td>
                                    <td className="border border-gray-300 px-4 py-2">{row.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{row.phoneNumber}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {row.status}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {renderStars(row.ratings)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-4">
                    {[...Array(totalPages).keys()].map((page) => (
                        <button
                            key={page + 1}
                            onClick={() => handlePageNumberClick(page + 1)}
                            className={`px-4 py-2 border rounded ${page + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
                                }`}
                        >
                            {page + 1}
                        </button>
                    ))}
                </div>
            </div>
            );
};

            export default AllProducts;
