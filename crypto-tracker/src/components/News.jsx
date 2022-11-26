import axios from "axios";
import React, { useState, useEffect } from "react";

const News = () => {
  const [data, setData] = useState(null);
  const url = "https://api.coinpaprika.com/v1/coins/btc-bitcoin/twitter";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
    // eslint-disable-next-line
  }, []);

  if (!data) return null;

  return (
  <div className="news">
    <h1>Twitter</h1>
  </div>
)
};

export default News;
