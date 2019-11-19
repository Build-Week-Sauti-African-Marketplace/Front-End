import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";
import "./Product.css";

const Products = () => {
  const [original, setOriginal] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState();

  useEffect(_ => {
    axios
      .get("https://africanmarketplace.herokuapp.com/items/items")
      .then(res => {
        setOriginal([...res.data]);
        setProducts([...res.data]);
        setCategories(
          Array.from(new Set(res.data.map(product => product.category.type)))
        );
        console.log(res.data);
      });
  }, []);

  const handleClick = e => {
    const target = e.target;

    if (target.nodeName === "INPUT") {
      const categoryElements = document.getElementsByName("category");
      Array.from(categoryElements).forEach(ce => {
        if (ce !== target) ce.checked = false;
      });

      if (currentCategory === target.value) {
        setProducts([...original]);
        setCurrentCategory("");
      } else {
        setCurrentCategory(target.value);
        setProducts([
          ...original.filter(p => p.category.type === target.value)
        ]);
      }
    }
  };

  return (
    <>
      <div className="products-container">
        <div className="product-section">
          <div className="product-section-category">
            <h1>Category</h1>
            <ol onClick={handleClick}>
              {categories.map((e, i) => {
                return (
                  <div key={i}>
                    <input type="checkbox" id={e} name="category" value={e} />
                    <label htmlFor={e}>{e}</label>
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="products">
          {products.map(product => (
            <Product key={product.itemid} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
