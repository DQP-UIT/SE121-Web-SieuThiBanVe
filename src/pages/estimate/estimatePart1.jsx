import React, { useState } from "react";
import "./estimatePart1.css"; // Import file CSS

function DuToanChiPhi() {
  const [diaDiem, setDiaDiem] = useState("Đà Nẵng");
  const [loaiCongTrinh, setLoaiCongTrinh] = useState("Nhà phố");

  const diaDiemOptions = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Bình Dương",
    "Bình Phước",
    "Bạc Liêu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hải Dương",
    "Hải Phòng",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên-Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];
  const loaiCongTrinhOptions = ["Nhà phố", "Biệt thự", "Căn hộ", "Nhà cấp 4"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Địa điểm:", diaDiem);
    console.log("Loại công trình:", loaiCongTrinh);
    // Ở đây bạn có thể thực hiện các logic xử lý dữ liệu, chẳng hạn như gửi dữ liệu lên server
  };

  return (
    <div className="container">
      <h2 className="css1">Dự toán chi phí công trình</h2>
      <p>
        Ứng dụng dự toán chi phí thi công xây dựng, nhận kết quả ngay sau khi
        nhập thông số công trình.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="diaDiem">Địa điểm xây dựng:</label>
        <select
          id="diaDiem"
          value={diaDiem}
          onChange={(e) => setDiaDiem(e.target.value)}
        >
          {diaDiemOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="loaiCongTrinh">Loại công trình:</label>
        <select
          id="loaiCongTrinh"
          value={loaiCongTrinh}
          onChange={(e) => setLoaiCongTrinh(e.target.value)}
        >
          {loaiCongTrinhOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button className="buttontype" type="submit">
          Dự toán chi phí
        </button>
      </form>
    </div>
  );
}

export default DuToanChiPhi;
