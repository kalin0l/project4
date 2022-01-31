import React from "react";
import classes from "./ProductInfoTitle.module.scss";
import { Typography } from "@mui/material";
import classNames from 'classnames'

export default function ProductInfoTitle({ text }) {
  return (
    <div className={classNames(classes['product-info-title'])}>
      <Typography className={classes.title}>
        <h1>{text}</h1>
      </Typography>
    </div>
  );
}
