import React from "react";
import { Card as CardMui } from '@mui/material';
import Avatar from "../avatar/Avatar";
import avatarImg from "../../../public/images/avatar.png";
import styles from './Card.module.scss'



export default function Card({name,likes=0,mediaUrl,price,currency}) {
    return (
        <CardMui className={styles.card}>
            <Avatar url={avatarImg}/>
            <h5 className={styles.title}></h5>
            <span className={styles.price}></span>
            <span className={styles.likes}></span>
        </CardMui>
    )
}