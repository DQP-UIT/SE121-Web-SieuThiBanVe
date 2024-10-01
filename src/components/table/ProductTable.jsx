import React from "react";

const ProductTable = ({ product }) => {
    return (
        <div className="relative w-2/3 shadow-md">
            <div className="pb-5">
                <span className="font-medium text-2xl">Thông tin bản vẽ</span>
            </div>
            <div className="relative flex z-10 overflow-x-auto shadow-md">
                <table className="w-full min-w-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/uil_layer-group.svg" alt="Product ID" className="object-fill" />
                            </th>
                            <th scope="row" className="font-medium text-gray-900 whitespace-nowrap bg-gray-300">
                                Số tầng
                            </th>
                            <td className="bg-gray-300 text-gray-900">
                                {product.floors}
                            </td>
                            <th className="w-5"></th>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/la_bed.svg" alt="Product Name" className="object-fill" />
                            </th>
                            <td className="py-2 bg-gray-300 text-gray-900 font-medium">
                                Phòng ngủ
                            </td>
                            <td className="py-2 bg-gray-300 text-gray-900">
                                {product.bedrooms}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-white">
                                <img src="src/assets/mynaui_rectangle-vertical.svg" alt="Category" className="object-fill" />
                            </th>
                            <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap bg-white">
                                Diện tích
                            </th>
                            <td className="py-2 text-gray-900 bg-white">
                                {product.area}
                            </td>
                            <th className="w-5"></th>
                            <th scope="row" className="w-fit px-4 py-2 bg-white">
                                <img src="src/assets/hugeicons_web-design-01.svg" alt="Price" className="object-fill" />
                            </th>
                            <td className="py-2 bg-white text-gray-900 font-medium">
                                Mặt tiền
                            </td>
                            <td className="py-2 text-gray-900 bg-white">
                                {product.frontage}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/hugeicons_square.svg" alt="Stock" className="object-fill" />
                            </th>
                            <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-300">
                                Chiều dài
                            </th>
                            <td className="py-2 text-gray-900 bg-gray-300">
                                {product.length}
                            </td>
                            <th className="w-5"></th>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/ph_house-line.svg" alt="Supplier" className="object-fill" />
                            </th>
                            <td className="py-2 bg-gray-300 text-gray-900 font-medium">
                                Loại hình
                            </td>
                            <td className="py-2 text-gray-900 bg-gray-300">
                                {product.type}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-white">
                                <img src="src/assets/hugeicons_web-design-02.svg" alt="SKU" className="object-fill" />
                            </th>
                            <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap bg-white">
                                Phong cách
                            </th>
                            <td className="py-2 text-gray-900 bg-white">
                                {product.style}
                            </td>
                            <th className="w-5"></th>
                            <th scope="row" className="w-fit px-4 py-2 bg-white">
                                <img src="src/assets/formkit_dollar.svg" alt="Weight" className="object-fill" />
                            </th>
                            <td className="py-2 bg-white text-gray-900 font-medium">
                                Chi phí
                            </td>
                            <td className="py-2 text-gray-900 bg-white">
                                {product.price}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/ph_info.svg" alt="Dimensions" className="object-fill" />
                            </th>
                            <th scope="row" className="py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-300">
                                Thiết kế bởi
                            </th>
                            <td className="py-2 text-gray-900 bg-gray-300">
                                {product.companyName}
                            </td>
                            <th className="w-5"></th>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/mdi_pound.svg" alt="Color" className="object-fill" />
                            </th>
                            <td className="py-2 bg-gray-300 text-gray-900 font-medium">
                                Mã sản phẩm
                            </td>
                            <td className="py-2 text-gray-900 bg-gray-300">
                                {product._id}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;