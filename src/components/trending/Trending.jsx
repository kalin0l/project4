import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from "@mui/material";
import Card from "../card/Card";

export default function Trending({ cards = [] }) {
  return (
    <Container>
      <h1>Trending</h1>
      <Grid container fullWidth>

        <Grid item>
          <Card
            name="Ivy"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={1}
            currency="ETH"
          />
        </Grid>
        <Grid item>
          <Card
            name="Judie"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={2.3}
            currency="ETH"
          />
        </Grid>
        <Grid item>
          <Card
            name="Juniper"
            url="images/avatar.png"
            verified={true}
            mediaUrl="images/nft.jpg"
            price={5}
            currency="ETH"
          />
        </Grid>
        <Grid item>
          <Card
            name="Maple"
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
