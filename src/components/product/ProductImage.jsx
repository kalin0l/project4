import React from "react";
import classes from "./ProductImage.module.scss";

export default function ProductImage({ url }) {
  return (
    <div className={classes["product-image"]}>
      <img src={url} alt="img" className={classes.image} />
    </div>
  );
}
