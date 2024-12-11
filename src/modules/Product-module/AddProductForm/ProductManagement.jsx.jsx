import React from "react";

const ProjectManagement = ({ data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    

    return (
        <div className="grid grid-cols-2 gap-6">
            {/* Other Fields */}
            <div className="flex flex-col">
                <label htmlFor="addedBy" className="font-semibold text-[#667085]">
                    Product Added By
                </label>
                <input
                    id="addedBy"
                    name="addedBy"
                    value={data.addedBy || ""}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="addedDate" className="font-semibold text-[#667085]">
                    Product Added Date
                </label>
                <input
                    id="addedDate"
                    name="addedDate"
                    value={data.addedDate || ""}
                    onChange={handleChange}
                    type="date"
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            {/* Required Fields */}
            <div className="flex flex-col">
                <label htmlFor="lastModifiedDate" className="font-semibold text-[#667085]">
                    Last Modified Date <span className="text-red-500">*</span>
                </label>
                <input
                    id="lastModifiedDate"
                    name="lastModifiedDate"
                    value={data.lastModifiedDate || ""}
                    onChange={handleChange}
                    type="date"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastModifiedTime" className="font-semibold text-[#667085]">
                    Last Modified Time <span className="text-red-500">*</span>
                </label>
                <input
                    id="lastModifiedTime"
                    name="lastModifiedTime"
                    value={data.lastModifiedTime || ""}
                    onChange={handleChange}
                    type="time"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="productOwner" className="font-semibold text-[#667085]">
                    Product Owner <span className="text-red-500">*</span>
                </label>
                <input
                    id="productOwner"
                    name="productOwner"
                    value={data.productOwner || ""}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="nextStep" className="font-semibold text-[#667085]">
                    Next Step <span className="text-red-500">*</span>
                </label>
                <input
                    id="nextStep"
                    name="nextStep"
                    value={data.nextStep || ""}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="productRecomFor" className="font-semibold text-[#667085]">
                    Product Recommended For <span className="text-red-500">*</span>
                </label>
                <select
                    id="productRecomFor"
                    name="productRecomFor"
                    value={data.productRecomFor || ""}
                    onChange={handleChange}
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select an option</option>
                    <option value="Admin">Admin</option>
                    <option value="Sub Admin">Sub Admin</option>
                    <option value="Team Leader">Team Leader</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="tags" className="font-semibold text-[#667085]">
                    Tags <span className="text-red-500">*</span>
                </label>
                <input
                    id="tags"
                    name="tags"
                    value={data.tags || ""}
                    onChange={handleChange}
                    type="text"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md"
                />
            </div>
           
        </div>
    );
};

export default ProjectManagement;
