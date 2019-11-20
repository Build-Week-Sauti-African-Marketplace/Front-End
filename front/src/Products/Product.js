import React from "react";

export default function Product({ product }) {
  const {
    category,
    currency,
    description,
    location,
    name,
    price,
    user
  } = product;
  return (
    <div className="product">
      <h1>{name}</h1>
      <dl>
        <dt>Value in USD</dt>
        <dd>{currency.valueInUSD}</dd>
        <dt>Price</dt>
        <dd>
          {price} {currency.name}
        </dd>
        <dt>Location</dt>
        <dd>{location}</dd>
        <dt>User</dt>
        <dd>{user.username}</dd>
        <dt>Description</dt>
        <dd>{description}</dd>
        <dt>Category</dt>
        <dd>{category.type}</dd>
        <dt>Currency</dt>
        <dd>code: {currency.code}</dd>
        <dd>name: {currency.name}</dd>
        <dd>symbol: {currency.symbol}</dd>
      </dl>
    </div>
  );
}
