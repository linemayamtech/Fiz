import React from 'react';

const CreateUnitModal = ({ isOpen, onClose, unit, unitDescription, setUnit, setUnitDescription, handleAddUnit }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-lg font-semibold mb-4">Add Unit</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleAddUnit();
                    }}
                >
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Unit</label>
                        <input
                            type="text"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="border rounded w-full px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Unit Description</label>
                        <textarea
                            value={unitDescription}
                            onChange={(e) => setUnitDescription(e.target.value)}
                            className="border rounded w-full px-3 py-2"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#FF0000] text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUnitModal;
