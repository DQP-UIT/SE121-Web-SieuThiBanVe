import React, { useState } from "react";

export default function AddDrawing() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
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
      width: 760,
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
        <input type="text" placeholder="Name" style={styles.input} />
        <input type="text" placeholder="Size" style={styles.input} />
        <input type="text" placeholder="Cost" style={styles.input} />
        <input type="text" placeholder="Style" style={styles.input} />
        <input type="text" placeholder="Floor" style={styles.input} />
        <input type="text" placeholder="Square" style={styles.input} />
        <input type="text" placeholder="Style" style={styles.input} />
        <input type="text" placeholder="DesignedBy" style={styles.input} />
        <input type="text" placeholder="Number Bedroom" style={styles.input} />
        <input type="text" placeholder="ProductType ID" style={styles.input} />
      </div>
      <div style={styles.note}>
        Lưu ý: Product Type ID: 1.Biệt thự, 2.Nhà cấp 4, 3.Nhà phố, 4.Khách sạn
      </div>
      <div style={styles.header}>Thêm bản vẽ 2D</div>
      <div style={styles.fileUploadSection}>
        <p>Choose a file or drag & drop it here</p>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {files.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
      <div style={styles.header}>Thêm chi tiết bản vẽ</div>
      <div style={styles.fileUploadSection}>
        <p>Choose a file or drag & drop it here</p>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {files.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
      <div style={styles.header}>Thêm bản vẽ 3D</div>
      <div style={styles.fileUploadSection}>
        <p>Choose a file or drag & drop it here</p>
        <input
          type="file"
          onChange={handleFileUpload}
          multiple
          accept=".jpeg, .png, .pdf, .jpg"
          style={{ marginBottom: "10px" }}
        />
        <p>JPEG, PNG, PDF, and JPG formats. (up to 50MB)</p>
      </div>
      <div style={styles.uploadedFiles}>
        {files.map((file, index) => (
          <div key={index} style={styles.fileCard}>
            <p style={styles.fileName}>{file.name}</p>
            <p style={{ fontSize: "12px", color: "#555" }}>
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        ))}
      </div>
      <button style={styles.button}>Thêm bản vẽ</button>
    </div>
  );
}
