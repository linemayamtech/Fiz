// SuccessModal.js
import React from 'react';

const SuccessModalCategory = ({ isOpen, closeModal, message }) => {
    return (
        isOpen && (
            <div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                onClick={closeModal}
            >
                <div
                    className="bg-white w-[400px] p-6 rounded-lg flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1 className="text-lg font-bold text-gray-700">Success</h1>
                    <p className="mt-2 text-gray-600">{message}</p>
                    <div className="mt-4 flex justify-center">
                        <button
                            className="bg-[#0F91D2] text-white px-6 py-2 rounded-lg"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default SuccessModalCategory;
