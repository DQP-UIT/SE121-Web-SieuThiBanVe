import React, { useState } from "react";
import axios from "axios";

export default function AddDrawing() {
  const [files2D, setFiles2D] = useState([]);
  const [filesDetail, setFilesDetail] = useState([]);
  const [files3D, setFiles3D] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    cost: "",
    style: "",
    floor: "",
    square: "",
    productTypeId: "",
    designedBy: "",
    numberBedRoom: "",
    userId: "3", // Giả sử bạn đã có userId từ useAuth
  });

  // Hàm xử lý tải lên file và phân loại
  const handleFileUpload = (event, type) => {
    const uploadedFiles = Array.from(event.target.files);
    if (type === "2D") {
      setFiles2D((prevFiles) => [...prevFiles, ...uploadedFiles]);
    } else if (type === "detail") {
      setFilesDetail((prevFiles) => [...prevFiles, ...uploadedFiles]);
    } else if (type === "3D") {
      setFiles3D((prevFiles) => [...prevFiles, ...uploadedFiles]);
    }
  };

  // Hàm gửi form và gọi API
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Tạo FormData để gửi file
    const data = new FormData();
    files2D.forEach((file) => data.append("images", file));
    filesDetail.forEach((file) => data.append("images1", file));
    files3D.forEach((file) => data.append("images2", file));

    // Thêm các dữ liệu form khác vào FormData
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      if (response.status === 201) {
        alert("Bản vẽ đã được thêm thành công!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã có lỗi xảy ra khi thêm bản vẽ!");
    }
  };

  return (
    <div className="font-sans p-5 max-w-4xl mx-auto">
      <div className="text-2xl font-bold mb-5 text-white select-none">Thêm bản vẽ</div>
      <div className="grid grid-cols-2 gap-2 mb-5">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border border-gray-300 rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Size"
          className="p-2 border border-gray-300 rounded"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cost"
          className="p-2 border border-gray-300 rounded"
          value={formData.cost}
          onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
        />
        <input
          type="text"
          placeholder="Style"
          className="p-2 border border-gray-300 rounded"
          value={formData.style}
          onChange={(e) => setFormData({ ...formData, style: e.target.value })}
        />
        <input
          type="text"
          placeholder="Floor"
          className="p-2 border border-gray-300 rounded"
          value={formData.floor}
          onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
        />
        <input
          type="text"
          placeholder="Square"
          className="p-2 border border-gray-300 rounded"
          value={formData.square}
          onChange={(e) => setFormData({ ...formData, square: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Type ID"
          className="p-2 border border-gray-300 rounded"
          value={formData.productTypeId}
          onChange={(e) =>
            setFormData({ ...formData, productTypeId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Designed By"
          className="p-2 border border-gray-300 rounded"
          value={formData.designedBy}
          onChange={(e) =>
            setFormData({ ...formData, designedBy: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Number Bedroom"
          className="p-2 border border-gray-300 rounded"
          value={formData.numberBedRoom}
          onChange={(e) =>
            setFormData({ ...formData, numberBedRoom: e.target.value })
          }
        />
      </div>
      <div className="italic text-sm mb-5 text-white">
        Lưu ý: Product Type ID: 1.Biệt thự, 2.Nhà cấp 4, 3.Nhà phố, 4.Khách sạn
      </div>

      {/* File Upload for 2D */}
      <div className="text-2xl font-bold mb-5 text-white">Thêm bản vẽ 2D</div>
      <div className="text-center border-2 border-dashed border-gray-300 rounded p-5 mb-5 text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "2D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="flex gap-2 flex-wrap mb-5">
        {files2D.map((file, index) => (
          <div key={index} className="border border-gray-300 rounded p-2 text-center w-36">
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for Detail */}
      <div className="text-2xl font-bold mb-5 text-white">Thêm chi tiết bản vẽ</div>
      <div className="text-center border-2 border-dashed border-gray-300 rounded p-5 mb-5 text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "detail")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="flex gap-2 flex-wrap mb-5">
        {filesDetail.map((file, index) => (
          <div key={index} className="border border-gray-300 rounded p-2 text-center w-36">
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for 3D */}
      <div className="text-2xl font-bold mb-5 text-white">Thêm bản vẽ 3D</div>
      <div className="text-center border-2 border-dashed border-gray-300 rounded p-5 mb-5 text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "3D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="flex gap-2 flex-wrap mb-5">
        {files3D.map((file, index) => (
          <div key={index} className="border border-gray-300 rounded p-2 text-center w-36">
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      <button
        className="w-full p-2 bg-blue-500 text-white rounded cursor-pointer"
        onClick={handleSubmit}
      >
        Thêm bản vẽ
      </button>
    </div>
  );
}