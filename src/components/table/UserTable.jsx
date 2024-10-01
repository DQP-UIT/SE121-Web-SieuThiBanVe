import React from "react";

const UserTable = ({ user }) => {
    return (
        <div className=" relative w-192 shadow-md">
            <div className="pb-5">
                <span className="font-medium text-2xl">Thông tin kiến trúc sư</span>
            </div>
            <div class="relative flex z-10 overflow-x-auto shadow-md ">
                <table class="w-full min-w-fit text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/uil_layer-group.svg" alt="ID" className="object-fill" />
                            </th>
                            <th scope="row" class=" max-w-28 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-300">
                                ID
                            </th>
                            <td class=" py-2 max-w-52 bg-gray-300 text-gray-900">
                                {user._id}
                            </td>
                            <div className="w-3"></div>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/uil_layer-group.svg" alt="ID" className="object-fill" />
                            </th>
                            <td class=" max-w-28 py-2 bg-gray-300 text-gray-900 font-medium ">
                                Số bản vẽ
                            </td>
                            <td class=" py-2 max-w-52 bg-gray-300 text-gray-900">
                                {user.numofdesign}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-white">
                                <img src="src/assets/mynaui_rectangle-vertical.svg" alt="ID" className="object-fill" />
                            </th>
                            <th scope="row" class="max-w-28 py-2 font-medium text-gray-900 whitespace-nowrap bg-white">
                                Họ và tên
                            </th>
                            <td class=" py-2 max-w-52 text-gray-900 bg-white">
                                {user.name}
                            </td>
                            <div className="w-3"></div>
                            <th scope="row" className="w-fit px-4 py-2 bg-white">
                                <img src="src/assets/hugeicons_web-design-02.svg" alt="ID" className="object-fill" />
                            </th>
                            <td class="max-w-28 py-2 bg-white text-gray-900 font-medium">
                                Email
                            </td>
                            <td class=" py-2 max-w-52 text-gray-900 bg-white ">
                                {user.email}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/hugeicons_square.svg" alt="ID" className="object-fill" />
                            </th>
                            <th scope="row" class="max-w-28 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-300">
                                Ngày sinh
                            </th>
                            <td class=" py-2 max-w-52 text-gray-900 bg-gray-300">
                                {user.birthday}
                            </td>
                            <div className="w-3"></div>
                            <th scope="row" className="w-fit px-4 py-2 bg-gray-300">
                                <img src="src/assets/ph_info.svg" alt="ID" className="object-fill" />
                            </th>
                            <td class="max-w-28 py-2  bg-gray-300 text-gray-900 font-medium">
                                Số điện thoại
                            </td>
                            <td class=" py-2 max-w-52 text-gray-900 bg-gray-300">
                                {user.phoneNumber}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default UserTable