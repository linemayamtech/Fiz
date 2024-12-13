import React, { useState } from "react";

const PickColumnsModal = ({ isOpen3, closeModal3 }) => {
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleCheckboxChange = (column) => {
    if (selectedColumns.includes(column)) {
      setSelectedColumns(selectedColumns.filter((item) => item !== column));
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }
  };

  const columns = [
    "Product ID",
    "Product Name",
    "HSN Code",
    "Category of Product",
    "Default Unit of Measure",
  ];

  return (
    <>
      {isOpen3 && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-4/5 md:w-1/3 p-6 shadow-lg">
            {/* Modal Title */}
            <h2 className="text-lg font-semibold mb-4">Pick Columns</h2>
            
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search Columns..."
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            {/* Product Details */}
            <h3 className="text-md font-medium mb-2">Product Details</h3>
            
            {/* Grid Layout for Checkboxes */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {columns.map((column, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500"
                    checked={selectedColumns.includes(column)}
                    onChange={() => handleCheckboxChange(column)}
                  />
                  <span className="text-sm">{column}</span>
                </label>
              ))}
            </div>
            
            {/* Submit Button */}
            <button
              onClick={() => {
                console.log("Selected Columns: ", selectedColumns);
                closeModal3();
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PickColumnsModal;
