import React, { useState } from "react";

const HouseSearchBar = ({ listofkind, listofflr, listoflength, listofwidth }) => {
    const [kindofhouse, setkindofhouse] = useState("");
    const [numberofflr, setnumberofflr] = useState("");
    const [length, setlength] = useState("");
    const [width, setwidth] = useState("");

    return (
        <div>
            <div className="w-1/2 h-fit flex flex-row border-solid border-2 border-gray-900 rounded-full p-4 space-x-5 justify-center">
                <div className="basis-1/4 ">
                    <select
                        value={kindofhouse}
                        onChange={(e) => setkindofhouse(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="" disabled>Loại nhà</option>
                        {listofkind.map((kind) => (
                            <option key={kind} value={kind}>{kind}</option>
                        ))}
                    </select>
                </div>
                <div className="basis-1/4  ">
                    <select
                        value={numberofflr}
                        onChange={(e) => setnumberofflr(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="" disabled>Số tầng</option>
                        {listofflr.map((flr) => (
                            <option key={flr} value={flr}>{flr}</option>
                        ))}
                    </select>
                </div>
                <div className="basis-1/4  ">
                    <select
                        value={length}
                        onChange={(e) => setlength(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="" disabled>Chiều dài</option>
                        {listoflength.map((len) => (
                            <option key={len} value={len}>{len}</option>
                        ))}
                    </select>
                </div>
                <div className="basis-1/4  ">
                    <select
                        value={width}
                        onChange={(e) => setwidth(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                        <option value="" disabled>Chiều rộng</option>
                        {listofwidth.map((wid) => (
                            <option key={wid} value={wid}>{wid}</option>
                        ))}
                    </select>
                </div>
                <div className="basis-1/12">
                    <div className="relative h-full">
                        <img src="/src/assets/streamline_magnifying-glass-circle.svg" alt="find" className="h-full absolute inset-y-0 right-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HouseSearchBar;