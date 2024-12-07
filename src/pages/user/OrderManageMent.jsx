import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../store"; // Import useAuth hook

export default function OrderManagement() {
  const { user } = useAuth(); // Lấy user từ useAuth hook
  const [orders, setOrders] = useState([]); // State lưu trữ danh sách đơn hàng
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  useEffect(() => {
    // Kiểm tra nếu user chưa đăng nhập hoặc không có userId
    if (!user || !user.id) {
      setError("Bạn cần đăng nhập để xem đơn hàng.");
      setLoading(false);
      return;
    }

    // Gọi API để lấy danh sách đơn hàng theo userId
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/order/user",
          {
            params: { userId: user.id }, // Sử dụng userId từ user
          },
        );
        setOrders(response.data); // Lưu dữ liệu đơn hàng vào state
      } catch (error) {
        setError("Có lỗi xảy ra khi tải dữ liệu đơn hàng."); // Lưu thông báo lỗi
      } finally {
        setLoading(false); // Kết thúc trạng thái tải dữ liệu
      }
    };

    fetchOrders();
  }, [user]); // Chạy lại khi user thay đổi

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: "20px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    orderCard: {
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "15px",
      marginBottom: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    customerName: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    orderDetails: {
      fontSize: "16px",
      color: "#555",
    },
  };

  // Hiển thị thông báo tải dữ liệu
  if (loading) {
    return <div style={styles.container}>Đang tải danh sách đơn hàng...</div>;
  }

  // Hiển thị lỗi nếu có
  if (error) {
    return <div style={styles.container}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>Quản lý đơn đặt hàng</div>
      {orders.map((order) => (
        <div key={order.id} style={styles.orderCard}>
          <div style={styles.customerName}>
            Khách hàng: {order.orderUserName}
          </div>
          <div style={styles.orderDetails}>
            Số điện thoại: {order.orderPhoneNumber}
          </div>
          <div style={styles.orderDetails}>Thành phố: {order.orderCity}</div>
          <div style={styles.orderDetails}>Địa chỉ: {order.orderAdress}</div>
        </div>
      ))}
    </div>
  );
}
