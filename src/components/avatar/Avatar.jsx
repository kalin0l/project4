import React from "react";
import badge from "../../../public/images/verified.svg";
import styles from "./Avatar.module.scss";

export default function Avatar({ url }) {
  const size = 90;
  return (
    <div className="avatar" style={{ width: size + "px", height: size + "px" }}>
      <img src={url.src} alt="avatar" className="image" />
      <img src={badge.src} alt="avatar"  />
    </div>
  );
}
