import React, { useState } from 'react';

const RelatedHSNModal = ({ onClose, onSave }) => {
  const [hsn, setHsn] = useState('');
  const [relatedHSNs, setRelatedHSNs] = useState('');

  const handleSubmit = () => {
    const newRelatedHSNs = {
      hsn,
      relatedHSNs: relatedHSNs.split(',').map((hsn) => hsn.trim()),
    };
    onSave(newRelatedHSNs);
    onClose();  // Close modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Add Related HSN</h2>

        {/* HSN Field */}
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

        {/* Related HSN Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Related HSN Codes (comma-separated)
          </label>
          <input
            type="text"
            value={relatedHSNs}
            onChange={(e) => setRelatedHSNs(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose} // Close the modal
            className="px-4 py-2 bg-gray-300 rounded text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#FF0000] text-white rounded text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedHSNModal;
