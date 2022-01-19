import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";
import defaultLogo from '../../../public/images/logo.svg'
import mutedLogo from '../../../public/images/logo-muted.svg'



export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
           {defaultLogo ? <Logo type={defaultLogo} /> : <Logo type={mutedLogo} />}
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
