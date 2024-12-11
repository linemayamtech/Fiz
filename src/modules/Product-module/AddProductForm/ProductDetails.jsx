import React, { useState } from 'react';

const ProductDetails = ({ data, setData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      // Handle file inputs, store the selected files in state
      setData({
        ...data,
        [name]: files,
      });
    } else {
      // Handle regular text inputs
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Function to handle the "Change" action in the popup
  const handleUnitChange = () => {
    if (selectedValue) {
      setData({ ...data, measureUnit: selectedValue });
    }
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label htmlFor="productId" className="font-semibold text-[#667085]">
          Product ID
        </label>
        <input
          id="productId"
          name="productId"
          value={data.productId || ""}
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="productName" className="font-semibold text-[#667085]">
          Product Name
        </label>
        <input
          id="productName"
          name="productName"
          value={data.productName || ""}
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="HsnCodeProduct" className="font-semibold text-[#667085]">
          HSN Code of Product
        </label>
        <select
          id="HsnCodeProduct"
          name="HsnCodeProduct"
          value={data.HsnCodeProduct || ""}
          onChange={handleChange}
          required
          className="mt-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="6109">6109</option>
          <option value="8419">8419</option>
          <option value="8703">8703</option>
          <option value="9403">9403</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="CategoryOfProduct" className="font-semibold text-[#667085]">
          Category Of Product
        </label>
        <select
          id="CategoryOfProduct"
          name="CategoryOfProduct"
          value={data.CategoryOfProduct || ""}
          onChange={handleChange}
          required
          className="mt-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select an option</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Electricals">Electricals</option>
          <option value="Hardwares">Hardwares</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="measureUnit" className="font-semibold text-[#667085]">
          Default Unit Of Measure
        </label>
        <div className="flex w-full mt-2 space-x-2 relative">
          <input
            id="measureUnit"
            name="measureUnit"
            value={data.measureUnit || "Kg"}
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter unit of measure"
            readOnly
          />
          <button
            type="button"
            onClick={togglePopup}
            className="bg-[#0C92CC] px-4 py-2 text-white rounded-md"
          >
            Change
          </button>

          {showPopup && (
            <div className="absolute top-full left-0 mt-2 w-[250px] bg-white border border-gray-300 rounded-md shadow-lg p-4 z-10">
              <form>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="kg"
                    name="measureUnit"
                    value="Kg"
                    onChange={(e) => setSelectedValue(e.target.value)}
                  />
                  <label htmlFor="kg" className="text-sm text-gray-700">
                    Kg
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    id="litre"
                    name="measureUnit"
                    value="Litre"
                    onChange={(e) => setSelectedValue(e.target.value)}
                  />
                  <label htmlFor="litre" className="text-sm text-gray-700">
                    Litre
                  </label>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="radio"
                    id="metre"
                    name="measureUnit"
                    value="Metre"
                    onChange={(e) => setSelectedValue(e.target.value)}
                  />
                  <label htmlFor="metre" className="text-sm text-gray-700">
                    Metre
                  </label>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={handleUnitChange}
                  className="bg-[#0C92CC] px-4 py-2 text-white rounded-md"
                >
                  Change
                </button>
                <button
                  type="button"
                  onClick={togglePopup}
                  className="bg-gray-300 px-4 py-2 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Other form fields */}
      <div className="flex flex-col">
        <label htmlFor="indicativePriceRange" className="font-semibold text-[#667085]">
          Indicative Price Range
        </label>
        <div className="flex items-center gap-4 w-full mt-2">
          <input
            id="minPrice"
            name="minPrice"
            value={data.minPrice || ""}
            onChange={handleChange}
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <span className="text-[#667085]">-</span>
          <input
            id="maxPrice"
            name="maxPrice"
            value={data.maxPrice || ""}
            onChange={handleChange}
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="productImages" className="font-semibold text-[#667085]">
          Product Images
        </label>
        <input
          id="productImages"
          name="productImages"
          onChange={handleChange}
          type="file"
          multiple
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="productionCapacity" className="font-semibold text-[#667085]">
          Production Capacity
        </label>
        <div className="flex w-full mt-2 space-x-2">
          <input
            id="ProductionCapacity"
            name="ProductionCapacity"
            value={data.ProductionCapacity || ""}
            onChange={handleChange}
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <span className="bg-gray-200 text-gray-400 px-3 py-2 rounded-[5px]">
            {data.measureUnit}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="stockStatus" className="font-semibold text-[#667085]">
          Present Stock Status
        </label>
        <select
          id="stockStatus"
          name="stockStatus"
          value={data.stockStatus || ""}
          onChange={handleChange}
          required
          className="mt-2 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Present Stock Status</option>
          <option value="dispatched">Dispatched</option>
          <option value="loading">Loading</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="productLeadsTime" className="font-semibold text-[#667085]">
          Production Leads Time In Days
        </label>
        <input
          id="productLeadsTime"
          name="productLeadsTime"
          value={data.productLeadsTime || ""}
          onChange={handleChange}
          type="number"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
