import React from "react";
import styles from "./Featured.module.scss";
import { Container } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import { ImageList } from "@mui/material";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <Container>
      <ImageListItem className={styles.wrapper}>
        {items.map((item, i) => {
          return (
            <ImageList key={i} id={i} href={item.href} onClick={() => router.push(item.href)} className={styles.img_container}>
              <img src={item.image} alt={item.title} className={ i === 0 ? styles.img_active:styles.img}/>
            </ImageList>
          );
        })}
      </ImageListItem>
    </Container>
  );
}
