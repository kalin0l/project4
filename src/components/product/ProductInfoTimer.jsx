import React from "react";
import classes from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  console.log(timeEnd, onTimeEnd);
  return (
    <div className={classes["product-info-timer"]}>
      <h1 className={classes.title}>Ends in</h1>
      {timeEnd && <div className={classes.timer}>
          <Countdown
            date={timeEnd}
            renderer={onTimeEnd}
            className={classes.active}
          />
        </div>}
      {!timeEnd && <div ></div>
       }
    </div>
  );
}
