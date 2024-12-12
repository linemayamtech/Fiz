import React from 'react'

const ProductTableFilters = () => {
  return (
    <div>
    <div className="flex justify-center items-center w-full gap-[50px] p-3">
        <input
            type="text"
            placeholder="Id"
            value={idFilter}
            onChange={(e) => setIdFilter(e.target.value)}
            className="mt-2 border border-gray-300 rounded px-2 py-1 w-[100px]"
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
            <button onClick={toggleMenu1} className="border border-gray-300 px-2 py-1 rounded text-gray-400 w-[100px]">
                Menu
            </button>
            <div className={`flex flex-col bg-[#fff] p-3 rounded shadow-lg absolute top-[35px] w-[150px] ${isMenuOpen ? 'block' : 'hidden'}`}>
                <button onClick={() => setIsModalOpen2(true)} className="font-semibold py-1 text-left">Pick Column</button>
                <button className="font-semibold py-1 text-left">Export Products</button>
            </div>
        </div>
        <div className="mt-2 relative">
            <button onClick={toggleMenu2} className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[130px]">
                Action
            </button>
            <div className={`flex flex-col bg-[#fff] p-3 rounded shadow-lg text-[#000] absolute top-[35px] w-[250px] ${isMenuOpen2 ? 'block' : 'hidden'}`}>
                <button className="font-semibold py-1">Bulk Edit</button>
                <button className="font-semibold py-1">Delete</button>
                <button className="font-semibold py-1">Export Selected</button>
                <button className="font-semibold py-1">Assigned To</button>
                <button className="font-semibold py-1">Clear Assignment</button>
                <button className="font-semibold py-1">Email to Selected Contacts</button>
                <button className="font-semibold py-1">SMS to Selected Contacts</button>
                <button className="font-semibold py-1">Whatsapp Message to Selected Contacts</button>
                <button className="font-semibold py-1">Add Tags</button>
            </div>
        </div>
        <div className="mt-2 relative">
            <button
                onClick={toggleMenu3}
                className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[130px]"
            >
                Filter
            </button>
            <div className={`bg-[#fff] p-3 rounded shadow-lg text-[#000] absolute top-[30px] w-[480px] ${isMenuOpen3 ? "block" : "hidden"}`}>
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
        <button className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[160px]">Add Group</button>
        <button className="border border-gray-300 px-2 py-1 mt-2 rounded text-gray-400 w-[160px]">Last Update</button>
    </div>
</div>

  )
}

export default ProductTableFilters
