import React from "react";
import { Link } from "react-router-dom";
import Homepic from "../Assets/Images/homepic.png";
import Homepic2 from "../Assets/Images/homepic2.gif";
import homeStore from "../stores/homeStore";

const Search = () => {
  const store = homeStore();
  React.useEffect(() => {
    store.fetchCoins();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home-search">
      <div className="srch">
        {/* {Left side} */}
        <div className="left-s">
          <p>
            Invest Wisely! Crypto Tracker is a Live Crypto Analyser, Featuring
            Real-time Coin Values, Charts, and Data
          </p>
          <h1>
            Explore crypto like{" "}
            <span className="Word-CLR">Bitcoin, Ethereum, and Dogecoin</span>
          </h1>
          <p>
            Simply and Securely Buy, Sell, and Manage Hundreds of Crypto
            Currencies
          </p>
          <h1>
            Search For <span className="Word-CLR">Coin</span>
          </h1>

          <div className="input-container">
            <input
              type="text"
              value={store.query}
              onChange={store.setQuery}
              placeholder="Type to Search"
            />
            {store.coins.map((coin) => {
              return (
                <div className="home-crypto">
                  <Link to={`/${coin.id}`}>
                    <span className="home-crypto-image">
                      <img src={coin.image} alt="" />
                    </span>
                    <span className="home-crypto-name">{coin.name}</span>
                    {coin.priceBtc && (
                      <span className="home-crypto-prices">
                        <span className="home-crypto-Btc">
                          {coin.priceBtc} <bdo className="Word-CLR">BTC</bdo>
                        </span>
                        <span className="home-crypto-Usd">
                          {coin.priceUsd} <bdo className="Word-CLR">USD</bdo>
                        </span>
                      </span>
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* {Right side} */}
        <div className="right-s">
          <div className="img-search">
            <img src={Homepic2} alt="" />
            <img src={Homepic} alt="" />
          </div>
        </div>
      </div>
      <div id="featured"></div>
    </div>
  );
};

export default Search;
