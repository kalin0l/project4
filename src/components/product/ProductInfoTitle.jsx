import React from "react";
import classes from "./ProductInfoTitle.module.scss";
import { Typography } from "@mui/material";

export default function ProductInfoTitle({ text }) {
  return (
    <div className={classes["product-info-title"]}>
      <Typography className={classes.title}>
        <h1>{text}</h1>
      </Typography>
    </div>
  );
}
