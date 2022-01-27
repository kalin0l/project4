import React from "react";
import styles from "./Featured.module.scss";
import { Container } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { useRouter } from "next/router";
import { ImageList } from "@mui/material";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Featured({ items = [] }) {
  const router = useRouter();
  return (
    <Container>
      <ImageList sx={{
        width: 500,
        height: 450}}>
        {items.map((item, i) => {
          const cols = item.cols ? 3 : 0;
          const rows = item.rows ? 6 : 0 
          return (
            <ImageListItem key={i}  rows={rows} cols={2}  href={item.href} onClick={() => router.push(item.href)} >
              <img src={item.image} alt={item.title} />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}
