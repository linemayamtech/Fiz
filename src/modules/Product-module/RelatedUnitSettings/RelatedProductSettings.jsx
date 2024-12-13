import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrCloudUpload } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import RelatedHSNModal from './RelatedUnitModal'; 
import BulkImportModalRelated from './BulkUploadModalRelated';// Import the Modal component


const RelatedProductSettings = () => {
  const [modalOpen, setModalOpen] = useState(false);
   const [isModalOpen2, setIsModalOpen2] = useState(false);

  // Dummy data for the table
  const [tableData, setTableData] = useState([
    { id: 1, hsn: '1001', relatedHSN: ['1002', '1003', '1004'] },
    { id: 2, hsn: '2002', relatedHSN: ['2003', '2004', '2005'] },
    { id: 3, hsn: '3003', relatedHSN: ['3001', '3002', '3004'] },
    { id: 4, hsn: '4004', relatedHSN: ['4001', '4002', '4003'] },
  ]);

  const handleAddLinkUnit = (newData) => {
    setTableData((prev) => [...prev, { ...newData, id: prev.length + 1 }]);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[20px] pt-[10px]">
          <h1 className="text-[#667085] font-semibold text-xl">Related Product Unit</h1>
          <div
            className="flex items-center gap-[5px] text-[#fff] bg-[#FF0000] px-3 py-1 rounded-[5px] cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <IoMdAdd className="text-[#fff] text-xl" />
            <button>Add Related Products</button>
          </div>
        </div>
        <div className="flex justify-end gap-[20px] pe-[10px]">
          <div className="bg-[#CDDCFA] text-[#002F79] px-3 py-1 flex gap-[8px] items-center font-semibold rounded-[5px]">
            <IoCloudDownloadOutline />
            <button onClick={()=>setIsModalOpen2(true)}>Import Link Unit</button>
          </div>
          <div className="bg-[#CDDCFA] text-[#002F79] px-3 py-1 flex gap-[8px] items-center font-semibold rounded-[5px]">
            <GrCloudUpload />
            <button>Export Link Unit</button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-5">
        <table className="w-full border-collapse border border-gray-300 rounded-[10px] shadow-md overflow-hidden">
          <thead>
            <tr className="bg-[#F2F2F2]">
              <th className="border border-gray-300 px-4 py-2 text-left">HSN</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Related HSN</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{row.hsn}</td>
                <td className="border border-gray-300 px-4 py-2">{row.relatedHSN.join(', ')}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button className="mr-2 text-[#33333] text-xl">
                    <FaRegEdit />
                  </button>
                  <button className="text-[#FF0000] text-xl">
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Render the Modal */}
      {modalOpen && (
        <RelatedHSNModal
          onClose={() => setModalOpen(false)} // Corrected the prop name to match the one used in the modal
          onSave={handleAddLinkUnit}
        />
      )}

    <BulkImportModalRelated isOpen2={isModalOpen2} closeModal2={() => setIsModalOpen2(false)} />
    </div>
  );
};

export default RelatedProductSettings;
