import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
const Profile = () => {
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded file:", file);
  };

  const handleNewDesignUpload = () => {
    console.log("New design button clicked");
  };

  return (
    <div>
      <Header inout_url="src/assets/entypo_login.svg" />
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <div style={styles.profileHeader}>
            <div style={styles.profilePicture}>
              <input
                type="file"
                onChange={handlePhotoUpload}
                style={styles.fileInput}
              />
              <span style={styles.cameraIcon}>📷</span>
            </div>
            <h2 style={styles.profileName}>Lê Quang Phúc</h2>
          </div>

          <div style={styles.profileInfo}>
            <div style={styles.infoSection}>
              <div style={styles.infoItem}>
                <label style={styles.label}>ID</label>
                <p style={styles.text}>2</p>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.label}>Tên</label>
                <p style={styles.text}>Lê Quang Phúc</p>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.label}>Ngày sinh</label>
                <p style={styles.text}>11/11/2004</p>
              </div>
            </div>
            <div style={styles.infoSection}>
              <div style={styles.infoItem}>
                <label style={styles.label}>Số bản vẽ</label>
                <p style={styles.text}>2</p>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.label}>Email</label>
                <p style={styles.text}>22521118@gm.uit.edu.vn</p>
              </div>
              <div style={styles.infoItem}>
                <label style={styles.label}>Số điện thoại</label>
                <p style={styles.text}>0975207829</p>
              </div>
            </div>
          </div>
        </div>

        <button style={styles.uploadButton} onClick={handleNewDesignUpload}>
          Đăng bản vẽ mới
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between", // Add this line
    gap: "24px",
    padding: "24px",
  },
  profileContainer: {
    width: "700px", // Increased width of the profile card
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "24px", // Increased padding inside the card
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Slightly larger shadow
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px", // Increased gap between picture and name
  },
  profilePicture: {
    width: "80px", // Increased profile picture size
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#e0e0e0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  cameraIcon: {
    fontSize: "28px", // Larger icon size
    color: "#555",
  },
  fileInput: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  profileName: {
    margin: 0,
    fontSize: "22px", // Increased font size for the name
  },
  profileInfo: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px", // Increased margin to separate sections
  },
  infoSection: {
    width: "48%", // Adjusted width to fit larger card
  },
  infoItem: {
    marginBottom: "12px", // Increased space between items
  },
  label: {
    fontSize: "14px", // Slightly larger label font
    color: "#888",
  },
  text: {
    margin: "6px 0 0",
    fontSize: "16px", // Larger font for main text
    fontWeight: "bold",
  },
  uploadButton: {
    padding: "12px 24px", // Increased button padding for a larger button
    backgroundColor: "#4285f4",
    color: "white",
    border: "none",
    borderRadius: "6px", // Slightly rounded button
    fontSize: "16px", // Increased font size for button text
    cursor: "pointer",
    alignSelf: "flex-start", // Keeps the button aligned at the top
  },
};

export default Profile;
