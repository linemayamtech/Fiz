import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa"; // Add this icon

const BulkImportModalRelated = ({ isOpen2, closeModal2 }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        setSelectedFiles(e.target.files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const files = e.dataTransfer.files;
        setSelectedFiles(files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleUpload = () => {
        // Handle file upload logic here (e.g., sending files to the server)
        console.log("Files uploaded:", selectedFiles);
        closeModal2();
    };

    return (
        isOpen2 && (
            <div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeModal2}
            >
                <div
                    className="bg-white w-[500px] h-[400px] p-6 rounded-lg flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    {/* Modal Header */}
                    <h1 className="text-lg font-bold text-left text-gray-700">
                        Import HSN Details
                    </h1>

                    {/* Drag and Drop Zone */}
                    <div className="flex-grow flex flex-col justify-center items-center border-dashed border-2 border-gray-400 p-6 mt-4">
                        <FaCloudUploadAlt className="text-5xl text-gray-500 mb-4" />
                        <p className="text-gray-600">Select a file or drag and drop here</p>
                        <span className="text-sm text-gray-400 mt-1">
                            File size should not exceed 10 MB
                        </span>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            multiple
                            id="fileInput"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        {/* Select File Button */}
                        <label
                            htmlFor="fileInput"
                            className="mt-4 bg-[#0F91D2] text-white px-6 py-2 rounded-lg cursor-pointer"
                        >
                            Select File
                        </label>
                    </div>

                    {/* Selected Files List */}
                    {selectedFiles.length > 0 && (
                        <div className="mt-4">
                            <ul>
                                {Array.from(selectedFiles).map((file, index) => (
                                    <li key={index} className="text-sm text-gray-600">
                                        {file.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Modal Actions */}
                    <div className="mt-4 flex justify-end gap-4">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                            onClick={closeModal2}
                        >
                            Close
                        </button>
                        <button
                            className="bg-[#0F91D2] text-white px-6 py-2 rounded-lg"
                            onClick={handleUpload}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default BulkImportModalRelated;
