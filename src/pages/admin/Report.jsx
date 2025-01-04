import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Typography, Select, Card, Button, Table } from "antd";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import html2canvas from "html2canvas";

const { Title } = Typography;
const { Option } = Select;

const fakeRevenueData = [
  {
    year: 2022,
    month: "January",
    revenue: 1200,
    newUsers: 1,
  },
  {
    year: 2022,
    month: "February",
    revenue: 1900,
    newUsers: 1,
  },
  {
    year: 2022,
    month: "March",
    revenue: 1500,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "April",
    revenue: 1700,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "May",
    revenue: 2000,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "June",
    revenue: 2100,
    newUsers: 1,
  },
  {
    year: 2022,
    month: "July",
    revenue: 2200,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "August",
    revenue: 2300,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "September",
    revenue: 2400,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "October",
    revenue: 2500,
    newUsers: 5,
  },
  {
    year: 2022,
    month: "November",
    revenue: 2600,
    newUsers: 0,
  },
  {
    year: 2022,
    month: "December",
    revenue: 2700,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "January",
    revenue: 2800,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "February",
    revenue: 2900,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "March",
    revenue: 3000,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "April",
    revenue: 3100,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "May",
    revenue: 3200,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "June",
    revenue: 3300,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "July",
    revenue: 3400,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "August",
    revenue: 3500,
    newUsers: 2,
  },
  {
    year: 2023,
    month: "September",
    revenue: 3600,
    newUsers: 5,
  },
  {
    year: 2023,
    month: "October",
    revenue: 3700,
    newUsers: 5,
  },
  {
    year: 2023,
    month: "November",
    revenue: 3800,
    newUsers: 1,
  },
  {
    year: 2023,
    month: "December",
    revenue: 3900,
    newUsers: 5,
  },
  {
    year: 2024,
    month: "January",
    revenue: 4000,
    newUsers: 6,
  },
  {
    year: 2024,
    month: "February",
    revenue: 4100,
    newUsers: 1,
  },
  {
    year: 2024,
    month: "March",
    revenue: 4200,
    newUsers: 0,
  },
  {
    year: 2024,
    month: "April",
    revenue: 4300,
    newUsers: 1,
  },
  {
    year: 2024,
    month: "May",
    revenue: 4400,
    newUsers: 1,
  },
  {
    year: 2024,
    month: "June",
    revenue: 4500,
    newUsers: 5,
  },
  {
    year: 2024,
    month: "July",
    revenue: 4600,
    newUsers: 2,
  },
  {
    year: 2024,
    month: "August",
    revenue: 4700,
    newUsers: 2,
  },
  {
    year: 2024,
    month: "September",
    revenue: 4800,
    newUsers: 2,
  },
  {
    year: 2024,
    month: "October",
    revenue: 4900,
    newUsers: 5,
  },
  {
    year: 2024,
    month: "November",
    revenue: 5000,
    newUsers: 3,
  },
  {
    year: 2024,
    month: "December",
    revenue: 5100,
    newUsers: 5,
  },
];

const ReportPage = () => {
  const [revenueData, setRevenueData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    setRevenueData(fakeRevenueData);
    setFilteredData(fakeRevenueData);
  }, []);

  const handleFilter = () => {
    let data = revenueData;
    if (selectedYear) {
      data = data.filter((item) => item.year === parseInt(selectedYear));
    }
    if (selectedMonth) {
      data = data.filter((item) => item.month === selectedMonth);
    }
    setFilteredData(data);
  };

  const calculateTotals = () => {
    const totalUsers = filteredData.reduce(
      (sum, item) => sum + item.newUsers,
      0,
    );
    const totalRevenue = filteredData.reduce(
      (sum, item) => sum + item.revenue,
      0,
    );
    return {
      totalUsers,
      totalRevenue,
    };
  };

  const totals = calculateTotals();

  const columns = [
    { title: "Tháng", dataIndex: "month", key: "month" },
    { title: "Year", dataIndex: "year", key: "year" },
    { title: "Người đăng ký mới", dataIndex: "newUsers", key: "newUsers" },
    {
      title: "Tổng doanh thu",
      dataIndex: "revenue",
      key: "revenue",
      render: (revenue) =>
        revenue.toLocaleString("vi-VN", { style: "currency", currency: "VND" }),
    },
  ];

  const createChartData = (label, data, color) => ({
    labels: filteredData.map((data) => `Tháng ${data.month}`),
    datasets: [{ label, data, backgroundColor: color }],
  });

  const exportPDF = async () => {
    const doc = new jsPDF();
    doc.text("Monthly Revenue Report", 10, 10);

    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 20, 180, 100);
    }

    doc.save("report.pdf");
  };

  const exportWord = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const imgData = canvas.toDataURL("image/png");
      const imgBuffer = await fetch(imgData).then((res) => res.arrayBuffer());

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "Monthly Revenue Report",
                    bold: true,
                    size: 24,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "See the attached chart for the monthly revenue data.",
                    size: 20,
                  }),
                ],
              }),
              new Paragraph({
                children: [
                  new ImageRun({
                    data: imgBuffer,
                    transformation: { width: 600, height: 300 },
                  }),
                ],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.docx";
      link.click();
    }
  };

  return (
    <div className="h-full min-h-[80vh] w-full">
      <Title level={3} style={{ color: "white" }}>
        Thống kê doanh thu và người đăng ký
      </Title>

      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col span={4}>
          <Card style={{ backgroundColor: "#4CAF50", color: "#fff" }}>
            <Title level={4} style={{ color: "white" }}>
              Tổng tài khoản
            </Title>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {totals.totalUsers}
            </p>
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ backgroundColor: "#F44336", color: "#fff" }}>
            <Title level={4} style={{ color: "white" }}>
              Tổng doanh thu
            </Title>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {totals.totalRevenue.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: "20px" }}>
        <Col span={6}>
          <Select
            placeholder="Chọn năm"
            style={{ width: "100%" }}
            onChange={(value) => setSelectedYear(value)}
            allowClear
          >
            {[2022, 2023, 2024].map((year) => (
              <Option key={year} value={year}>
                {year}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={6}>
          <Select
            placeholder="Chọn tháng"
            style={{ width: "100%" }}
            onChange={(value) => setSelectedMonth(value)}
            allowClear
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month) => (
              <Option key={month} value={month}>
                {month}
              </Option>
            ))}
          </Select>
        </Col>
        <Col span={2}>
          <Button onClick={handleFilter} style={{ width: "100%" }}>
            Lọc
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 5 }}
            title={() => "Bảng thống kê doanh thu và người đăng ký"}
          />
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        style={{ marginTop: "20px", marginLeft: "5px", marginRight: "5px" }}
      >
        <Col span={12}>
          <div className="bg-white">
            <Title level={4} style={{ textAlign: "center" }}>
              Biểu đồ tổng doanh thu
            </Title>
            <Bar
              data={createChartData(
                "Tổng doanh thu",
                filteredData.map((data) => data.revenue),
                "#4CAF50",
              )}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="bg-white">
            <Title level={4} style={{ textAlign: "center" }}>
              Biểu đồ người đăng ký mới
            </Title>
            <Bar
              data={createChartData(
                "Người đăng ký mới",
                filteredData.map((data) => data.newUsers),
                "#FF6384",
              )}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </Col>
      </Row>

      <div className="flex w-full flex-row justify-center p-8">
        <div className="w-1/2">
          <div
            className="w-fit select-none rounded-lg border-2 p-2 text-lg font-semibold text-white hover:scale-105 hover:cursor-pointer"
            onClick={exportPDF}
          >
            Export as PDF
          </div>
        </div>
        <div
          className="w-fit select-none rounded-lg border-2 p-2 text-lg font-semibold text-white hover:scale-105 hover:cursor-pointer"
          onClick={exportWord}
        >
          Export as Word
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
