import React from "react";
import { Link } from "react-router-dom";
import Homepic from "../Assets/Images/homepic.png";
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
            Simply and securely buy, sell, and manage hundreds of crypto
            currencies.
          </p>
          <h1>
            Explore crypto like{" "}
            <span className="Word-CLR">Bitcoin, Ethereum, and Dogecoin</span>
          </h1>
          <p>Invest wisely! Crypto Tracker is a live crypto analy</p>
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
                <div key={coin.id}>
                  <Link to={`/${coin.id}`}>{coin.name}</Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* {Right side} */}
        <div className="right-s">
          <div className="img-search">
            <img src={Homepic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
