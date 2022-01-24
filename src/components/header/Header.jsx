import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent='center'
      sx={{ bgcolor: 'text.secondary' }}
      fullWidth
    >
      <Grid item xs={4}>
        <Logo />
      </Grid>
      <Grid item xs={4}>
        <TextField
          sx={{ bgcolor: "text.primary" }}
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
      <Grid item xs={4}>
        <Button>Home</Button>
        <Button className={styles.$text_primary} sx={{ ml: 2, mr: 2 }}>
          Activity
        </Button>
        <Button variant="contained">Explore</Button>
      </Grid>
    </Grid>
  );
}
