import React from "react";

const UserTable = ({ user }) => {
  return (
    <div className="relative w-192 shadow-md">
      <div className="pb-5">
        <span className="text-2xl font-medium">Thông tin kiến trúc sư</span>
      </div>
      <div class="relative z-10 flex overflow-x-auto shadow-md">
        <table class="w-full min-w-fit text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <tbody>
            <tr>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="src/assets/uil_layer-group.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                class="max-w-28 whitespace-nowrap bg-gray-300 py-2 font-medium text-gray-900"
              >
                ID
              </th>
              <td class="max-w-52 bg-gray-300 py-2 text-gray-900">
                {user._id}
              </td>
              <div className="w-3"></div>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="src/assets/uil_layer-group.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <td class="max-w-28 bg-gray-300 py-2 font-medium text-gray-900">
                Số bản vẽ
              </td>
              <td class="max-w-52 bg-gray-300 py-2 text-gray-900">
                {user.numofdesign}
              </td>
            </tr>
            <tr>
              <th scope="row" className="bg-gray-white w-fit px-4 py-2">
                <img
                  src="src/assets/mynaui_rectangle-vertical.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                class="max-w-28 whitespace-nowrap bg-white py-2 font-medium text-gray-900"
              >
                Họ và tên
              </th>
              <td class="max-w-52 bg-white py-2 text-gray-900">{user.name}</td>
              <div className="w-3"></div>
              <th scope="row" className="w-fit bg-white px-4 py-2">
                <img
                  src="src/assets/hugeicons_web-design-02.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <td class="max-w-28 bg-white py-2 font-medium text-gray-900">
                Email
              </td>
              <td class="max-w-52 bg-white py-2 text-gray-900">{user.email}</td>
            </tr>
            <tr>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="src/assets/hugeicons_square.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <th
                scope="row"
                class="max-w-28 whitespace-nowrap bg-gray-300 py-2 font-medium text-gray-900"
              >
                Ngày sinh
              </th>
              <td class="max-w-52 bg-gray-300 py-2 text-gray-900">
                {user.birthday}
              </td>
              <div className="w-3"></div>
              <th scope="row" className="w-fit bg-gray-300 px-4 py-2">
                <img
                  src="src/assets/ph_info.svg"
                  alt="ID"
                  className="object-fill"
                />
              </th>
              <td class="max-w-28 bg-gray-300 py-2 font-medium text-gray-900">
                Số điện thoại
              </td>
              <td class="max-w-52 bg-gray-300 py-2 text-gray-900">
                {user.phoneNumber}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
