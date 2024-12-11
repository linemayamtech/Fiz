import React from 'react'

const ProductDescription = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className='flex flex-col space-y-3'>
       <div className="flex flex-col">
                <label htmlFor="addedBy" className="font-semibold text-[#667085]">
                    Product Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="productDescription"
                    name="productDescription"
                    value={data.productDescription|| ""}
                    onChange={handleChange}
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md h-[200px]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="addedBy" className="font-semibold text-[#667085]">
                  Product Variants <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="productVariants"
                    name="productVariants"
                    value={data.productVariants|| ""}
                    onChange={handleChange}
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md h-[200px]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="addedBy" className="font-semibold text-[#667085]">
                    Product Certifications <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="productcertifications"
                    name="productcertifications"
                    value={data.productcertifications|| ""}
                    onChange={handleChange}
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md h-[200px]"
                />
            </div>
      
    </div>
  )
}

export default ProductDescription
