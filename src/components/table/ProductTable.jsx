import React from "react";

const ProductTable = ({ product }) => {
  return (
    <div className="w-2/3 shadow-md">
      <div className="pb-5">
        <span className="text-2xl font-semibold">Thông số bản vẽ</span>
      </div>
      <div className="relative z-10 flex overflow-x-auto shadow-md">
        <table className="w-full text-left text-sm text-gray-500">
          <tbody>
            <tr>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img
                  src="/uil_layer-group.svg"
                  alt="Số tầng"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Số tầng</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.floor}
              </td>
              <td className="w-8"></td>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img src="/la_bed.svg" alt="Phòng ngủ" className="h-6 w-6" />
                <span className="font-medium text-gray-900">Phòng ngủ</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.numberBedRoom}
              </td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 bg-white px-4 py-2">
                <img
                  src="/mynaui_rectangle-vertical.svg"
                  alt="Diện tích"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Diện tích</span>
              </td>
              <td className="bg-white px-4 py-2 text-gray-900">
                {product.square}
              </td>
              <td className="w-8"></td>
              <td className="flex items-center gap-2 bg-white px-4 py-2">
                <img
                  src="/hugeicons_web-design-01.svg"
                  alt="Mặt tiền"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Mặt tiền</span>
              </td>
              <td className="bg-white px-4 py-2 text-gray-900">
                {product.frontAge}
              </td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img
                  src="/hugeicons_square.svg"
                  alt="Dài x Rộng"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Dài x Rộng</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.size}
              </td>
              <td className="w-8"></td>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img
                  src="/ph_house-line.svg"
                  alt="Loại hình"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Loại hình</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.productType?.name}
              </td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 bg-white px-4 py-2">
                <img
                  src="/hugeicons_web-design-02.svg"
                  alt="Phong cách"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Phong cách</span>
              </td>
              <td className="bg-white px-4 py-2 text-gray-900">
                {product.style}
              </td>
              <td className="w-8"></td>
              <td className="flex items-center gap-2 bg-white px-4 py-2">
                <img
                  src="/formkit_dollar.svg"
                  alt="Chi phí"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Chi phí</span>
              </td>
              <td className="bg-white px-4 py-2 text-gray-900">
                {product.cost}
              </td>
            </tr>

            <tr>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img
                  src="/ph_info.svg"
                  alt="Thiết kế bởi"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Thiết kế bởi</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.designedBy}
              </td>
              <td className="w-8"></td>
              <td className="flex items-center gap-2 bg-gray-300 px-4 py-2">
                <img
                  src="/mdi_pound.svg"
                  alt="Mã sản phẩm"
                  className="h-6 w-6"
                />
                <span className="font-medium text-gray-900">Mã sản phẩm</span>
              </td>
              <td className="bg-gray-300 px-4 py-2 text-gray-900">
                {product.id}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
