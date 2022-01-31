import Example from "../src/components/example/Example";
import Auctions from "../src/components/auctions/Auctions";
import TopCollectors from "../src/components/collectors/TopCollectors";
import Featured from "../src/components/featured/Featured";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
import React,{ useState,useEffect } from "react";




export default function HomePage(){
    const [featuredCards, setFeaturedCards] = useState([]);
  const [dataTrending, setdataTrending] = useState([]);
  const [dataUsers, setdataUsers] = useState([]);
  const [dataNfts, setdataNfts] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataFeatured);
    setdataTrending(dataTrending);
    setdataUsers(dataUsers)
    setdataNfts(dataNfts)
  }, []);
    return (
        <>
        <Header/>
        <Featured items={featuredCards}/>
        <Trending cards={dataTrending}/>
        <TopCollectors collectors={dataUsers}/>
        <How/>
        <Auctions cards={dataNfts}/>
        <Footer/>
        
        </>

    )
}
