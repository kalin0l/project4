import React from "react";
import styles from "./Auctions.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Select from '@mui/material/Select'
import Card from '../card/Card'
import { MenuItem } from "@mui/material";

export default function Auctions({ cards = [] }) {
  return (
    <Container>
      <div className={styles.container}>
        <h1>Live Auctions</h1>
        <Select value={`This week`} label="This week">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </div>
      <Container sx={{ display: "flex" }}>
        <Grid items xs={3}>
          <Card  name='' mediaUrl='' price='100' currency='' timeLeft={5}/>
        </Grid>
        <Grid items xs={3}>
          <Card />
        </Grid>
        <Grid items xs={3}>
          <Card />
        </Grid>
        <Grid items xs={3}>
          <Card />
        </Grid>
      </Container>
    </Container>
  );
}
