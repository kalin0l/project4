import React from "react";
import styles from "./How.module.scss";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import Step from "../step/Step";

export default function How({
  description = "",
  title = "",
  items = [],
  link = "",
}) {
  return (
    <Container sx={{ display: "flex" }}>
      <Container>
        <h1>HOW IT WORKS</h1>
        <p>jdfsdjfhsgskgshfskd</p>
        <Button sx={{color:'text.primary',bgcolor:'secondary.main'}}><a href={link}>Learn More</a></Button>
      </Container>
      <Grid container>
        <Step title="first"  description="lalalla" number={1} />
        <Step title="second" description="lalalla" number={2} />
        <Step title="third" description="lalalla" number={3} />
      </Grid>
    </Container>
  );
}
