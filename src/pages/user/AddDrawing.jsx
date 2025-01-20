import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../store";
import { useNavigate } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function AddDrawing() {
  const navigate = useNavigate();
  const [filesDocuments, setFilesDocuments] = useState([]);
  const [files2D, setFiles2D] = useState([]);
  const [filesDetail, setFilesDetail] = useState([]);
  const [files3D, setFiles3D] = useState([]);
  const { user } = useAuth();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
    frontAge: "", // Thêm trường mặt tiền
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
    } else if (type === "documents") {
      setFilesDocuments((prevFiles) => [...prevFiles, ...uploadedFiles]);
    }
  };

  // Hàm gửi form và gọi API
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Tạo FormData để gửi file
    const data = new FormData();

    // Append các file vào FormData
    files2D.forEach((file) => data.append("images", file));
    filesDetail.forEach((file) => data.append("images1", file));
    files3D.forEach((file) => data.append("images2", file));
    filesDocuments.forEach((file) => data.append("documents", file, file.name)); // Thêm tài liệu
    console.log(filesDocuments);
    // Thêm các dữ liệu form khác vào FormData
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // Chuyển đổi dữ liệu từ Draft.js Editor sang HTML
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState);
    data.append("description", htmlContent);

    try {
      // Gọi API upload bản vẽ
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

        // Gọi API cập nhật số lượng bản vẽ
        try {
          const updateResponse = await axios.put(
            `http://localhost:8000/api/v1/user/${user.id}/update-designs`,
            {}, // Body trống
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (updateResponse.status === 200) {
            alert("Số lượng bản vẽ đã được cập nhật thành công!");
            navigate(`/user/drawingmanagement`);
          }
        } catch (updateError) {
          console.error(
            "Error updating designs:",
            updateError.response?.data || updateError.message,
          );
          alert("Đã xảy ra lỗi khi cập nhật số lượng bản vẽ!");
        }
      }
    } catch (uploadError) {
      console.error(
        "Error uploading drawing:",
        uploadError.response?.data || uploadError.message,
      );
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
        <input
          type="text"
          placeholder="Front Age"
          className="rounded border border-gray-300 p-2"
          value={formData.frontAge}
          onChange={(e) =>
            setFormData({ ...formData, frontAge: e.target.value })
          }
        />
      </div>
      <div className="mb-5 text-sm italic text-white">
        Lưu ý: Product Type ID: 1.Biệt thự, 2.Nhà cấp 4, 3.Nhà phố, 4.Khách sạn
      </div>

      {/* Draft.js Editor */}
      <div className="mb-5 text-2xl font-bold text-white">Mô tả bản vẽ</div>
      <div className="mb-5 rounded border border-gray-300 bg-white p-5">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={setEditorState}
        />
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
      {/* File Upload for Documents */}
      <div className="mb-5 text-2xl font-bold text-white">
        Thêm tài liệu (PDF, Word, Excel)
      </div>
      <div className="mb-5 rounded border-2 border-dashed border-gray-300 p-5 text-center text-white">
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "documents")}
          multiple
          accept=".pdf, .doc, .docx, .xls, .xlsx"
          className="mb-2"
        />
        <p>PDF, Word, Excel formats. (up to 50MB)</p>
      </div>
      <div className="mb-5 flex flex-wrap gap-2">
        {filesDocuments.map((file, index) => (
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
