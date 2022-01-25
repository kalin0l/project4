import React from "react";
import { Card as CardMui } from "@mui/material";
import Avatar from "../avatar/Avatar";
import avatarImg from "../../../public/images/avatar.png";
import styles from "./Card.module.scss";
import NFT from "../../../public/images/nft.jpg";
import { Chip } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import millify from "millify";


export default function Card({
  name = "kalin",
  likes = 0,
  mediaUrl,
  price,
  currency = "ETH",
}) {
  return (
    <CardMui className={styles.card}>
      <Avatar url={mediaUrl} verified={true} />
      <img src={NFT.src} alt="nft" className={styles.media} />
      <div className={styles.details}>
        <div>
          <h5 className={styles.title}>{name}</h5>
          <span className={styles.price}>
            ~{millify(price)} {currency}
          </span>
        </div>
        <div>
          <Chip  label={millify(likes)} className={styles.likes} color="success" variant="outlined"/>
        </div>
      </div>
    </CardMui>
  );
}
