import React from "react";
import Container from "@mui/material/Container";
import Item from '@mui/material/ListItem'
import Grid from '@mui/material/Grid'
import Logo from "../logo/Logo";
import defaultLogo from '../../../public/images/logo.svg'




const Header = () => {
    return (
        <Grid container >
        <Grid item xs={4} md={4}>
          <Item>
          <Logo type={defaultLogo} />
          </Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        </Grid>
    )
}
export default Header;