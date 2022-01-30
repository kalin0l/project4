import React from "react";
import User from "../user/User";
import classes from "./CollectorColumn.module.scss";

export default function Collector(props) {
  console.log(props);
  return (
    <>
      <User
        name={props.name}
        avatar={props.avatar}
        info={props.nftsCount}
        verified={props.verified}
      />
    </>
  );
}
