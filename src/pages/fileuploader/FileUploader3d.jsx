import React, { useState } from "react";
import Header from "../../components/header/Header";
const FileUploader3d = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      name: file.name,
      size: file.size,
      progress: 0,
      status: "Uploading",
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    simulateUpload(newFiles);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
      file,
      name: file.name,
      size: file.size,
      progress: 0,
      status: "Uploading",
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    simulateUpload(newFiles);
  };

  const simulateUpload = (newFiles) => {
    newFiles.forEach((newFile, index) => {
      const interval = setInterval(() => {
        setFiles((prevFiles) => {
          const updatedFiles = [...prevFiles];
          if (updatedFiles[index].progress < 100) {
            updatedFiles[index].progress += 10;
          } else {
            updatedFiles[index].status = "Completed";
            clearInterval(interval);
          }
          return updatedFiles;
        });
      }, 500);
    });
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div>
      <div style={styles.container}>
        <div
          style={styles.dropArea}
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>Choose a file or drag & drop it here</p>
          <p style={styles.subText}>
            JPEG, PNG, PDG, and MP4 formats, up to 50MB
          </p>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            style={styles.fileInput}
          />
          <button style={styles.browseButton}>Browse File</button>
        </div>

        <div style={styles.fileList}>
          {files.map((file) => (
            <div key={file.name} style={styles.fileItem}>
              <div style={styles.fileInfo}>
                <span style={styles.fileIcon}>📄</span>
                <div>
                  <p style={styles.fileName}>{file.name}</p>
                  <p style={styles.fileSize}>
                    {Math.round(file.size / 1024)} KB
                  </p>
                </div>
              </div>
              <div style={styles.progressContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${file.progress}%`,
                    backgroundColor:
                      file.status === "Completed" ? "#4CAF50" : "#2196F3",
                  }}
                ></div>
                {file.status === "Uploading" && (
                  <span style={styles.uploadingText}>Uploading...</span>
                )}
                {file.status === "Completed" && (
                  <span style={styles.completedText}>Completed</span>
                )}
              </div>
              <button
                style={styles.removeButton}
                onClick={() => handleRemoveFile(file.name)}
              >
                {file.status === "Completed" ? "🗑️" : "❌"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  dropArea: {
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
    color: "#555",
    position: "relative",
  },
  subText: {
    color: "#888",
    fontSize: "14px",
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    top: 0,
    left: 0,
    cursor: "pointer",
  },
  browseButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#4285f4",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  fileList: {
    marginTop: "20px",
  },
  fileItem: {
    display: "flex", // Hiển thị các mục theo hàng ngang
    flexDirection: "row", // Đảm bảo các phần tử con nằm ngang
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#f5f5f5",
    marginBottom: "10px",
  },
  fileInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1, // Cho phép thông tin tệp chiếm không gian linh hoạt
  },
  fileIcon: {
    fontSize: "24px",
  },
  fileName: {
    fontWeight: "bold",
    margin: 0,
  },
  fileSize: {
    color: "#888",
    fontSize: "12px",
    margin: 0,
  },
  progressContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Khoảng cách giữa thanh tiến trình và trạng thái
    flex: 1, // Cho phép thanh tiến trình chiếm không gian linh hoạt
  },
  progressBar: {
    height: "4px",
    borderRadius: "2px",
    width: "100%", // Đảm bảo thanh tiến trình lấp đầy không gian
    marginRight: "10px",
  },
  uploadingText: {
    fontSize: "12px",
    color: "#888",
  },
  completedText: {
    fontSize: "12px",
    color: "#4CAF50",
  },
  removeButton: {
    fontSize: "18px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#ff4d4d",
  },
};

export default FileUploader3d;
