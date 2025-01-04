import React, { useState, useEffect } from "react";
import UserTag from "../../user/profile/UserTag";
import { useAuth } from "../../../store"; 
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AccountMG = () => {
  const { token } = useAuth(); // Lấy token từ Zustand store
  const navigate = useNavigate();
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [editingStates, setEditingStates] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 4 rows, 2 tags per row

  // Hàm để gọi API và lấy dữ liệu người dùng
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/user", {
          method: "GET",
          headers: {
            Accept: "*/*",
            Authorization: `Bearer ${token}`, // Thêm token vào header
          },
        });

        if (!response.ok) {
          throw new Error("Không thể lấy dữ liệu từ API");
        }

        const data = await response.json();
        setUserlist(data.data || []); // Cập nhật danh sách người dùng
        setLoading(false); // Thay đổi trạng thái sau khi dữ liệu đã được tải
      } catch (error) {
        setError(error.message); // Cập nhật trạng thái lỗi
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const filteredUserList = userlist.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const toggleEdit = (id) => {
    setEditingStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const updateUser = (id, updatedData) => {
    setUserlist((prevList) =>
      prevList.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      ),
    );
  };

  const paginatedUsers = filteredUserList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Hiển thị loading hoặc lỗi nếu có
  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div className="w-full h-full">
      <div>
        <h1 className="w-full text-center text-3xl font-semibold text-white">
          Thông tin người dùng
        </h1>
      </div>
      <div className="mt-4 flex justify-center w-full">
        <input
          type="text"
          placeholder="Tìm kiếm người dùng..."
          className="rounded-lg border border-blue-200 p-2 w-96"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="float float-right mr-8 mb-4 text-white font-semibold text-xl border-2 px-4 py-2 rounded-lg select-none hover:scale-105 hover:cursor-pointer"
        onClick={()=>{navigate(`/admin/addacc`)}}>
        Tạo tài khoản
      </div>
      <div className="mt-8 w-full h-full min-h-[80vh] flex flex-wrap justify-center items-center">
        {paginatedUsers.map((user) => (
          <div key={user.id} className="w-1/2 p-2 flex flex-auto justify-center mt-4">
            <UserTag
              user={user}
              isEdit={!!editingStates[user.id]}
              onEditToggle={() => toggleEdit(user.id)}
              onUpdateUser={(updatedData) => updateUser(user.id, updatedData)}
            />
          </div>
        ))}
      </div>
      <Stack spacing={2} className="pagination mt-4 flex flex-auto items-center justify-center">
        <Pagination
          count={Math.ceil(filteredUserList.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default AccountMG;
