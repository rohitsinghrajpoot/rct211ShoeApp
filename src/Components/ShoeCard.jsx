import React from "react";

//Get the shoe card data from props
const ShoeCard = ({ data }) => {
  let shoeId = null;
  return (
    <div data-testid={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-testid="shoe-card-image" src={data.image} alt="" />
      </div>
      <div>
        <div data-testid="shoe-name">{data.name}</div>
        <div data-testid="shoe-category">{data.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
