import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import { useAuth } from "../../store";

const ProductForm = ({ onClose }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("product-type", { params: { page: 1, pageSize: 100 } })
      .then((res) => {
        setCards(res.data.data);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    cost: "",
    images: null,
    floor: "",
    square: "",
    style: "",
    designedBy: "",
    numberBedRoom: "",
    productTypeId: "",
  });
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize FormData
    const data = new FormData();
    data.append("name", formData.name);
    data.append("size", formData.size);
    data.append("cost", formData.cost);
    data.append("floor", formData.floor);
    data.append("square", formData.square);
    data.append("userId", user.id);
    data.append("style", formData.style);
    data.append("designedBy", formData.designedBy);
    data.append("numberBedRoom", formData.numberBedRoom);
    data.append("productTypeId", formData.productTypeId);

    // Append each image file to FormData
    if (formData.images) {
      Array.from(formData.images).forEach((file) => {
        data.append("images", file);
      });
    }

    // Make the API request
    axiosInstance
      .post("/product", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        onClose();
        setFormData({
          name: "",
          size: "",
          cost: "",
          images: null,
          floor: "",
          square: "",
          style: "",
          designedBy: "",
          numberBedRoom: "",
        });
        alert("create design successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit form");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <form
        className="mx-auto w-full max-w-lg rounded-lg bg-white p-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Product Information Form
        </h2>

        {/* Form Fields */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Tên sản phẩm
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Size Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Kích thước
            </label>
            <input
              type="text"
              name="size"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.size}
              onChange={handleChange}
            />
          </div>

          {/* Cost Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Chi phí
            </label>
            <input
              type="number"
              name="cost"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.cost}
              onChange={handleChange}
            />
          </div>

          {/* Floor Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Số tầng
            </label>
            <input
              type="number"
              name="floor"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.floor}
              onChange={handleChange}
            />
          </div>

          {/* Square Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Diện tích
            </label>
            <input
              type="text"
              name="square"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.square}
              onChange={handleChange}
            />
          </div>

          {/* Style Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phong cách
            </label>
            <input
              type="text"
              name="style"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.style}
              onChange={handleChange}
            />
          </div>

          {/* Designed By Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Thiết kế bởi
            </label>
            <input
              type="text"
              name="designedBy"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.designedBy}
              onChange={handleChange}
            />
          </div>

          {/* Number of Bedrooms Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Số phòng ngủ
            </label>
            <input
              type="number"
              name="numberBedRoom"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.numberBedRoom}
              onChange={handleChange}
            />
          </div>

          {/* Product Type ID Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Loại
            </label>
            <select
              name="productTypeId"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
              value={formData.productTypeId}
              onChange={handleChange}
            >
              <option value={""}>{"chọn loại thiết kế"}</option>
              {cards.map((card) => (
                <option key={card.id} value={card.id}>
                  {card.name}
                </option>
              ))}
            </select>
          </div>

          {/* Images Upload Field */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-600">
              Upload Images
            </label>
            <input
              type="file"
              name="images"
              multiple
              onChange={handleFileChange}
              className="mt-1 block w-full cursor-pointer rounded-md border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
