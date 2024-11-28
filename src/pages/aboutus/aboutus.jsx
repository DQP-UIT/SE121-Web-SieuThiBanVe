import React from "react";
import "./aboutus.css";

export default function aboutus() {
  return (
    <div className="main-container">
      <span className="about-us">Về chúng tôi</span>
      <div className="design-service">
        <span className="chung-toi">1. Chúng tôi </span>
        <span className="cong-ty-chuyen-cung-cap">
          là công ty chuyên cung cấp dịch vụ thiết kế và bản vẽ nhà ở với hơn 10
          năm kinh nghiệm trong ngành. Mục tiêu của chúng tôi là mang đến cho
          khách hàng những giải pháp thiết kế sáng tạo, tối ưu và phù hợp với
          nhu cầu sử dụng của từng gia đình.
        </span>
      </div>
      <div className="dich-vu-chung-toi">
        <span className="dich-vu-chung-toi-5">
          2. Dịch vụ của chúng tôi bao gồm
        </span>
        <span className="thiet-ke-nha-o">
          :<br />
          Thiết kế kiến trúc nhà ở<br />
          Lập bản vẽ thi công và xin phép xây dựng
          <br />
          Tư vấn cải tạo và nâng cấp công trình
          <br />
          Thiết kế nội thất và cảnh quan xung quanh
        </span>
      </div>
      <div className="phuong-cham-lam-viec">
        <span className="work-ethic">
          3. Phương châm làm việc:
          <br />
        </span>
        <span className="quality-commitment">
          Chúng tôi luôn đặt chất lượng công trình lên hàng đầu và cam kết mang
          lại những bản vẽ chi tiết, chính xác, phù hợp với nhu cầu và ngân sách
          của khách hàng.
        </span>
      </div>
      <div className="contact-info">
        <span className="contact-info-6">
          3. Thông tin liên hệ:
          <br />
        </span>
        <span className="contact-details">
          Công ty bản vẽ công trình.
          <br />
          Số điện thoại tư vấn: 0889378933
          <br />
          Email: 22521118@gm.uit.edu.vn
        </span>
      </div>
    </div>
  );
}
