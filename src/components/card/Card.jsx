import React from "react";
import { Card as CardMui } from "@mui/material";
import Avatar from "../avatar/Avatar";
import avatarImg from "../../../public/images/avatar.png";
import styles from "./Card.module.scss";
import NFT from "../../../public/images/nft.jpg";
import millify from "millify";

export default function Card({ name='kalin', likes = 0, mediaUrl, price='12200', currency='ETH' }) {
  return (
    <CardMui className={styles.card}>
      <Avatar url={avatarImg} verified={true} />
      <img src={NFT.src} alt="nft" className={styles.media}/>
      <div className={styles.details}>
        <div>
          <h5 className={styles.title}>{name}</h5>
          <span className={styles.price}>~{millify(price,{
             units:['k','','B']
          })}{" "}{currency}</span>
        </div>
        <div>
          <span className={styles.likes}>{millify(likes,{
             units:['','k','B']
          })}</span>
        </div>
      </div>
    </CardMui>
  );
}
