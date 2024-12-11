import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrCloudUpload } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import CreateUnitModal from './CreateUnitModal';

const CreateUnit = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [unit, setUnit] = useState('');
    const [unitDescription, setUnitDescription] = useState('');

    const handleAddUnit = () => {
        console.log('Unit:', unit, 'Description:', unitDescription);
        setIsModalOpen(false); // Close modal after form submission
        setUnit('');
        setUnitDescription('');
    };

    // Dummy data for the table
    const tableData = [
        { id: 1, unit: 'Kg', unitDescription: 'Kilogram' },
        { id: 2, unit: 'Pcs', unitDescription: 'Pieces' },
        { id: 3, unit: 'ml', unitDescription: 'Milli litre' },
    ];

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[20px] pt-[10px]'>
                    <h1 className='text-[#667085] font-semibold text-xl'>Create Unit</h1>
                    <div
                        className='flex items-center gap-[5px] text-[#fff] bg-[#FF0000] px-3 py-1 rounded-[5px] cursor-pointer'
                        onClick={() => setIsModalOpen(true)}
                    >
                        <IoMdAdd className='text-[#fff] text-xl' />
                        <button>Add Unit</button>
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
                            <th className='border border-gray-300 px-4 py-2 text-left'>Unit</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Unit Description</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`hover:bg-gray-100 ${index === tableData.length - 1 ? 'last:rounded-b-[10px]' : ''
                                    }`}
                            >
                                <td className='border border-gray-300 px-4 py-2'>{row.unit}</td>
                                <td className='border border-gray-300 px-4 py-2'>{row.unitDescription}</td>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <button className=' mr-2 text-[#33333] text-xl'><FaRegEdit /></button>
                                    <button className='text-[#FF0000] text-xl'><MdDeleteOutline /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal Component */}
            <CreateUnitModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                unit={unit}
                unitDescription={unitDescription}
                setUnit={setUnit}
                setUnitDescription={setUnitDescription}
                handleAddUnit={handleAddUnit}
            />
        </div>
    );
};

export default CreateUnit;
