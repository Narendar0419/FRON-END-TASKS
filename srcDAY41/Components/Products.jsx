import { useState } from "react";

function Products() {

  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    stock: 10
  });

  function changeProduct() {
    setProduct({
      name: "Mobile",
      price: 25000,
      category: "Electronics",
      stock: 20
    });
  }

  return (
    <>
      <h1>Product Details</h1>

      <p>Product Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>

      <button onClick={changeProduct}>
        Change Product
      </button>
    </>
  );
}

export default Products;