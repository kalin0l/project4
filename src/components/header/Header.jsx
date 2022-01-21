import React from "react";
import { Grid } from "@mui/material";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, ListItem } from "@mui/material";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <Grid container>
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
        <Link underline="none" color="primary">
          Home
        </Link>
        <Link
          underline="none"
          className={styles.$text_primary}
          sx={{ ml: 2, mr: 2 }}
        >
          Activity
        </Link>
        <Button variant="contained">Explore</Button>
      </Grid>
    </Grid>
  );
}
