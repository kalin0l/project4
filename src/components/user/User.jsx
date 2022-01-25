import React from "react";
import Avatar from '../avatar/Avatar'
import styles from './User.module.scss'
import avatarImg from "../../../public/images/avatar.png";



export default function User({name="",info='',avatar='',size=55,verified=false}){
    return (
        <div classname={styles.user}>
            <Avatar url={avatarImg}/>
            {name && <span className={styles.name}>{name}</span>}
            {info && <span className={styles.info}>{info}</span>}
            
        </div>
    )
}