import React from "react";
import classes from './ProductInfoPrice.module.scss'


export default function ProductInfoPrice({amount=0,currency}){
    return (
        <div className={classes['product-info-price']}>
            <p>On sale for {amount}{currency}</p>
        </div>
    )
}