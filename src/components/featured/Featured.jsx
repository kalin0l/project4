import React from "react";
import styles from "./Featured.module.scss";
import { Container } from "@mui/material";
import { ImageList } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <Container>
      <ImageList className={styles.wrapper}>
        {items.map((item, i) => {
          return (
            <a key={i} id={'k'+i} href={item.href} onClick={() => router.push(item.href)} className={styles.img_container}>
              <img src={item.image} alt={item.title} className={styles.img}/>
            </a>
          );
        })}
      </ImageList>
    </Container>
  );
}
