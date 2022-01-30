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
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";
import How from "../how/How";
import Featured from '../featured/Featured'
import CollectorColumn from "../collectorsColumn/CollectorColumn";



export default function Copyright(props) {
  const items = [
       {
          name: "Kalin",
          nftsCount: 1,
          avatar: avatarImg,
          verified: true,
          id: 1
       },
       {
        name: "boiko",
        nftsCount: 2,
        avatar: avatarImg,
        verified: true,
        id: 2
     },
     {
      name: "toiko",
      nftsCount: 3,
      avatar: avatarImg,
      verified: true,
      id: 3
   }
    ]
   
 
  return (
    <div className={classNames(styles.wrapper)}>
      <Header />
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
          </Link>
        </Paper>
        {/* <How items={[{title:'first',description:'lalallala'},{title:'second',description:'lalallala'},{title:'third',description:'lalallala'}]}/> */}
        {/* <Featured items={items}/> */}
        <CollectorColumn items={items} type="l"/>
      </Container>
      <Footer/>
    </div>
  );
}
