import React from "react";
import classes from "./ProductInfo.module.scss";
import Stack from "@mui/material/Stack";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoStatus from "./ProductInfoStatus";
import Grid from "@mui/material/Grid";
import ProductInfoTitle from "./ProductInfoTitle";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={classes["product-info"]}>
      <ProductInfoTitle text={title} />
      <Grid container>
        <Grid item xs={5}>
          <ProductInfoCreator
            name="kalin"
            verified={true}
            style="--aspect-ratio: 6/5;"
          />
        </Grid>
        <Grid item xs={7}>
          <ProductInfoTimer
            timeEnd={timeEnd}
            onTimeEnd={onTimeEnd}
            style="--aspect-ratio: 7/5;"
          />
        </Grid>
      </Grid>
      <Stack spacing={2} className={classes.stats}>
        <ProductInfoPrice currency="ETH" />
        <ProductInfoLikes />
      </Stack>
      {isLive && <ProductInfoStatus />}
    </div>
  );
}
