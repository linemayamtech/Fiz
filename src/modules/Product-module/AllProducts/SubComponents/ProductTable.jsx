import React from "react";

const ProductTable = ({
    idFilter,
    productIdFilter,
    companyNameFilter,
    statusFilter,
    currentPage,
    itemsPerPage,
}) => {
    // Fetch and filter data logic can be implemented here.
    // Placeholder example:
    const products = [
        { id: 1, productId: "P001", companyName: "Company A", status: "Active" },
        { id: 2, productId: "P002", companyName: "Company B", status: "Deactive" },
        // Add more sample products here...
    ];

    const filteredProducts = products.filter((product) => {
        return (
            (idFilter ? product.id.toString().includes(idFilter) : true) &&
            (productIdFilter ? product.productId.includes(productIdFilter) : true) &&
            (companyNameFilter ? product.companyName.includes(companyNameFilter) : true) &&
            (statusFilter ? product.status === statusFilter : true)
        );
    });

    return (
        <table className="min-w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Product ID</th>
                    <th className="border border-gray-300 px-4 py-2">Company Name</th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id}>
                        <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.productId}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.companyName}</td>
                        <td className="border border-gray-300 px-4 py-2">{product.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
