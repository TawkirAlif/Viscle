import React from "react";
import "./PricePageBodyBottomFeed.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function PricePageBodyBottomFeed({
  currencyIcon,
  currencySymble,
  currencyName,
  price,
  marketCap,
  volume,
  topRate,
  lowRate,
  rate,
}) {
  return (
    <div className="pricepagebodybottomfeed">
      <div className="price__page__bodyBottom_feed">
        <div className="empty">
          <StarRoundedIcon />
        </div>
        <div className="price__page__bodyBottom_feed_container">
          <div className="Token_Symble">
            <div className="token">
              <Avatar src={currencyIcon} alt=''/>
              <div className="token_p">
                <p>{currencyName}</p>
              </div>
            </div>
            <div className="symble">
              <p>{currencySymble}</p>
            </div>
          </div>
        </div>
        <div className="price__page__bodyBottom_feed_container">
          <div className="Price_Time">
            <div className="Price">
              <p>${price}</p>
            </div>
            {lowRate && (
              <div className="Time">
                <ArrowDropDownIcon style={{ color: "red" }} />
                <p style={{ color: "red" }}>{rate}</p>
              </div>
            )}
            {topRate && (
              <div className="Time">
                <ArrowDropUpIcon style={{ color: "green" }} />
                <p style={{ color: "green" }}>{rate}</p>
              </div>
            )}
          </div>
        </div>
        <div className="price__page__bodyBottom_feed_container">
          <div className="MarketCap_Volume">
            <div className="MarketCap">
              <p>${marketCap}</p>
            </div>
            <div className="Volume">
              <p>${volume}</p>
            </div>
          </div>
        </div>
        <div className="price__page__bodyBottom_feed_container">
          <h3>This will be the graph</h3>
        </div>
      </div>
    </div>
  );
}

export default PricePageBodyBottomFeed;
