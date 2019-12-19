import React from "react";
import "./menuItem.scss";

const MenuItem = ({ title, imageURL, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
