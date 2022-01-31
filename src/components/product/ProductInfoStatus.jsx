import React from "react";
import classes from './ProductInfoStatus.module.scss'
import { Chip } from "@mui/material";



export default function ProductInfoStatus(){
    return (
        <div className={classes['product-info-status']}>
            <Chip label="Chip Outlined" variant="outlined" className={classes.status} >
                Status
            </Chip>

        </div>
    )
}