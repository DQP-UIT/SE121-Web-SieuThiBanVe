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

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      padding: "20px",
      maxWidth: "800px",
      margin: "auto",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    button: {
      width: "760px",
      padding: "10px 20px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    note: {
      marginTop: "20px",
      marginBottom: "20px",
      fontStyle: "italic",
      fontSize: "14px",
    },
    fileUploadSection: {
      textAlign: "center",
      border: "2px dashed #ccc",
      borderRadius: "5px",
      padding: "20px",
      marginBottom: "20px",
    },
    uploadedFiles: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },
    fileCard: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "10px",
      textAlign: "center",
      width: "150px",
    },
    fileName: {
      fontSize: "14px",
      margin: "5px 0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>Thêm bản vẽ</div>
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          style={styles.input}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Size"
          style={styles.input}
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
        />
        <input
          type="text"
          placeholder="Cost"
          style={styles.input}
          value={formData.cost}
          onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
        />
        <input
          type="text"
          placeholder="Style"
          style={styles.input}
          value={formData.style}
          onChange={(e) => setFormData({ ...formData, style: e.target.value })}
        />
        <input
          type="text"
          placeholder="Floor"
          style={styles.input}
          value={formData.floor}
          onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
        />
        <input
          type="text"
          placeholder="Square"
          style={styles.input}
          value={formData.square}
          onChange={(e) => setFormData({ ...formData, square: e.target.value })}
        />
        <input
          type="text"
          placeholder="Product Type ID"
          style={styles.input}
          value={formData.productTypeId}
          onChange={(e) =>
            setFormData({ ...formData, productTypeId: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Designed By"
          style={styles.input}
          value={formData.designedBy}
          onChange={(e) =>
            setFormData({ ...formData, designedBy: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Number Bedroom"
          style={styles.input}
          value={formData.numberBedRoom}
          onChange={(e) =>
            setFormData({ ...formData, numberBedRoom: e.target.value })
          }
        />
      </div>
      <div style={styles.note}>
        Lưu ý: Product Type ID: 1.Biệt thự, 2.Nhà cấp 4, 3.Nhà phố, 4.Khách sạn
      </div>

      {/* File Upload for 2D */}
      <div style={styles.header}>Thêm bản vẽ 2D</div>
      <div style={styles.fileUploadSection}>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "2D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {files2D.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for Detail */}
      <div style={styles.header}>Thêm chi tiết bản vẽ</div>
      <div style={styles.fileUploadSection}>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "detail")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {filesDetail.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      {/* File Upload for 3D */}
      <div style={styles.header}>Thêm bản vẽ 3D</div>
      <div style={styles.fileUploadSection}>
        <input
          type="file"
          onChange={(e) => handleFileUpload(e, "3D")}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {files3D.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        Thêm bản vẽ
      </button>
    </div>
  );
}
