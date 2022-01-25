import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import Card from "../card/Card";
import { MenuItem } from "@mui/material";
import classes from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <Container>
      <div className={classes.container}>
        <h1>Trending</h1>
        <Select value={`This week`} label="This week">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </div>
      <Container sx={{ display: "flex" }}>
        <Grid item xs={3}>
          <Card
            title="Clock"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={1}
            currency="ETH"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            title="DOGE"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={2.3}
            currency="ETH"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            title="BTC"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={5}
            currency="ETH"
          />
        </Grid>
        <Grid item xs={3}>
          <Card
            title="Litecoin"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={10}
            currency="ETH"
          />
        </Grid>
      </Container>
    </Container>
  );
}
