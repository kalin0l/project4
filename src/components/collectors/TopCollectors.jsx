import React from "react";
import CollectorColumn from "./CollectorColumn";
import Select from '@mui/material/Select'

export default function TopCollectors({ items }) {
  return (
    <>
    <h1>Top Collectors</h1>
    <Select></Select>
      <CollectorColumn items={items} />
      <CollectorColumn items={items} />
      <CollectorColumn items={items} />
      <CollectorColumn items={items} />
    </>
  );
}
