import create from "zustand";
import axios from "axios";


const showStore = create((set) => ({
    fetchData: () => {
        console.log("hey");
    },
}));

export default showStore;
