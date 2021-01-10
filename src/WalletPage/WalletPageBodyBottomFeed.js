import React from "react";
import "./WalletPageBodyBottomFeed.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

function PricePageBodyBottomFeed({
  currencyIcon,
  currencySymble,
  currencyName,
  availableBalanceAmount,
  onOrders,
  onOrderAmount,
  availableBalance,
  topRate,
  lowRate,
  rate,
}) {
  return (
    <div className="walletpagebodybottomfeed">
      <div className="wallet__page__bodyBottom_feed">
        <div className="wallet__page__bodyBottom_feedempty">
          <StarRoundedIcon />
        </div>
        <div className="wallet__page__bodyBottom_feed_container">
          <div className="wallet__page__bodyBottom_feedToken_Symble">
            <div className="wallet__page__bodyBottom_feed_containertoken">
              <Avatar src={currencyIcon} alt=''/>
              <div className="wallet__page__bodyBottom_feed_containertokentoken_p">
                <p>{currencyName}</p>
              </div>
            </div>
            <div className="wallet__page__bodyBottom_feed_containersymble">
              <p>{currencySymble}</p>
            </div>
          </div>
        </div>
        <div className="wallet__page__bodyBottom_feed_container">
          <div className="wallet__page__bodyBottom_feedPrice_Time">

            {lowRate && (
              <div className="wallet__page__bodyBottom_feedTime">
                <ArrowDropDownIcon style={{ color: "red" }} />
                <p style={{ color: "red" }}>{rate}</p>
              </div>
            )}
            {topRate && (
              <div className="wallet__page__bodyBottom_feedTime">
                <ArrowDropUpIcon style={{ color: "green" }} />
                <p style={{ color: "green" }}>{rate}</p>
              </div>
            )}
          </div>
        </div>
        <div className="wallet__page__bodyBottom_feed_container">
          <div className="wallet__page__bodyBottom_feedMarketCap_Volume">
            <div className="wallet__page__bodyBottom_feedmarketCap">
              <p>{onOrders}</p>
              <p>${onOrderAmount}</p>
            </div>
            <div className="volume">
              <p>{availableBalance}</p>
              <p>${availableBalanceAmount}</p>
            </div>
          </div>
        </div>
        <div className="wallet__page__bodyBottom_feed_container">
        <div className="wallet__page__bodyBottom_feed_container_Total_price">
              <p>{availableBalance}</p>
              <p>${availableBalanceAmount}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PricePageBodyBottomFeed;
