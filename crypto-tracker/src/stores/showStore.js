import create from "zustand";
import axios from "axios";

const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    // eslint-disable-next-line
    const [graphRes, dataRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=121`
      ),
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?market_data=true`
      ),
    ]);
    
    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-us");
      return {
        Date: date,
        Price: p,
        data: null,
      };
    });
    
    set({ graphData });
    set({ data: dataRes.data })
  },
}));

export default showStore;
