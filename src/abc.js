// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import ProductList from "./Components/ProductList";

// function App() {
//   let [products, setProducts] = useState([]);
//   let [err, setErr] = useState(null);
//   let [successMsg,setSuccessMsg]=useState(null)
//   let [inputValue,setInputValue]=useState("")
//   let [jsonInputValue,setJsonInputValue]=useState("")
//   // let [filterProduct, setFilterProduct] = useState(products);
//   let [colorFilter,setColorFilter]=useState([])
//   let [capacityFilter,setCapacityFilter]=useState([])
//   let [reload, setReload] = useState(false);

//   useEffect(() => {
//     fetch("https://react-api-951h.onrender.com/products")
//       .then((data) => data.json())
//       .then((data) => setProducts(data))
//       .catch((e) => console.log(e));

//   }, [reload]);

//   useEffect(()=>{
//     console.log("hey");
//     // let colorFilterArr=products.filter((pro)=>pro.data && pro.data["color"])
//     // console.log(colorFilterArr)
//   },[products])

//   const addProduct = async () => {
//     if (!inputValue.trim() || !jsonInputValue) {
//       setErr("Please enter value in Product Name or Product Details field.");
//       return;
//     }

//     let parsedJson;

//     try {
//       parsedJson = JSON.parse(jsonInputValue);
//     } catch (e) {
//       setErr("Invalid JSON format in Product Details field.");
//       return;
//     }

//     parsedJson.name = inputValue;

//     try {
//       const response = await fetch("https://react-api-951h.onrender.com/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(parsedJson),
//       });

//       const data = await response.json();

//       setErr(null);
//       setSuccessMsg("Product added successfully!");
//       setProducts(data);
//       setInputValue("");
//       setJsonInputValue("");
//       setReload(prev => !prev);
//       setTimeout(() => {
//         setSuccessMsg(null);
//       }, 1500);
//     } catch (error) {
//       setSuccessMsg(null);
//       setErr("Something went wrong. Please check your JSON data.");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <h1>Product Listing With Charts</h1>
//         {/* form section */}
//         <div className="form-container">
//           <input type="text" className="name-input" placeholder="Product Name" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}/>
//           <textarea
//           className="json-input"
//             placeholder="Product Data(JSON)"
//             rows={10}
//             cols={40} value={jsonInputValue} onChange={(e)=>setJsonInputValue(e.target.value)}
//           ></textarea>
//           <button onClick={addProduct}>Add Product</button>
//         </div>
//         {/* show error */}
//         {err && <div className="error">{err}</div>}
//         {/* show product add msg  */}
//         {successMsg && <div className="success-msg">{successMsg}</div>}
//         {/* show all product */}
//         <div className="all-product">
//           {products.length > 0 && <ProductList products={products} />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
