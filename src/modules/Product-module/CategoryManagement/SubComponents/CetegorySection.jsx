import React, { useState } from "react";
import { LuCloudDownload } from "react-icons/lu";
import { MdOutlinePlaylistAdd, MdOutlineDelete } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { FiMinusSquare } from "react-icons/fi";
import BulkImportModal from "./BulkImportModal"; 
import SuccessModalCategory from "./SuccessModalCategory";// Import the Modal

const CategorySection = () => {
    const [categories, setCategories] = useState([
        {
            name: "Agriculture",
            isExpanded: false,
            isAddingSubcategory: false,
            subcategories: [
                {
                    name: "Vegetables",
                    isExpanded: false,
                    subcategories: []
                },
                {
                    name: "Crops",
                    isExpanded: false,
                    subcategories: [
                        {
                            name: "Rice",
                            isExpanded: false,
                            subcategories: []
                        },  
                        {
                            name: "Wheat",
                            isExpanded: false,
                            subcategories: []
                        },  
                    ]
                }
            ]
        },
        {
            name: "Technology",
            isExpanded: false,
            isAddingSubcategory: false,
            subcategories: [
                {
                    name: "Software",
                    isExpanded: false,
                    subcategories: []
                },
                {
                    name: "Hardware",
                    isExpanded: false,
                    subcategories: []
                }
            ]
        }
    ]);

    const [newSubcategory, setNewSubcategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const toggleExpand = (node) => {
        node.isExpanded = !node.isExpanded;
        setCategories([...categories]);
    };

    const toggleAddSubcategory = (category) => {
        category.isAddingSubcategory = !category.isAddingSubcategory;
        setCategories([...categories]);
    };

    const handleAddSubcategory = (category) => {
        if (newSubcategory.trim() !== "") {
            category.subcategories.push({
                name: newSubcategory,
                isExpanded: false,
                subcategories: []
            });
            setCategories([...categories]);
            setNewSubcategory("");
            category.isAddingSubcategory = false;
        }
    };

    const deleteCategory = (parentNode, nodeToDelete) => {
        if (parentNode) {
            parentNode.subcategories = parentNode.subcategories.filter(
                (subcategory) => subcategory !== nodeToDelete
            );
        } else {
            setCategories(categories.filter((category) => category !== nodeToDelete));
        }
        setCategories([...categories]);
    };

    const handleUploadSuccess = () => {
        setIsSuccessModalOpen(true); // Open the success modal when upload is successful
        setIsModalOpen(false); // Close the Bulk Import modal
      };

    const renderCategory = (node, parentNode = null) => {
        return (
            <div key={node.name} className="pl-[20px]">
                <div className="flex gap-[5px] items-center border-b border-gray-400 mt-2">
                    {node.isExpanded ? (
                        <FiMinusSquare
                            className="text-[#0F91D2] text-lg cursor-pointer"
                            onClick={() => toggleExpand(node)}
                        />
                    ) : (
                        node.subcategories.length > 0 && ( // Only show the plus icon if the category has subcategories
                            <CgAddR
                                className="text-[#0F91D2] text-lg cursor-pointer"
                                onClick={() => toggleExpand(node)}
                            />
                        )
                    )}
    
                    {/* Only show the add icon if the category has subcategories */}
                    {node.subcategories.length > 0 && (
                        <MdOutlinePlaylistAdd
                            className="text-gray-400 text-lg cursor-pointer"
                            onClick={() => toggleAddSubcategory(node)}
                        />
                    )}
    
                    {parentNode && (
                        <MdOutlineDelete
                            className="text-gray-400 text-lg cursor-pointer"
                            onClick={() => deleteCategory(parentNode, node)}
                        />
                    )}
                    <input type="checkbox" className="text-lg" />
                    <label>{node.name}</label>
                </div>
    
                {node.isExpanded && node.isAddingSubcategory && (
                    <div className="pl-[20px] flex gap-[10px] items-center pt-2">
                        <input
                            type="text"
                            value={newSubcategory}
                            onChange={(e) => setNewSubcategory(e.target.value)}
                            placeholder="Enter subcategory name"
                            className="border border-gray-400 px-4 py-2 rounded-md outline-none"
                        />
                        <button
                            className="bg-[#0F91D2] text-white px-4 py-2 rounded-md"
                            onClick={() => handleAddSubcategory(node)}
                        >
                            Add
                        </button>
                        <button
                            className="bg-gray-400 text-white px-4 py-2 rounded-md"
                            onClick={() => {
                                setNewSubcategory("");
                                node.isAddingSubcategory = false;
                                setCategories([...categories]);
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                )}
    
                {node.isExpanded && node.subcategories.length > 0 && (
                    <div className="pl-[20px]">
                        {node.subcategories.map((subcategory) => renderCategory(subcategory, node))}
                    </div>
                )}
            </div>
        );
    };
    

    return (
        <div className="shadow-custom category-section py-4 mb-8 px-6 rounded-[20px]">
            <div className="grid grid-cols-5 gap-6 px-[30px] pb-[20px] border-b border-gray-400">
                <div className="col-span-3 flex items-center border border-gray-400 rounded-[20px]">
                    <input
                        type="text"
                        placeholder="Search categories..."
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

            <div className="px-[30px] py-[30px] category-selection">
                {categories.map((category) => renderCategory(category))}
            </div>

            {/* Bulk Import Modal */}
            <BulkImportModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} handleUploadSuccess={handleUploadSuccess} />
            <SuccessModalCategory
            isOpen={isSuccessModalOpen}
            closeModal={() => setIsSuccessModalOpen(false)}
            message="Category details have been successfully imported!"
            />
        </div>
    );
};

export default CategorySection;
