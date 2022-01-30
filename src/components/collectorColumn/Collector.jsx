import React from "react";
import User from "../user/User";
import styles from "./CollectorsColumn.module.scss";

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
