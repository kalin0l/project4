import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames";
import mutedLogo from '../../../public/images/logo-muted.svg'
import Logo from "../logo/Logo";


export default function Copyright(props) {
  console.log(props);
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
           <Logo type={mutedLogo}/>
          </Link>
        </Paper>
      </Container>
    </div>
  );
}
