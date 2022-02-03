import React from "react";
import classes from "./ProductInfoTimer.module.scss";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  console.log(timeEnd, onTimeEnd);
  return (
    <div className={classes["product-info-timer"]}>
      <h1 className={classes.title}>Ends in</h1>
      {!timeEnd ? (
        <div className={classes.timer}>timer-a</div>
      ) : (
        <div>
          <Countdown
            date={timeEnd}
            onComplete={onTimeEnd}
            className={classes.active}
          ></Countdown>
        </div>
      )}
    </div>
  );
}
