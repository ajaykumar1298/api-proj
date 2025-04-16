import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./Components/ProductList";

function App() {
  let [products, setProducts] = useState([]);
  let [err, setErr] = useState(null);
  // let [filterProduct, setFilterProduct] = useState(product);

  useEffect(() => {
    fetch("https://react-api-951h.onrender.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className="container">
        <h1>Product Listing With Charts</h1>
        {/* form section */}
        <div className="form-container">
          <input type="text" placeholder="Product Name" />
          <textarea
            placeholder="Product Data(JSON)"
            rows={10}
            cols={40}
          ></textarea>
          <button>Add Product</button>
        </div>
        {/* show all product */}
        <div className="all-product">
          {products.length > 0 && <ProductList products={products} />}
        </div>
      </div>
    </>
  );
}

export default App;
