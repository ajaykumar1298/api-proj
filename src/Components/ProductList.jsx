import React from "react";
import { v4 as uuidv4 } from "uuid";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={uuidv4()} className="product" id={product.id}>
          <div className="title">{product.name}</div>
          {product.data
            ? Object.entries(product.data).map(([key, value], ind) => (
                <div key={ind} className="product-details">
                  <span className="product-label">{key}</span>
                  <span>{value}</span>
                </div>
              ))
            : ""}
        </div>
      ))}
    </>
  );
}

export default ProductList;
