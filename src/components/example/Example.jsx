import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import Avatar from "../avatar/Avatar";
import User from '../user/User'
import Card from "../card/Card";
import avatarImg from "../../../public/images/avatar.png";
import Trending from "../trending/Trending";

export default function Copyright(props) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
          </Link>
        </Paper>
            <Trending/>
      </Container>
    </div>
  );
}
