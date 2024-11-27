import React, { useEffect, useState } from "react";
import SuggestCard from "./SuggestCard";
import axiosInstance from "../../axios";

const SuggestCardList = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("product-type", { params: { page: 1, pageSize: 100 } })
      .then((res) => {
        setCards(
          res.data.data.map((v) => ({
            imgUrl: "ph_house-line.svg",
            content: v.name,
            desc: v.description,
          })),
        );
      });
  }, []);

  return (
    <div className="relative mb-8 mt-8 flex h-fit items-center justify-center">
      <div className="flex space-x-20">
        {cards.map((card, index) => (
          <SuggestCard
            key={index}
            imgUrl={card.imgUrl}
            content={card.content}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestCardList;
