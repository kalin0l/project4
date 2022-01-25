import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from "@mui/material";
import Card from "../card/Card";
import classes from "./Trending.module.scss";

export default function Trending({ cards = [] }) {
  return (
    <Container>
      <h1>Trending</h1>
      <Grid container fullWidth>
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
      </Grid>
    </Container>
  );
}
