import React, { useState } from "react";
import { LuCloudDownload } from "react-icons/lu";
import { MdOutlinePlaylistAdd, MdOutlineDelete } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { FiMinusSquare } from "react-icons/fi";
import BulkImportModal from "./BulkImportModal";

const HSNSection = () => {
    const [hsnCodes, setHsnCodes] = useState([
        {
            code: "01", // Main HSN Code
            isExpanded: false,
            isAddingSubcategory: false, // Track subcategory add visibility
            subcategories: [
                {
                    code: "0101", // Subcategory HSN Code
                    isExpanded: false,
                    subcategories: [
                        {
                            code: "010101", // Nested Subcategory HSN Code
                            isExpanded: false,
                            subcategories: []
                        }
                    ]
                },
                {
                    code: "0102",
                    isExpanded: false,
                    subcategories: []
                }
            ]
        },
        {
            code: "02",
            isExpanded: false,
            isAddingSubcategory: false,
            subcategories: [
                {
                    code: "0201",
                    isExpanded: false,
                    subcategories: []
                }
            ]
        },
        {
            code: "03",
            isExpanded: false,
            isAddingSubcategory: false,
            subcategories: [
                {
                    code: "0301",
                    isExpanded: false,
                    subcategories: []
                }
            ]
        }
    ]);

    const [newSubcategory, setNewSubcategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleExpand = (node) => {
        node.isExpanded = !node.isExpanded;
        setHsnCodes([...hsnCodes]);
    };

    const toggleAddSubcategory = (hsnCode) => {
        hsnCode.isAddingSubcategory = !hsnCode.isAddingSubcategory;
        setHsnCodes([...hsnCodes]);
    };

    const handleAddSubcategory = (hsnCode) => {
        if (newSubcategory.trim() !== "") {
            hsnCode.subcategories.push({
                code: newSubcategory,
                isExpanded: false,
                subcategories: []
            });
            setHsnCodes([...hsnCodes]);
            setNewSubcategory("");
            hsnCode.isAddingSubcategory = false; // Close add subcategory input after adding
        }
    };

    const deleteHsnCode = (parentNode, nodeToDelete) => {
        if (parentNode) {
            parentNode.subcategories = parentNode.subcategories.filter(
                (subcategory) => subcategory !== nodeToDelete
            );
        } else {
            setHsnCodes(hsnCodes.filter((hsnCode) => hsnCode !== nodeToDelete));
        }
        setHsnCodes([...hsnCodes]);
    };

    const renderHsnCode = (node, parentNode = null) => {
        return (
            <div key={node.code} className="pl-[20px]">
                <div className="flex gap-[5px] items-center border-b border-gray-400 mt-2">
                    {node.isExpanded ? (
                        <FiMinusSquare
                            className="text-[#0F91D2] text-lg cursor-pointer"
                            onClick={() => toggleExpand(node)}
                        />
                    ) : (
                        <CgAddR
                            className="text-[#0F91D2] text-lg cursor-pointer"
                            onClick={() => toggleExpand(node)}
                        />
                    )}
                    <MdOutlinePlaylistAdd
                        className="text-gray-400 text-lg cursor-pointer"
                        onClick={() => toggleAddSubcategory(node)} // Toggle visibility of add subcategory input
                    />
                    {parentNode && (
                        <MdOutlineDelete
                            className="text-gray-400 text-lg cursor-pointer"
                            onClick={() => deleteHsnCode(parentNode, node)}
                        />
                    )}
                    <input type="checkbox" className="text-lg" />
                    <label>{node.code}</label>
                </div>

                {/* Show Add Subcategory input below each expanded HSN code when required */}
                {node.isExpanded && node.isAddingSubcategory && (
                    <div className="pl-[20px] flex gap-[10px] items-center pt-2">
                        <input
                            type="text"
                            value={newSubcategory}
                            onChange={(e) => setNewSubcategory(e.target.value)}
                            placeholder="Enter subcategory HSN code"
                            className="border border-gray-400 px-4 py-2 rounded-md outline-none"
                        />
                        <button
                            className="bg-[#0F91D2] text-white px-4 py-2 rounded-md"
                            onClick={() => handleAddSubcategory(node)} // Add subcategory under the selected HSN code
                        >
                            Add
                        </button>
                        <button
                            className="bg-gray-400 text-white px-4 py-2 rounded-md"
                            onClick={() => {
                                setNewSubcategory("");
                                node.isAddingSubcategory = false; // Close input
                                setHsnCodes([...hsnCodes]);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                )}

                {node.isExpanded && node.subcategories.length > 0 && (
                    <div className="pl-[20px]">
                        {node.subcategories.map((subcategory) => renderHsnCode(subcategory, node))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="shadow-custom hsn-section rounded-[15px] py-4 px-6">
            <div className="grid grid-cols-5 gap-6 px-[30px] pb-[20px] border-b border-gray-400">
                <div className="col-span-3 flex items-center border border-gray-400 rounded-[20px]">
                    <input
                        type="text"
                        placeholder="Search HSN codes..."
                        className="outline-none px-4 py-2 rounded-[20px] w-full"
                    />
                    <button className="bg-[#FF0000] text-white font-semibold px-8 py-2 rounded-[20px]">
                        Search
                    </button>
                </div>
                <div className="col-span-1">
                    <button className="w-full text-[#0F91D2] border border-[#0F91D2] rounded-[5px] px-4 py-2">
                        Clear
                    </button>
                </div>
                <div className="col-span-1">
                    <button
                        className="w-full text-[#002F79] bg-[#CDDCFA] py-2 rounded-[5px] flex gap-[3px] items-center justify-center"
                        onClick={() => setIsModalOpen(true)} // Open the modal when clicked
                    >
                        <LuCloudDownload />
                        Bulk Import
                    </button>
                </div>
            </div>

            <div className="px-[30px] py-[30px] hsn-selection">
                {hsnCodes.map((hsnCode) => renderHsnCode(hsnCode))}
            </div>
            <BulkImportModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        </div>
    );
};

export default HSNSection;
