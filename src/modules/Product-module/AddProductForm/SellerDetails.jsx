import React from 'react';

const SellerDetails = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Seller ID */}
      <div className="flex flex-col">
        <label htmlFor="sellerId" className="font-semibold text-[#667085]">
          Seller ID
        </label>
        <input
          id="sellerId"
          name="sellerId"
          value={data.sellerId || ""}
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Seller Name */}
      <div className="flex flex-col">
        <label htmlFor="sellerName" className="font-semibold text-[#667085]">
          Seller Name
        </label>
        <input
          id="sellerName"
          name="sellerName"
          value={data.sellerName || ""} 
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Seller Email ID */}
      <div className="flex flex-col">
        <label htmlFor="sellerMailId" className="font-semibold text-[#667085]">
          Seller Email ID
        </label>
        <input
          id="sellerMailId"
          name="sellerMailId"
          value={data.sellerMailId || ""}
          onChange={handleChange}
          type="email" 
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Seller Mobile Number */}
      <div className="flex flex-col">
        <label htmlFor="sellerMobileNumber" className="font-semibold text-[#667085]">
          Seller Mobile Number
        </label>
        <input
          id="sellerMobileNumber"
          name="sellerMobileNumber"
          value={data.sellerMobileNumber || ""}
          onChange={handleChange}
          type="tel" 
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default SellerDetails;
