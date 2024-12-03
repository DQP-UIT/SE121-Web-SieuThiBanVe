import React from "react";
import { VariableSizeGrid } from "react-window";
import ProductCard from "../card/Card";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products }) => {
  const columnCount = 4;
  const rowCount = Math.ceil(products.length / columnCount);
  const navigate = useNavigate();
  const gap = 35;

  const getColumnWidth = (index) => {
    return window.innerWidth * 0.18;
  };

  const getRowHeight = (index) => {
    return window.innerHeight * 0.6;
  };

  const totalWidth = columnCount * getColumnWidth() + (columnCount - 1) * gap;

  return (
    <div className="flex h-screen min-h-fit items-center justify-center">
      <VariableSizeGrid
        className="product-list"
        columnCount={columnCount}
        columnWidth={getColumnWidth}
        height={window.innerHeight*1.2}
        rowCount={rowCount}
        rowHeight={getRowHeight}
        width={totalWidth}
      >
        {({ columnIndex, rowIndex, style }) => {
          const productIndex = rowIndex * columnCount + columnIndex;
          if (productIndex >= products.length) {
            return null; // Không render nếu không có sản phẩm
          }
          const product = products[productIndex];
          return (
            <div
              style={{
                ...style,
                left: style.left + gap * columnIndex,
              }}
              onClick={() => {
                navigate(`product/${product.id}`);
              }}
              className="product-list-item"
            >
              <ProductCard banve={product} />
            </div>
          );
        }}
      </VariableSizeGrid>
    </div>
  );
};

export default ProductList;
