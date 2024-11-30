import React, { useState, useRef, useCallback } from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import UserTag from "./UserTag";

const AccountMG = () => {
  const [userlist, setUserlist] = useState([
    {
      id: "1",
      fullName: "John Doe",
      dob: "1990-01-01",
      activatedDate: "2020-01-01",
      email: "john.doe@example.com",
      phonenumber: "1234567890",
      designs: 5,
      role: "user",
    },
    {
      id: "2",
      fullName: "Jane Smith",
      dob: "1985-05-15",
      activatedDate: "2019-05-15",
      email: "jane.smith@example.com",
      phonenumber: "0987654321",
      designs: 3,
      role: "user",
    },
    {
      id: "3",
      fullName: "Jane Smith",
      dob: "1985-05-15",
      activatedDate: "2019-05-15",
      email: "jane.smith@example.com",
      phonenumber: "0987654321",
      designs: 3,
      role: "user",
    },
    {
      id: "4",
      fullName: "Jane Smith",
      dob: "1985-05-15",
      activatedDate: "2019-05-15",
      email: "jane.smith@example.com",
      phonenumber: "0987654321",
      designs: 3,
      role: "user",
    },
  ]);

  const [editingStates, setEditingStates] = useState({});

  const listRef = useRef();

  const getItemSize = useCallback(
    (index) => {
      const item = userlist[index];
      return editingStates[item.id] ? 450 : 360;
    },
    [userlist, editingStates],
  );

  const toggleEdit = (id) => {
    setEditingStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
    const index = userlist.findIndex((user) => user.id === id);
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
    const user = userlist[index];
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

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div>
        <h1 className="w-full text-center text-3xl font-semibold">
          Thông tin người dùng
        </h1>
      </div>
      <div
        className="items-top mt-8 flex flex-auto justify-center"
        style={{ height: "calc(100% - 50px)", width: "50%" }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <List
              ref={listRef}
              height={height}
              itemCount={userlist.length}
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
