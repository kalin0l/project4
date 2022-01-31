import Auctions from "../src/components/auctions/Auctions";
import TopCollectors from "../src/components/collectors/TopCollectors";
import Featured from "../src/components/featured/Featured";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import How from "../src/components/how/How";
import Trending from "../src/components/trending/Trending";




export default function HomePage(){
    return (
        <>
        <Header/>
        <Featured/>
        <Trending/>
        <TopCollectors/>
        <How/>
        <Auctions/>
        <Footer/>
        
        </>

    )
}