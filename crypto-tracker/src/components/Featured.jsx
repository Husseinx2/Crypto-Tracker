import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);

  if (!data) return null;

  return (
      <div className="featured">
      <div className="ftrd">
        {/* {left} */}
        <div className="left-f">
          <h2><b>Checkout Top Trending <bdo className="Word-CLR">Coins!</bdo></b></h2>
          <p>Live prices & data, with just One Click!</p>
          <form action="https://www.binance.com/en/buy-sell-crypto" method="get" target="_blank">
          <button className="coin-button">Want To <bde className="black">"Invest"</bde>?</button>
          </form>
        </div>

        {/* {right} */}

        <div className="right-f">
        <Link className="linkto" to={`/${data[0].id}`}>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt="" /> */}
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[0].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[0].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          </Link>
          <Link className="linkto" to={`/${data[1].id}`}>
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>

            {data[1].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[1].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[1].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          </Link>
          <Link className="linkto" to={`/${data[2].id}`}>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt="" /> */}
              <img src={data[2].image} alt="" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>

            {data[2].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[2].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[2].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          </Link>
          <Link className="linkto" to={`/${data[3].id}`}>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt="" /> */}
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>

            {data[3].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[3].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[3].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          </Link>
          <Link className="linkto" to={`/${data[4].id}`}>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt="" /> */}
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>

            {data[4].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[4].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[4].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
          </Link>
          <Link className="linkto" to={`/${data[5].id}`}>
          <div className="card">
            <div className="top">
              {/* <img src={BTC} alt="" /> */}
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>

            {data[5].price_change_percentage_24h < 0 ? (
              <span className="red">
                <FiArrowDown className="icon"/>
                {data[5].price_change_percentage_24h.toFixed(3)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[5].price_change_percentage_24h.toFixed(3)}%
              </span>
            )}
          </div>
            </Link>
        </div>
      </div>
      <div id="about"></div>
    </div>
   
  );
};

export default Featured;
