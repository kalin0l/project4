import React from "react";
import badge from "../../../public/images/verified.svg";
import styles from "./Avatar.module.scss";

export default function Avatar({ url, size = 90, verified = false }) {
  return (
    <div
      className={styles.avatar}
      style={{ width: size + "px", height: size + "px" }}
    >
      <img src={url.src} alt="avatar" className={styles.image} />
      {verified && <img src={badge.src} alt="avatar" className={styles.badge} />}
    </div>
  );
}
