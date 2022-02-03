import React from "react";
import classes from './ProductInfoTimer.module.scss'
import Countdown from 'react-countdown'



export default function ProductInfoTimer({timeEnd,onTimeEnd}){
    return (
        <div className={classes['product-info-timer']}>
            <div>

            </div>

            {timeEnd === null && <div className={classes.timer}>
                <Countdown date={onTimeEnd}>
                <h1 className={classes.title}>Ends in</h1>

                </Countdown>
            </div>}
        </div>
    )
}