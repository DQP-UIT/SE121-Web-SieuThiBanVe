import React from "react";
import { VariableSizeGrid } from "react-window";
import ProductCard from "../card/Card";
import './ProductList.css'; // Import file CSS

const ProductList = ({ products }) => {
    const columnCount = 4; // Số cột tối đa mỗi hàng
    const rowCount = Math.ceil(products.length / columnCount); // Số hàng

    const getColumnWidth = (index) => {
        return window.innerWidth * 0.18;
    };

    const getRowHeight = (index) => {
        return window.innerHeight * 0.5;
    };

    return (
        <div>
            <VariableSizeGrid
                className="product-list"
                columnCount={columnCount}
                columnWidth={getColumnWidth}
                height={window.innerHeight} // Chiều cao của grid
                rowCount={rowCount}
                rowHeight={getRowHeight}
                width={window.innerWidth} // Chiều rộng của grid
            >
                {({ columnIndex, rowIndex, style }) => {
                    const productIndex = rowIndex * columnCount + columnIndex;
                    if (productIndex >= products.length) {
                        return null; // Không render nếu không có sản phẩm
                    }
                    const product = products[productIndex];
                    return (
                        <div style={style} className="product-list-item">
                            <ProductCard banve={product} />
                        </div>
                    );
                }}
            </VariableSizeGrid>
        </div>
    );
};

export default ProductList;