import React, { useState, useEffect } from "react";
import { ReactPhotoSphereViewer as Viewer } from "react-photo-sphere-viewer";
import Button from "@mui/material/Button";

const ImageLoader = ({ images2dct, images2d, images3d }) => {
  const [showMore, setShowMore] = useState(false);
  const [processedImages3d, setProcessedImages3d] = useState([]);

  useEffect(() => {
    // Tiền xử lý ảnh 3D
    const processImages3d = async () => {
      const processed = await Promise.all(
        images3d.map(async (image) => {
          const processedImage = await resizeImage(image);
          return processedImage;
        }),
      );
      setProcessedImages3d(processed);
    };

    processImages3d();
  }, [images3d]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="w-full">
      <div className="w-2/3 flex flex-col items-center justify-center">
        {images2dct && images2dct.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`2dct-${index}`}
            style={{ width: "900px", height: "675px", marginBottom: "20px" }}
          />
        ))}
        {showMore && images2d &&
          images2d.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`2d-${index}`}
              style={{ width: "900px", height: "450px", marginBottom: "20px" }}
            />
          ))}
        {showMore && images3d &&
          processedImages3d.map((image, index) => (
            <div
              key={index}
              style={{ width: "900px", height: "450px", marginBottom: "20px" }}
            >
              <Viewer src={image} width="900px" height="450px" />
            </div>
          ))}
      </div>
      {!showMore && (
        <div className="w-2/3 flex flex-auto items-center justify-center">
          <Button variant="contained" color="primary" onClick={handleShowMore}>
            Xem thêm
          </Button>
        </div>
      )}
    </div>
  );
};

// Hàm tiền xử lý ảnh 3D
const resizeImage = async (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const newWidth = img.width;
      const newHeight = img.width / 2;

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      resolve(canvas.toDataURL());
    };
    img.onerror = (error) => reject(error);
  });
};

export default ImageLoader;
