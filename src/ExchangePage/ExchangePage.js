import React from "react";
import { Button } from "@material-ui/core";
import "./ExchangePage.css";
import SmallLeftWidget from "./SmallLeftWidget";
import ExchangeMiddleTop from "./ExchangeMiddleTop";
import ExchangeMiddleBottomLeft from './ExchangeMiddleBottomLeft'
import ExchangeMiddleBottomLeftBottom from './ExchangeMiddleBottomLeftBottom'
import ExchengerMiddleBottomRightTop from './ExchengerMiddleBottomRightTop'
import ExchengerMiddleBottomRightBuySellBox from './ExchengerMiddleBottomRightBuySellBox'

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
            <ExchangeMiddleBottomLeft currencyInfo='BTC/USDT' oInfo='3745.23876' hInfo='4658.347' cInfo='763543.334' lInfo='343.23443'/>
            <ExchangeMiddleBottomLeftBottom />
            
                                  </div>
        <div className="exchangemiddle_bottom_right">
            <div className='exchangemiddle_bottom_right_top'>
              <ExchengerMiddleBottomRightTop />
            </div>
            <div className='exchangemiddle_bottom_right_middle'>
              <ExchengerMiddleBottomRightBuySellBox />
            </div>
            <div className='exchangemiddle_bottom_right_ads_box'>
              <div className='exchangemiddle_bottom_right_adBox'>
              <p>January 2021</p>
                <h1>Tranding & Asset Uppdates</h1>
                <Button>Explore Now</Button>

              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default ExchangePage;
