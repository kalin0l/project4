import React from "react";
import styles from './Step.module.scss'
import Grid from '@mui/material/Grid'
import { Container } from "@mui/material";


export default function Step({number=0,title='',description=''}){
    return (
        <Container>
            <Grid item>
                <span>{number}</span>
                <h1>{title}</h1>
                <p>{description}</p>
            </Grid>
        </Container>
    )
}