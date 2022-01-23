import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Input from '@mui/material/Input';
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./Header.module.scss";
import Box from "@mui/material/Box";

export default function Header() {
  const ariaLabel = { 'aria-label': 'description' };
  return (
   
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Logo />
        </Grid>
        <Grid item xs={6}>
        <Input placeholder="Placeholder" fullWidth inputProps={ariaLabel} />
        </Grid>
        <Grid item xs>
          <Button underline="none" color="primary">
            Home
          </Button>
          <Button className={styles.$text_primary} sx={{ ml: 2, mr: 2 }}>
            Activity
          </Button>
          <Button variant="contained">Explore</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
