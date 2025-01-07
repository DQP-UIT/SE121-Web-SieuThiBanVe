import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../store";

export default function AddDrawing() {
  const [files2D, setFiles2D] = useState([]);
  const [filesDetail, setFilesDetail] = useState([]);
  const [files3D, setFiles3D] = useState([]);
  const { user } = useAuth();
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
    userId: user.id, // Giả sử bạn đã có userId từ useAuth
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
    <div className="mx-auto max-w-4xl p-5 font-sans">
      <div className="mb-5 select-none text-2xl font-bold text-white">
        Thêm bản vẽ
      </div>
      <div className="mb-5 grid grid-cols-2 gap-2">
        <input
          type="text"
          placeholder="Name"
          className="rounded border border-gray-300 p-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Size"
          className="rounded border border-gray-300 p-2"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cost"
          className="rounded border border-gray-300 p-2"
          value={formData.cost}
          onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
        />
        <input
          type="text"
          placeholder="Style"
          className="rounded border border-gray-300 p-2"
          value={formData.style}
          onChange={(e) => setFormData({ ...formData, style: e.target.value })}
        />
        <input
          type="text"
          placeholder="Floor"
          className="rounded border border-gray-300 p-2"
          value={formData.floor}
          onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
        />
        <input
          type="text"
          placeholder="Square"
          className="rounded border border-gray-300 p-2"
          value={formData.square}
          onChange={(e) => setFormData({ ...formData, square: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Type ID"
          className="rounded border border-gray-300 p-2"
          value={formData.productTypeId}
          onChange={(e) =>
            setFormData({ ...formData, productTypeId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Designed By"
          className="rounded border border-gray-300 p-2"
          value={formData.designedBy}
          onChange={(e) =>
            setFormData({ ...formData, designedBy: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Number Bedroom"
          className="rounded border border-gray-300 p-2"
          value={formData.numberBedRoom}
          onChange={(e) =>
            setFormData({ ...formData, numberBedRoom: e.target.value })
          }
        />
      </div>
      <div className="mb-5 text-sm italic text-white">
        Lưu ý: Product Type ID: 1.Biệt thự, 2.Nhà cấp 4, 3.Nhà phố, 4.Khách sạn
      </div>

      {/* File Upload for 2D */}
      <div className="mb-5 text-2xl font-bold text-white">Thêm bản vẽ 2D</div>
      <div className="mb-5 rounded border-2 border-dashed border-gray-300 p-5 text-center text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "2D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {files2D.map((file, index) => (
          <div
            key={index}
            className="w-36 rounded border border-gray-300 p-2 text-center"
          >
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for Detail */}
      <div className="mb-5 text-2xl font-bold text-white">
        Thêm chi tiết bản vẽ
      </div>
      <div className="mb-5 rounded border-2 border-dashed border-gray-300 p-5 text-center text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "detail")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {filesDetail.map((file, index) => (
          <div
            key={index}
            className="w-36 rounded border border-gray-300 p-2 text-center"
          >
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for 3D */}
      <div className="mb-5 text-2xl font-bold text-white">Thêm bản vẽ 3D</div>
      <div className="mb-5 rounded border-2 border-dashed border-gray-300 p-5 text-center text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "3D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          className="mb-2"
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {files3D.map((file, index) => (
          <div
            key={index}
            className="w-36 rounded border border-gray-300 p-2 text-center"
          >
            <p className="text-sm">{file.name}</p>
            <p className="text-xs text-gray-500">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      <button
        className="w-full cursor-pointer rounded bg-blue-500 p-2 text-white"
        onClick={handleSubmit}
      >
        Thêm bản vẽ
      </button>
    </div>
  );
}
