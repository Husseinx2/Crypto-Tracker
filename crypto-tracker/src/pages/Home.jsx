import React from "react";
// import { Link } from "react-router-dom";
import homeStore from "../stores/homeStore";
import Header from "../components/Header";
import Search from "../components/Search"
import Featured from "../components/Featured"

import Crypto from "../components/Crypto";
import Halal from "../components/Halal";
import Footer from "../components/Footer";
export default function Home() {
  const store = homeStore();
  React.useEffect(() => {
    store.fetchCoins();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <Search />
      <Featured />
      <Crypto />
      
      <Halal />
      <Footer/>
    </div>
  );
}