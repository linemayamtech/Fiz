// BulkImportModalRelated.js
import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const BulkImportModalRelated = ({ isOpen2, closeModal2, handleUploadSuccess }) => {
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
        handleUploadSuccess(); // Trigger the success modal
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
                    <h1 className="text-lg font-bold text-left text-gray-700">
                        Import Related Details
                    </h1>

                    <div className="flex-grow flex flex-col justify-center items-center border-dashed border-2 border-gray-400 p-6 mt-4">
                        <FaCloudUploadAlt className="text-5xl text-gray-500 mb-4" />
                        <p className="text-gray-600">Select a file to upload</p>
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="mt-4"
                        />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button
                            className="bg-[#FF0000] text-white px-6 py-2 rounded-lg"
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
