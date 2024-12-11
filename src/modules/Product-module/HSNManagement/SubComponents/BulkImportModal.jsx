import React, { useState } from "react";

const BulkImportModal = ({ isOpen, closeModal }) => {
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
        closeModal();
    };

    return (
        isOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
                <div
                    className="bg-white p-6 rounded-lg w-11/12 sm:w-96"
                    onClick={(e) => e.stopPropagation()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <h2 className="text-xl font-semibold text-center">Bulk Import</h2>
                    <div className="mt-4">
                        <div className="border-dashed border-2 border-gray-400 p-6 text-center">
                            <p>Drag and drop your files here, or</p>
                            <input
                                type="file"
                                multiple
                                onChange={handleFileChange}
                                className="mt-2 border border-gray-300 rounded-md py-2 px-4"
                            />
                            {selectedFiles.length > 0 && (
                                <div className="mt-4">
                                    <ul>
                                        {Array.from(selectedFiles).map((file, index) => (
                                            <li key={index} className="text-sm text-gray-600">{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-4">
                        <button
                            className="bg-gray-300 px-4 py-2 rounded-lg"
                            onClick={closeModal}
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

export default BulkImportModal;
