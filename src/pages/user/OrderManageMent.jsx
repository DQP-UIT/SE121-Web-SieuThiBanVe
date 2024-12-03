import React from "react";

export default function OrderManagement() {
  const orders = [
    {
      id: 1,
      customerName: "Lê Quang Phúc",
      orderDetails: "Mặt 3 tầng 4 đường sợi và 2 bộ lõi UF gia đình",
    },
    {
      id: 2,
      customerName: "Lê Quang Phúc",
      orderDetails: "Mặt 3 tầng 4 đường sợi và 2 bộ lõi UF gia đình",
    },
    {
      id: 3,
      customerName: "Lê Quang Phúc",
      orderDetails: "Mặt 3 tầng 4 đường sợi và 2 bộ lõi UF gia đình",
    },
  ];

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

  return (
    <div style={styles.container}>
      <div style={styles.header}>Quản lý đơn đặt hàng</div>
      {orders.map((order) => (
        <div key={order.id} style={styles.orderCard}>
          <div style={styles.customerName}>{order.customerName}</div>
          <div style={styles.orderDetails}>{order.orderDetails}</div>
        </div>
      ))}
    </div>
  );
}
