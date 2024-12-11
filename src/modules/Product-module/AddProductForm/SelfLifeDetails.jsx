import React from 'react';

const SelfLifeDetails = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label htmlFor="productLife" className="font-semibold text-[#667085]">
          Product Life
        </label>
        <div className="w-full flex mt-2 space-x-2">
          <input
            id="productLife"
            name="productLife"
            value={data.productLife || ""}
            onChange={handleChange}
            type="text"
            className="p-2 border border-gray-300 rounded-md flex-1"
          />
          <select
            id="expiryLife"
            name="expiryLife"
            value={data.expiryLife || ""}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-md flex-1"
          >
            <option value="">Select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelfLifeDetails;
