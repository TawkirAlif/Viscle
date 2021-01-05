import React from "react";
import "./ExchangePage.css";
import SmallLeftWidget from "./SmallLeftWidget";
import ExchangeMiddleTop from "./ExchangeMiddleTop";
import ExchangeMiddleBottomLeft from './ExchangeMiddleBottomLeft'

function ExchangePage() {
  return (
    <div className="exchangepage">
      <SmallLeftWidget />
      <div className="exchanemiddle">
        <div className="exchangemiddle_top">
          <ExchangeMiddleTop
            currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
            setCurrency="BTC/USDT"
            currencyName="Bitcoin"
            timeInfo="24"
            trendPercent="+3.74"
            lastPrice="11,6376"
            lowPrice="100.23"
            highPrice="2193.03"
            volumePrice="263,542.3287"
            topRate="true"
          />
        </div>
        <div className="exchangemiddle_bottom">
                                  <div className="exchangemiddle_bottom_left">
                                          <ExchangeMiddleBottomLeft />
          </div>
          <div className="exchangemiddle_bottom_right"></div>
        </div>
      </div>
    </div>
  );
}

export default ExchangePage;
