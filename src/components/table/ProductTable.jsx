import React from "react";

const ProductTable = ({ product }) => {
  return (
    <div className="relative w-2/3 shadow-md">
      <div className="pb-5">
        <span className="text-2xl font-medium">Thông tin bản vẽ</span>
      </div>
      <div className="relative z-10 flex overflow-x-auto shadow-md">
        <table className="w-full min-w-fit text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <tbody>
            <tr>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="/uil_layer-group.svg"
                  alt="Product ID"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-300 font-medium text-gray-900"
              >
                Số tầng
              </th>
              <td className="bg-gray-300 text-gray-900">
                {product.floor} {/* Sử dụng floor từ API */}
              </td>
              <th className="w-5"></th>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="/la_bed.svg"
                  alt="Product Name"
                  className="object-fill"
                />
              </th>
              <td className="bg-gray-300 py-2 font-medium text-gray-900">
                Phòng ngủ
              </td>
              <td className="bg-gray-300 py-2 text-gray-900">
                {product.numberBedRoom} {/* Sử dụng numberBedRoom từ API */}
              </td>
            </tr>
            <tr>
              <th scope="row" className="w-fit bg-white px-4 py-2">
                <img
                  src="/mynaui_rectangle-vertical.svg"
                  alt="Category"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                className="whitespace-nowrap bg-white py-2 font-medium text-gray-900"
              >
                Diện tích
              </th>
              <td className="bg-white py-2 text-gray-900">
                {product.square} {/* Sử dụng square từ API */}
              </td>
              <th className="w-5"></th>
              <th scope="row" className="w-fit bg-white px-4 py-2">
                <img
                  src="/hugeicons_web-design-01.svg"
                  alt="Price"
                  className="object-fill"
                />
              </th>
              <td className="bg-white py-2 font-medium text-gray-900">
                Mặt tiền
              </td>
              <td className="bg-white py-2 text-gray-900">
                {product.frontage} {/* Sử dụng frontage từ API */}
              </td>
            </tr>
            <tr>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="/hugeicons_square.svg"
                  alt="Stock"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-300 py-2 font-medium text-gray-900"
              >
                Chiều dài
              </th>
              <td className="bg-gray-300 py-2 text-gray-900">
                {product.length} {/* Sử dụng length từ API */}
              </td>
              <th className="w-5"></th>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="/ph_house-line.svg"
                  alt="Supplier"
                  className="object-fill"
                />
              </th>
              <td className="bg-gray-300 py-2 font-medium text-gray-900">
                Loại hình
              </td>
              <td className="bg-gray-300 py-2 text-gray-900">
                {product.productType?.name}{" "}
                {/* Sử dụng productType.name từ API */}
              </td>
            </tr>
            <tr>
              <th scope="row" className="w-fit bg-white px-4 py-2">
                <img
                  src="/hugeicons_web-design-02.svg"
                  alt="SKU"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                className="whitespace-nowrap bg-white py-2 font-medium text-gray-900"
              >
                Phong cách
              </th>
              <td className="bg-white py-2 text-gray-900">
                {product.style} {/* Sử dụng style từ API */}
              </td>
              <th className="w-5"></th>
              <th scope="row" className="w-fit bg-white px-4 py-2">
                <img
                  src="/formkit_dollar.svg"
                  alt="Weight"
                  className="object-fill"
                />
              </th>
              <td className="bg-white py-2 font-medium text-gray-900">
                Chi phí
              </td>
              <td className="bg-white py-2 text-gray-900">
                {product.cost} {/* Sử dụng cost từ API */}
              </td>
            </tr>
            <tr>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="/ph_info.svg"
                  alt="Dimensions"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                className="whitespace-nowrap bg-gray-300 py-2 font-medium text-gray-900"
              >
                Thiết kế bởi
              </th>
              <td className="bg-gray-300 py-2 text-gray-900">
                {product.designedBy} {/* Sử dụng designedBy từ API */}
              </td>
              <th className="w-5"></th>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img src="/mdi_pound.svg" alt="Color" className="object-fill" />
              </th>
              <td className="bg-gray-300 py-2 font-medium text-gray-900">
                Mã sản phẩm
              </td>
              <td className="bg-gray-300 py-2 text-gray-900">
                {product.id} {/* Sử dụng id từ API */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
