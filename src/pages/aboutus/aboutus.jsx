import React from "react";

export default function AboutUs() {
  return (
    <div className="mx-32 w-2/3 h-full p-8 leading-relaxed text-gray-800">
      <h1 className="mb-6 text-left text-3xl font-bold">Về chúng tôi</h1>
      <div className="mb-6 w-2/3">
        <p className="text-xl">
        <span className="mb-2 text-2xl font-semibold">1. Chúng tôi </span>
          là công ty chuyên cung cấp dịch vụ thiết kế và bản vẽ nhà ở với hơn 10
          năm kinh nghiệm trong ngành. Mục tiêu của chúng tôi là mang đến cho
          khách hàng những giải pháp thiết kế sáng tạo, tối ưu và phù hợp với
          nhu cầu sử dụng của từng gia đình.
        </p>
      </div>

      <div className="mb-6">
        <span className="mb-2 text-2xl font-semibold">
          2. Dịch vụ của chúng tôi bao gồm:
        </span>
        <ul className="list-disc text-xl pl-6">
          <li>Thiết kế kiến trúc nhà ở</li>
          <li>Lập bản vẽ thi công và xin phép xây dựng</li>
          <li>Tư vấn cải tạo và nâng cấp công trình</li>
          <li>Thiết kế nội thất và cảnh quan xung quanh</li>
        </ul>
      </div>

      <div className="mb-6 w-2/3">
        <span className="mb-2 text-2xl font-semibold">3. Phương châm làm việc:</span>
        <p className="text-xl">
          Chúng tôi luôn đặt chất lượng công trình lên hàng đầu và cam kết mang
          lại những bản vẽ chi tiết, chính xác, phù hợp với nhu cầu và ngân sách
          của khách hàng.
        </p>
      </div>

      <div>
        <span className="mb-2 text-2xl font-semibold">4. Thông tin liên hệ:</span>
        <p className="text-xl">
          Công ty bản vẽ công trình. <br />
          Số điện thoại tư vấn: 0889378933 <br />
          Email: 22521118@gm.uit.edu.vn
        </p>
      </div>
    </div>
  );
}
