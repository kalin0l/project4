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
      <ImageList className={styles.wrapper} sx={{
        width: 500,
        height: 450}}>
        {items.map((item, i) => {
          const cols = item.cols ? 3 : 0;
          const rows = item.rows ? 2 : 0 
          return (
            <ImageListItem key={i} cols={cols} rows={rows}  href={item.href} onClick={() => router.push(item.href)} >
              <img {...srcset(item.image, 250, 200, rows, cols)} alt={item.title} />
              <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}
