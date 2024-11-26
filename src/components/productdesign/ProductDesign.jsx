import React from "react";

const ProductDesign = ({ images }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-medium mb-4">Danh sách bản vẽ 2D</h2>
            <div className="flex flex-col space-y-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden">
                        <img
                            className="w-1/2 h-auto max-h-[calc(300vh/4)] rounded-lg ml-24 border"
                            src={image}
                            alt={`Design ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDesign;