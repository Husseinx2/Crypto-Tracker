import React from 'react'
import BTC from "../logo.svg"
import {FiArrowUpRight, FiArrowDown} from "react-icons/fi"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='ftrd'>
        {/* {left} */}
        <div className='left-f'>
            <h2>Checkout Top Trending Coins!</h2>
            <p>Live prices & data, with just one click</p>
        </div>

        {/* {right} */}

        <div className='right-f'>
            <div className='top'>
            <img src={BTC} alt="" />
            </div>
            <div>
                <h5>Bitcoin</h5>
                <p>$48,000</p>
            </div>
            <span><FiArrowUpRight />2.5</span>

        </div>
        </div>
    </div>
  )
}

export default Featured