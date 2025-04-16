import React from "react";

function InputForm({
  inputValue,
  setInputValue,
  jsonInputValue,
  setJsonInputValue,
  addProduct,
}) {
  return (
    <>
      <input
        type="text"
        className="name-input"
        placeholder="Product Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <textarea
        className="json-input"
        placeholder={`Product Data(JSON)\n{\n"data":{\n"color":"red",\n"capacity":"128gb",\n"price":"99000"\n}\n}`}
        rows={10}
        cols={40}
        value={jsonInputValue}
        onChange={(e) => setJsonInputValue(e.target.value)}
      ></textarea>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}

export default InputForm;
