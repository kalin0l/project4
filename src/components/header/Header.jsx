import React from "react";
import Item from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import defaultLogo from "../../../public/images/logo.svg";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "@mui/material";

export default function Header(){
  return (
    <Grid container>
      <Grid item xs={4} md={4}>
        <Item>
          <Logo type={defaultLogo} />
        </Item>
      </Grid>
      <Grid item xs={4} md={4}>
        <Item>
          <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Text field"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Item>
      </Grid>
      <Grid item xs={4} md={4}>
        <Item>
         <Link underline="none" color="primary" >Home</Link>
         <Link underline="none" color="primary" sx={{ml:2,mr:2}} >Activity</Link>
          <Button variant="contained">Explore</Button>
        </Item>
      </Grid>
    </Grid>
  );
};
