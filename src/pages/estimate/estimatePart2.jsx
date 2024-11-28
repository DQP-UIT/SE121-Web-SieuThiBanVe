import React, { useState } from "react";
import "./estimatePart2.css";

const FormPage = () => {
  const [formData, setFormData] = useState({
    dienTichDat: "",
    dienTichXayDungTang1: "",
    soTang: "",
    ketCauTumMai: "mái BTCT phẳng, cán nền lát gạch",
    dienTichTumMai: "",
    thangMay: "Không dùng thang máy",
    soDiemDungThangMay: "",
    tangHam: "không",
    dienTichTangHam: "",
    hoBoi: "Không có hồ bơi",
    dienTichHoBoi: "",
    khuDat: "đường dưới 3m",
    nhaLanCan: "hai bên có nhà",
    matTien: "một mặt tiền",
    ketCauMong: "móng đơn",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Nhập thông số công trình</h2>

      <div className="form-group">
        <label>Diện tích đất:</label>
        <input
          type="text"
          name="dienTichDat"
          value={formData.dienTichDat}
          onChange={handleChange}
          placeholder="Nhập diện tích đất (m2)"
        />
      </div>

      <div className="form-group">
        <label>Diện tích xây dựng tầng 1 dự kiến:</label>
        <input
          type="text"
          name="dienTichXayDungTang1"
          value={formData.dienTichXayDungTang1}
          onChange={handleChange}
          placeholder="Nhập diện tích xây dựng của tầng 1 (m2)"
        />
      </div>

      <div className="form-group">
        <label>Số tầng:</label>
        <input
          type="text"
          name="soTang"
          value={formData.soTang}
          onChange={handleChange}
          placeholder="Nhập số tầng"
        />
      </div>
      <div className="form-group">
        <label>
          Hướng dẫn: Số tầng là chưa bào gồm tum mái (ví dụ 2 tầng và tum mái
          50m2), trường hợp nếu nhà 3 tầng, không tum mái, nhưng tầng 3 muốn lợp
          tôn toàn bộ thì nhập "số tầng nhập là 02 tầng, diện tích tum mái bằng
          diện tích tầng 2"
        </label>
      </div>

      <div className="form-group">
        <label>Kết cấu tum mái:</label>
        <select
          name="ketCauTumMai"
          value={formData.ketCauTumMai}
          onChange={handleChange}
        >
          <option value="mái BTCT phẳng, cán nền lát gạch">
            Mái BTCT phẳng, cán nền lát gạch
          </option>
          <option value="mái ngói">Mái ngói</option>
        </select>
      </div>
      <div className="form-group">
        <label>Diện tích tum mái:</label>
        <input
          type="text"
          name="soTang"
          value={formData.dienTichTumMai}
          onChange={handleChange}
          placeholder="Nhập diện tích tum mái"
        />
      </div>

      <div className="form-group">
        <label>Thang máy:</label>
        <select
          name="thangMay"
          value={formData.thangMay}
          onChange={handleChange}
        >
          <option value="Không dùng thang máy">Không dùng thang máy</option>
          <option value="Dùng thang máy">Dùng thang máy</option>
        </select>
      </div>
      <div className="form-group">
        <label>Số điểm dừng thang máy:</label>
        <input
          type="text"
          name="sothangmay"
          value={formData.soDiemDungThangMay}
          onChange={handleChange}
          placeholder="Nhập số điểm dừng thang máy"
        />
      </div>
      <div className="form-group">
        <label>Tầng hầm / bán hầm:</label>
        <select name="tangham" value={formData.tangHam} onChange={handleChange}>
          <option value="Không ">Không</option>
          <option value="Có">Dùng</option>
        </select>
      </div>
      <div className="form-group">
        <label>Diện tích tầng hầm:</label>
        <input
          type="text"
          name="dttangham"
          value={formData.dienTichTangHam}
          onChange={handleChange}
          placeholder="Nhập diện tích tầng hầm"
        />
      </div>
      <div className="form-group">
        <label>Hồ bơi:</label>
        <select name="hồ bơi" value={formData.hoBoi} onChange={handleChange}>
          <option value="Không ">Không</option>
          <option value="Có">Dùng</option>
        </select>
      </div>
      <div className="form-group">
        <label>Diện tích hồ bơi:</label>
        <input
          type="text"
          name="dthoboi"
          value={formData.dienTichHoBoi}
          onChange={handleChange}
          placeholder="Nhập diện tích hồ bơi"
        />
      </div>
      <div className="form-group">
        <label>Khu đất:</label>
        <select name="khuDat" value={formData.khuDat} onChange={handleChange}>
          <option value="đường dưới 3m">đường dưới 3m</option>
          <option value="đường trên 3m">đường trên 3m</option>
        </select>
      </div>
      <div className="form-group">
        <label>Nhà lân cận:</label>
        <select
          name="nhaLanCan"
          value={formData.nhaLanCan}
          onChange={handleChange}
        >
          <option value="hai bên có nhà">hai bên có nhà</option>
          <option value="bên trái có nhà">bên trái có nhà</option>
          <option value="bên phải có nhà">bên phải có nhà</option>
          <option value="hai bên không có nhà">hai bên không có nhà</option>
        </select>
      </div>
      <div className="form-group">
        <label>Mặt tiền:</label>
        <select name="matTien" value={formData.matTien} onChange={handleChange}>
          <option value="một mặt tiền">một mặt tiền</option>
          <option value="không">không</option>
        </select>
      </div>
      <div className="form-group">
        <label>Kết cấu móng:</label>
        <select
          name="ketCauMong"
          value={formData.ketCauMong}
          onChange={handleChange}
        >
          <option value="móng đơn">Móng đơn</option>
          <option value="móng băng">Móng băng</option>
          <option value="móng cọc">Móng cọc</option>
        </select>
      </div>
      <div className="form-group">
        <label>
          Hướng dẫn: Đối với nền đất yếu, nhà xây cao trên 3 tầng nên chọn móng
          bè hoặc móng cọc. Nếu nền đất thổ cư ổn định lâu năm nhưng vây nhà cao
          hơn 3 tầng nên chọn móng băng
        </label>
      </div>

      <button className="buttontype" type="submit">
        Tính toán chi phí
      </button>
    </form>
  );
};

export default FormPage;
