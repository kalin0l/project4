import React from "react";
import styles from "./How.module.scss";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import Step from "../step/Step";

export default function How({description = "", title = "",items = [],link = "",}) {
    console.log(items);
  return (
    <Container sx={{ display: "flex" }}>
      <Container>
        <h1>HOW IT WORKS</h1>
        <p>jdfsdjfhsgskgshfskd</p>
        <Button sx={{color:'text.primary',bgcolor:'secondary.main'}}><a href={link}>Learn More</a></Button>
      </Container>
      <Grid container>
        {items.map((item,i) => {
            return <Step key={i} number={i + 1} {...item} />

        })}
      </Grid>
    </Container>
  );
}
