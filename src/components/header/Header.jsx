import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import styles from "./Header.module.css";
import { styled } from '@mui/material/styles';

export default function Header() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={4} md={4}>
          <Item>
            <Logo type="default" />
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
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
