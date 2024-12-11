import React from 'react';

const BuyerDetails = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Buyer ID */}
      <div className="flex flex-col">
        <label htmlFor="buyerId" className="font-semibold text-[#667085]">
          Buyer ID
        </label>
        <input
          id="buyerId"
          name="buyerId"
          value={data.buyerId || ""}
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Buyer Name */}
      <div className="flex flex-col">
        <label htmlFor="buyerName" className="font-semibold text-[#667085]">
          Buyer Name
        </label>
        <input
          id="buyerName"
          name="buyerName"
          value={data.buyerName || ""} 
          onChange={handleChange}
          type="text"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Buyer Email ID */}
      <div className="flex flex-col">
        <label htmlFor="buyerMailId" className="font-semibold text-[#667085]">
          Buyer Email ID
        </label>
        <input
          id="buyerMailId"
          name="buyerMailId"
          value={data.buyerMailId || ""} 
          onChange={handleChange}
          type="email"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Buyer Mobile Number */}
      <div className="flex flex-col">
        <label htmlFor="buyerMobileNumber" className="font-semibold text-[#667085]">
          Buyer Mobile Number
        </label>
        <input
          id="buyerMobileNumber"
          name="buyerMobileNumber"
          value={data.buyerMobileNumber || ""} 
          onChange={handleChange}
          type="tel"
          className="mt-2 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default BuyerDetails;
