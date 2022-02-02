import React from "react";
import classes from "./ProductInfoCreator.module.scss";
import User from "../user/User";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classes["product-info-creator"]}>
      <div className={classes["user-container"]}>
        <User name={name} verified={true} avatar="a" />
      </div>
    </div>
  );
}
