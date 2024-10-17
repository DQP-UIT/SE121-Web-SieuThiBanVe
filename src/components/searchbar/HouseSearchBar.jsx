import React, { useState } from "react";

const HouseSearchBar = ({
  listofkind,
  listofflr,
  listoflength,
  listofwidth,
}) => {
  const [kindofhouse, setkindofhouse] = useState("");
  const [numberofflr, setnumberofflr] = useState("");
  const [length, setlength] = useState("");
  const [width, setwidth] = useState("");

  return (
    <div className="min-w-fit">
      <div className="flex h-fit w-1/2 min-w-fit flex-row justify-center space-x-5 rounded-full border-2 border-solid border-gray-900 p-4">
        <div className="min-w-28 basis-1/4">
          <select
            value={kindofhouse}
            onChange={(e) => setkindofhouse(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="" disabled>
              Loại nhà
            </option>
            {listofkind.map((kind) => (
              <option key={kind} value={kind}>
                {kind}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-28 basis-1/4">
          <select
            value={numberofflr}
            onChange={(e) => setnumberofflr(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="" disabled>
              Số tầng
            </option>
            {listofflr.map((flr) => (
              <option key={flr} value={flr}>
                {flr}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-28 basis-1/4">
          <select
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="" disabled>
              Chiều dài
            </option>
            {listoflength.map((len) => (
              <option key={len} value={len}>
                {len}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-28 basis-1/4">
          <select
            value={width}
            onChange={(e) => setwidth(e.target.value)}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="" disabled>
              Chiều rộng
            </option>
            {listofwidth.map((wid) => (
              <option key={wid} value={wid}>
                {wid}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-16 basis-1/12">
          <div className="relative h-full">
            <img
              src="/src/assets/streamline_magnifying-glass-circle.svg"
              alt="find"
              className="absolute inset-y-0 right-0 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseSearchBar;
