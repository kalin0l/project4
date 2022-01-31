import React from "react";
import classes from './ProductInfoStatus.module.scss'
import { Chip } from "@mui/material";



export default function ProductInfoStatus(){
    return (
        <div className={classes['product-info-status']}>
            <Chip label="status" variant="outlined"  className={classes.status}/>

        </div>
    )
}