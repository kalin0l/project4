import React from "react";
import CollectorColumn from "./CollectorColumn";
import Select from '@mui/material/Select'

export default function TopCollectors({ collectors }) {
  return (
    <>
    <h1>Top Collectors</h1>
    <Select></Select>
      <CollectorColumn items={collectors} />
      <CollectorColumn items={collectors} />
      <CollectorColumn items={collectors} />
      <CollectorColumn items={collectors} />
    </>
  );
}
