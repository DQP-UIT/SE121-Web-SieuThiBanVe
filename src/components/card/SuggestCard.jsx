import React from "react";

const SuggestCard = ({ imgUrl, content, desc }) => {
  return (
    <div className="grid h-60 w-60 justify-items-center border-2 border-gray-900 bg-gray-300 p-4 hover:cursor-pointer hover:scale-105 rounded-lg">
      <img src={imgUrl} className="h-24 w-24" alt="House" />
      <span className="text-lg font-semibold">{content}</span>
      <p className="h-20 w-52 overflow-hidden text-ellipsis break-words text-center">
        {desc}
      </p>
    </div>
  );
};

export default SuggestCard;
