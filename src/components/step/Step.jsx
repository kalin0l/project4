import React from "react";
import styles from './Step.module.scss'
import Grid from '@mui/material/Grid'
import { Container } from "@mui/material";
import { MenuItem } from "@mui/material";


export default function Step({number=0,title='',description=''}){
    return (
        <div>
            <Grid item className={styles.bg}>
                <div className={styles.number}>{number}</div>
            </Grid>
            <Grid item>
                <h1>{title}</h1>
                <p>{description}</p>

            </Grid>
        </div>
    )
}