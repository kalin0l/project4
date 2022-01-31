import React from "react";
import CollectorColumn from "./CollectorColumn";
import Select from '@mui/material/Select'
import _ from 'lodash'


export default function TopCollectors({ collectors }) {

  const collectors1 = _.chunk(collectors,3)

  return (
    <>
    <h1>Top Collectors</h1>
    <Select></Select>
      <CollectorColumn items={collectors1} />
      <CollectorColumn items={collectors1} />
      <CollectorColumn items={collectors1} />
      <CollectorColumn items={collectors1} />
    </>
  );
}
