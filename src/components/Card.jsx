import React from "react";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description }) => {
  return (
    <div className="min-h-72 bg-amber-50 shadow-xl rounded-lg">
      <img src={image} alt="" />
      <div className="p-5">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-gray-600 py-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
