import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./Header.module.css";

export default function Header() {
  
  return (
      <Grid container maxWidth="xl">
        <Grid item xs={4} md={4}>
            <Logo type="default" />
        </Grid>
        <Grid item xs={4} md={4}>
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
        </Grid>
        <Grid item xs={4} md={4}>
            <Button underline="none" color="primary">
              Home
            </Button>
            <Button
              underline="none"
              className={styles.$text_primary}
              sx={{ ml: 2, mr: 2 }}
            >
              Activity
            </Button>
            <Button variant="contained">Explore</Button>
        </Grid>
      </Grid>
  );
}
