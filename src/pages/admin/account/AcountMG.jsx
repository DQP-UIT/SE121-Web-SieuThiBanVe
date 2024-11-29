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

  const Row = ({ index, style }) => {
    const user = userlist[index];
    return (
      <div style={style}>
        <UserTag user={user} isEdit={!!editingStates[user.id]} />
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
              height={800}
              itemCount={userlist.length}
              itemSize={getItemSize}
              width={800}
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
