import React from "react";
import styles from './Footer.module.scss'
import Grid from '@mui/material/Grid'
import Logo from "../logo/Logo";
import { Button } from "@mui/material";


export default function Footer(){
    return (
        <Grid container sx={{ bgcolor: 'text.secondary' }}>
            <Grid items xs={4} >
                <Logo type='muted'/>
            </Grid>
            <Grid items xs={4}>
                Kalin Aleksiev
            </Grid>
            <Grid items xs={4}>
                <Button className={styles.$text_primary}>Privacy Policy</Button>
                <Button className={styles.$text_primary}>Cookie Policy</Button>
            </Grid>
        </Grid>

    )
}