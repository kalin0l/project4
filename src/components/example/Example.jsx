import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Header from "../header/Header";
import defaultLogo from '../../../public/images/logo.svg'



export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
          <Header/>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
          <Logo type={defaultLogo} />
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
