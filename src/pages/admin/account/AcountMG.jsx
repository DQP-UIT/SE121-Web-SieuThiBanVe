import React, { useState, useRef, useCallback, useEffect } from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import UserTag from "./UserTag";
import { useAuth } from "../../../store"; // Import store để lấy token

const AccountMG = () => {
  const { token } = useAuth(); // Lấy token từ Zustand store
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi
  const [editingStates, setEditingStates] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const listRef = useRef();

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
  }, []);

  const filteredUserList = userlist.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getItemSize = useCallback(
    (index) => {
      const item = filteredUserList[index];
      return editingStates[item.id] ? 450 : 360;
    },
    [filteredUserList, editingStates],
  );

  const toggleEdit = (id) => {
    setEditingStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
    const index = filteredUserList.findIndex((user) => user.id === id);
    listRef.current.resetAfterIndex(index);
  };

  const updateUser = (id, updatedData) => {
    setUserlist((prevList) =>
      prevList.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user,
      ),
    );
  };

  const Row = ({ index, style }) => {
    const user = filteredUserList[index];
    return (
      <div style={style}>
        <UserTag
          user={user}
          isEdit={!!editingStates[user.id]}
          onEditToggle={() => toggleEdit(user.id)}
          onUpdateUser={(updatedData) => updateUser(user.id, updatedData)}
        />
      </div>
    );
  };

  // Hiển thị loading hoặc lỗi nếu có
  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi: {error}</div>;
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div>
        <h1 className="w-full text-center text-3xl font-semibold">
          Thông tin người dùng
        </h1>
      </div>
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          placeholder="Tìm kiếm người dùng..."
          className="rounded-lg border border-gray-300 p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div
        className="items-top mt-8 flex flex-auto justify-center"
        style={{ height: "calc(100% - 150px)", width: "50%" }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={listRef}
              height={height}
              itemCount={filteredUserList.length}
              itemSize={getItemSize}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default AccountMG;
