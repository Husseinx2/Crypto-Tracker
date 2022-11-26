import React from "react";
// eslint-disable-next-line no-unused-vars
function myFunction() {
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}
}
function Crypto() {
  return (
    <div className="crypto-head">
      <h1 className="whatiscrypto">"What is Crypto?"</h1>
      <div className="crypto-container">
        {/* {left} */}
        <div className="left-c"></div>
        {/* {right} */}
        <div className="right-c">
          <h2>About cryptocurrencies</h2>
          <p>
            <bde className="bold-text">What is blockchain technology? </bde><br></br><br></br>You've likely heard some of the
            following terms if you've paid attention to the world of finance:
            Cryptocurrency, Blockchain, Bitcoin, Bitcoin Cash, and Ethereum. But
            what do they mean? And why is cryptocurrency suddenly so hot? <br></br><br></br>First,
            we'll explain the blockchain basics.<br></br><br></br> As society become increasingly
            digital, financial services providers are looking to offer customers
            the same services to which they're accustomed, but in a more
            efficient, secure, and cost effective way. <br></br><br></br>Enter blockchain
            technology. <br></br><br></br>The origins of blockchain are a bit nebulous. A person
            or group of people known by the pseudonym Satoshi Nakomoto invented
            and released the tech in 2009 as a way to digitally and anonymously
            send payments between two parties without needing a third party to
            verify the transaction. It was initially designed to facilitate,
            authorize, and log the transfer of bitcoins and other
            cryptocurrencies.<span id="dots">..</span>
            <span id="more">
              How does blockchain technology work? Blockchain tech is actually
              rather easy to understand at its core. Essentially, it's a shared
              database populated with entries that must be confirmed and
              encrypted. Think of it as a kind of highly encrypted and verified
              shared Google Document, in which each entry in the sheet depends
              on a logical relationship to all its predecessors. Blockchain tech
              offers a way to securely and efficiently create a tamper-proof log
              of sensitive activity (anything from international money transfers
              to shareholder records). Blockchain's conceptual framework and
              underlying code is useful for a variety of financial processes
              because of the potential it has to give companies a secure,
              digital alternative to banking processes that are typically
              bureaucratic, time-consuming, paper-heavy, and expensive. What are
              cryptocurrencies? Cryptocurrencies are essentially just digital
              money, digital tools of exchange that use cryptography and the
              aforementioned blockchain technology to facilitate secure and
              anonymous transactions. There had been several iterations of
              cryptocurrency over the years, but Bitcoin truly thrust
              cryptocurrencies forward in the late 2000s. There are thousands of
              cryptocurrencies floating out on the market now, but Bitcoin is
              far and away the most popular. How do you mine cryptocurrency?
              Bitcoin, Litecoin, Ethereum, and other cryptocurrencies don't just
              fall out of the sky. Like any other form of money, it takes work
              to produce them. And that work comes in the form of mining. But
              let's take a step back. Satoshi Nakamoto, the founder of Bitcoin,
              ensured that there would ever only be 21 million Bitcoins in
              existence. He (or they) reached that figure by calculating that
              people would discover, or "mine," a certain number of blocks of
              transactions each day. Every four years, the number of Bitcoins
              released in relation to the previous cycle gets reduced by 50%,
              along with the reward to miners for discovering new blocks. At the
              moment, that reward is 12.5 Bitcoins. Therefore, the total number
              of Bitcoins in circulation will approach 21 million but never
              actually reach that figure. This means Bitcoin will never
              experience inflation. The downside here is that a hack or
              cyberattack could be a disaster because it could erase Bitcoin
              wallets with little hope of getting the value back. As for mining
              Bitcoins, the process requires electrical energy. Miners solve
              complex mathematical problems, and the reward is more Bitcoins
              generated and awarded to them. Miners also verify transactions and
              prevent fraud, so more miners equals faster, more reliable, and
              more secure transactions. Thanks to Satoshi Nakamoto's designs,
              Bitcoin mining becomes more difficult as more miners join the
              fray. In 2009, a miner could mine 200 Bitcoin in a matter of days.
              In 2014, it would take approximately 98 years to mine just one,
              according to 99Bitcoins. Super powerful computers called
              Application Specific Integrated Circuit, or ASIC, were developed
              specifically to mine Bitcoins. But because so many miners have
              joined in the last few years, it remains difficult to mine loads.
              The solution is mining pools, groups of miners who band together
              and are paid relative to their share of the work. Current & future
              uses of blockchain technology & cryptocurrency Since its
              inception, Bitcoin has been rather volatile. But based on its
              recent boom — and a forecast by Snapchat's first investor, Jeremy
              Liew, that it would hit $500,000 by 2030 — and the prospect of
              grabbing a slice of the Bitcoin pie becomes far more attractive.
              Bitcoin users expect 94% of all bitcoins to be released by 2024.
              As the number moves toward the ceiling of 21 million, many expect
              the profits miners once made from the creation of new blocks to
              become so low that they will become negligible. But as more
              bitcoins enter circulation, transaction fees could rise and offset
              this. As for blockchain technology itself, it has numerous
              applications, from banking to the Internet of Things. It is
              expected that companies will flesh out their blockchain IoT
              solutions. Blockchain is a promising tool that will transform
              parts of the IoT and enable solutions that provide greater insight
              into assets, operations, and supply chains. It will also transform
              how health records and connected medical devices store and
              transmit data. Blockchain won’t be usable everywhere, but in many
              cases, it will be a part of the solution that makes the best use
              of the tools in the IoT arsenal. Blockchain can help to address
              particular problems, improve workflows, and reduce costs, which
              are the ultimate goals of any IoT project.
            </span>
          </p>
          <button className="readmore" onClick={myFunction} id="myBtn" >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crypto;