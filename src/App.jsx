import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import FilterCapacity from "./Components/FilterCapacity";
import FilterColor from "./Components/FilterColor";
import SimplePieChart from "./Components/SimplePieChart";
import ProductColorChart from "./Components/ProductColorChart";
import InputForm from "./Components/InputForm";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [capacityFilter, setCapacityFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const [err, setErr] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [jsonInputValue, setJsonInputValue] = useState("");
  const [reload, setReload] = useState(false);
  const [isload, setIsload] = useState(false);

  // Fetch products
  useEffect(() => {
    fetch("https://react-api-951h.onrender.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => console.log(e));
  }, [reload]);

  // Update filters
  useEffect(() => {
    const capacities = [
      ...new Set(products.map((p) => p?.data?.capacity).filter(Boolean)),
    ];

    const colors = [
      ...new Set(products.map((p) => p?.data?.color).filter(Boolean)),
    ];

    setCapacityFilter(capacities);
    setColorFilter(colors);

    let filtered = [...products];

    if (selectedCapacity) {
      filtered = filtered.filter((p) => p?.data?.capacity === selectedCapacity);
    }

    if (selectedColor) {
      filtered = filtered.filter((p) => p?.data?.color === selectedColor);
    }

    setFilteredProducts(filtered);
  }, [products, selectedCapacity, selectedColor]);

  const addProduct = async () => {
    if (!inputValue.trim() || !jsonInputValue.trim()) {
      setErr("Please enter value in Product Name or Product Details field.");
      return;
    }

    let parsedJson;

    try {
      parsedJson = JSON.parse(jsonInputValue);
    } catch (e) {
      setErr("Invalid JSON format in Product Details field.");
      return;
    }

    parsedJson.name = inputValue;

    try {
      const response = await fetch(
        "https://react-api-951h.onrender.com/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedJson),
        }
      );

      await response.json();

      setErr(null);
      setSuccessMsg("Product added successfully!");
      setInputValue("");
      setJsonInputValue("");
      setReload((prev) => !prev);

      setTimeout(() => {
        setSuccessMsg(null);
      }, 1500);
    } catch (error) {
      setSuccessMsg(null);
      setErr("Something went wrong. Please check your JSON data.");
    }
  };

  const handleCapacityChange = (e) => {
    setSelectedCapacity(e.target.value);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  function getArrFilter(key) {
    let result = [];

    products.forEach((product) => {
      if (product.data && product.data[key]) {
        const value = product.data[key];
        const existing = result.find((item) => item.name === value);

        if (existing) {
          existing.value += 1;
        } else {
          result.push({ name: value, value: 1 });
        }
      }
    });

    return result;
  }
  let capacityArr = getArrFilter("capacity");
  let colorArr = getArrFilter("color");

  return (
    <>
      <div className="container">
        <h1>Product Listing With Charts</h1>

        {/* form section */}
        <div className="form-container">
          <InputForm
            inputValue={inputValue}
            setInputValue={setInputValue}
            jsonInputValue={jsonInputValue}
            setJsonInputValue={setJsonInputValue}
            addProduct={addProduct}
          />
        </div>

        {/* show error */}
        {err && <div className="error">{err}</div>}
        {/* show product add msg  */}
        {successMsg && <div className="success-msg">{successMsg}</div>}
        {/* Filter section */}
        <div className="filter-container">
          {/* Capacity Filter */}
          <FilterCapacity
            capacityFilter={capacityFilter}
            handleCapacityChange={handleCapacityChange}
            selectedCapacity={selectedCapacity}
          />

          {/* Color Filter */}
          <FilterColor
            colorFilter={colorFilter}
            handleColorChange={handleColorChange}
            selectedColor={selectedColor}
          />
        </div>

        {/* show filtered products */}
        <div className="all-product">
          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p>No products found.</p>
          )}
        </div>

        {/* show graph */}
        {products.length > 0 && (
          <div className="all-chart">
            <SimplePieChart capacityArr={capacityArr} />
            <ProductColorChart colorArr={colorArr} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
