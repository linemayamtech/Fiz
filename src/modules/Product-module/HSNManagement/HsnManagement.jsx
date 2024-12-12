import React from 'react'
import HSNSection from './SubComponents/HSNSection'

const HsnManagement = () => {
  return (
    <div className="ps-[30px]">
      <h1 className="text-xl font-semibold py-2">HSN Management</h1>
      <div className="shadow-custom px-[100px] py-2 rounded-[15px]">
        <div className="text-center py-3">
          <h1 className="text-xl">
            <span className="text-[#FF0000]">ZeroMiddleMan</span> HSN Codes
          </h1>
          <p className="text-[#828282] pb-[20px]">
            ZeroMiddleMan unique classification of products and services allows you to search for companies worldwide by keyword or by code. Companies are classified by activity sector (2-digit code), industry (5 digits) or product/service (7 digits)
          </p>
        </div>
        <div className='pb-[20px]'> 
          {/* Use the Child Component Here */}
          <HSNSection />
        </div>
      </div>
    </div>
  )
}

export default HsnManagement
