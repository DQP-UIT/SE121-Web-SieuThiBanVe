import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'; // Import file CSS

const ProductCard = ({ banve }) => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("here");
    }, []);

    const handleOnClick = () => {
    };

    return (
        <div
            className="product-card"
            onClick={handleOnClick}
        >
            <img className="product-image" src={banve.img} alt={banve.name} />

            <div className="product-details">
                <p className="designer-text">Được thiết kế bởi designer</p>

                <div className="product-name">{banve.name}</div>

                <div className="product-info">
                    Số tầng {banve.tang} | Số phòng ngủ {banve.phongngu} | Diện tích {banve.dientich} m²
                </div>

                <p className="product-price">{banve.price.toLocaleString()} VND</p>
            </div>
        </div>
    );
};

export default ProductCard;