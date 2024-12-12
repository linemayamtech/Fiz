import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrCloudUpload } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import LinkUnitModal from './LinkUnitModal';

const LinkUnit = () => {
    const [modalOpen, setModalOpen] = useState(false);

    // Dummy data for the table
    const [tableData, setTableData] = useState([
        { id: 1, hsn: '1001', defaultUnit: 'kg', otherUnits: ['ton', 'pcs', 'kg', 'gram'] },
        { id: 2, hsn: '2002', defaultUnit: 'pcs', otherUnits: ['box', 'packet', 'dozen'] },
        { id: 3, hsn: '3003', defaultUnit: 'liter', otherUnits: ['ml', 'gallon', 'bottle'] },
        { id: 4, hsn: '4004', defaultUnit: 'meter', otherUnits: ['cm', 'mm', 'yard'] },
    ]);

    const handleAddLinkUnit = (newData) => {
        setTableData((prev) => [...prev, { ...newData, id: prev.length + 1 }]);
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[20px] pt-[10px]'>
                    <h1 className='text-[#667085] font-semibold text-xl'>Link HSN Unit</h1>
                    <div
                        className='flex items-center gap-[5px] text-[#fff] bg-[#FF0000] px-3 py-1 rounded-[5px] cursor-pointer'
                        onClick={() => setModalOpen(true)}
                    >
                        <IoMdAdd className='text-[#fff] text-xl' />
                        <button>Add Link Unit</button>
                    </div>
                </div>
                <div className='flex justify-end gap-[20px] pe-[10px]'>
                    <div className='bg-[#CDDCFA] text-[#002F79] px-3 py-1 flex gap-[8px] items-center font-semibold rounded-[5px]'>
                        <IoCloudDownloadOutline />
                        <button>Import Link Unit</button>
                    </div>
                    <div className='bg-[#CDDCFA] text-[#002F79] px-3 py-1 flex gap-[8px] items-center font-semibold rounded-[5px]'>
                        <GrCloudUpload />
                        <button>Export Link Unit</button>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className='mt-5'>
                <table className='w-full border-collapse border border-gray-300 rounded-[10px] shadow-md overflow-hidden'>
                    <thead>
                        <tr className='bg-[#F2F2F2]'>
                            <th className='border border-gray-300 px-4 py-2 text-left'>HSN</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Default Unit</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Other Allowed Units</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={row.id} className={`hover:bg-gray-100`}>
                                <td className='border border-gray-300 px-4 py-2'>{row.hsn}</td>
                                <td className='border border-gray-300 px-4 py-2'>{row.defaultUnit}</td>
                                <td className='border border-gray-300 px-4 py-2'>{row.otherUnits.join(', ')}</td>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <button className='mr-2 text-[#33333] text-xl'>
                                        <FaRegEdit />
                                    </button>
                                    <button className='text-[#FF0000] text-xl'>
                                        <MdDeleteOutline />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* Modal Component */}
            {modalOpen && (
                <LinkUnitModal
                    onClose={() => setModalOpen(false)}
                    onSave={handleAddLinkUnit}
                />
            )}
        </div>
    );
};

export default LinkUnit;
