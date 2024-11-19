import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../axios";
import { useAuth } from "../../store";

const ContactCard = ({ product }) => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Prepare the payload data
    const payload = {
      name,
      orderUserName: name,
      orderPhoneNumber: phone,
      orderCity: city,
      orderAdress: `${district}, ${city}`, // Assuming you want to combine district and city
      userId: user.id, // Replace with actual user ID if needed
      productId: product.id, // Replace with the correct product ID
      createAt: new Date().toISOString(), // Use the current time for creation
    };

    try {
      const response = await axiosInstance.post(
        "http://localhost:8000/api/v1/order",
        payload,
      );
      // Handle the response (e.g., show a success message)
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error:", error);
      setError("Đặt hàng thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-[600px] w-[350px]">
      <div className="absolute left-0 top-0 h-[600px] w-[350px] border border-black/50 bg-white shadow" />

      <div className="absolute left-[40px] top-[40px] h-14 w-[270px] font-['Inter'] text-[28px] font-medium text-black">
        Liên hệ đặt hàng
      </div>

      <div className="absolute left-[40px] top-[110px] h-[25px] w-[270px] font-['Inter'] text-base font-normal text-black">
        Tên của bạn (*)
      </div>
      <input
        className="absolute left-[40px] top-[130px] h-[50px] w-[270px] border border-black bg-white px-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nhập tên của bạn"
      />

      <div className="absolute left-[40px] top-[210px] h-[25px] w-[270px] font-['Inter'] text-base font-normal text-black">
        Số điện thoại (*)
      </div>
      <input
        className="absolute left-[40px] top-[230px] h-[50px] w-[270px] border border-black bg-white px-2"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Nhập số điện thoại"
      />

      <div className="absolute left-[40px] top-[310px] h-[25px] w-[150px] font-['Inter'] text-base font-normal text-black">
        Tỉnh/ Thành phố (*)
      </div>
      <input
        className="absolute left-[40px] top-[330px] h-[35px] w-[120px] border border-black bg-white px-2"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Tỉnh/ Thành phố"
      />

      <div className="absolute left-[180px] top-[310px] h-[25px] w-[150px] font-['Inter'] text-base font-normal text-black">
        Quận/ Huyện (*)
      </div>
      <input
        className="absolute left-[180px] top-[330px] h-[35px] w-[120px] border border-black bg-white px-2"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
        type="text"
        placeholder="Quận/ Huyện"
      />

      <div className="absolute left-[40px] top-[450px] h-[40px] w-[270px] text-center font-['Inter'] text-xl font-medium text-black">
        Tổng tiền: {product.cost}
      </div>

      <div className="absolute left-[50px] top-[500px] h-[50px] w-[250px]">
        <button
          onClick={handleSubmit}
          className="absolute left-0 top-0 h-[50px] w-[250px] bg-[#6c95fc] text-center font-['Inter'] text-xl font-medium text-white"
          disabled={loading}
        >
          {loading ? "Đang xử lý..." : "Liên hệ đặt hàng"}
        </button>
      </div>

      {error && (
        <div className="absolute left-[40px] top-[550px] text-center text-red-500">
          {error}
        </div>
      )}

      {success && (
        <div className="absolute left-[40px] top-[550px] text-center text-green-500">
          Đặt hàng thành công!
        </div>
      )}

      <div className="absolute left-[40px] top-[390px] h-[15px] w-[270px] font-['Inter'] text-[14px] font-normal text-black/70">
        Bạn chưa phải thanh toán ở bước này
      </div>
    </div>
  );
};

export default ContactCard;
