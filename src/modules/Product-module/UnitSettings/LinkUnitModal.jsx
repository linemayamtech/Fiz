import React, { useState } from 'react';

const LinkUnitModal = ({ onClose, onSave }) => {
    const [hsn, setHsn] = useState('');
    const [defaultUnit, setDefaultUnit] = useState('');
    const [otherUnits, setOtherUnits] = useState('');

    const handleSubmit = () => {
        const newLinkUnit = {
            hsn,
            defaultUnit,
            otherUnits: otherUnits.split(',').map((unit) => unit.trim()),
        };
        onSave(newLinkUnit);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg w-[400px]">
                <h2 className="text-lg font-semibold mb-4">Add Link Unit</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        HSN Code
                    </label>
                    <input
                        type="text"
                        value={hsn}
                        onChange={(e) => setHsn(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Default Unit
                    </label>
                    <input
                        type="text"
                        value={defaultUnit}
                        onChange={(e) => setDefaultUnit(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Other Allowed Units (comma-separated)
                    </label>
                    <input
                        type="text"
                        value={otherUnits}
                        onChange={(e) => setOtherUnits(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 text-white rounded text-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LinkUnitModal;
