import React from "react";
import "./PricePageFeedInfoWidget.css";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Avatar } from "@material-ui/core";

function PricePageFeedInfoWidget({currencyName, currencyIcon, currencySymble, topRate, lowRate}) {

  return (
    <div>
      <div className="pricepagefeedinfo_widget_currency_box">
        <div className="pricepagefeedinfo_rateBox">
          <div className="pricepagefeedinfo_rateBox_header">
            <div className="pricepagefeedinfo_widget_currency_box_avatars">
                                                  <Avatar src={currencyIcon}/>
              <div className="pricepagefeedinfo__bottom_rateBox_left">
                <p className="pricepagefeedinfo__bottom_rateBox_left_p">
                  {currencyName}
                </p>
                <p className="pricepagefeedinfo__widget__bottom_rateBox_left_symble">
                  {currencySymble}
                </p>
              </div>
            </div>
            <div className="pricepagefeedinfo__widget__bottom_rateBox_right">
              {topRate && (
                <p className="pricepagefeedinfo__widget__bottom_rateBox_right_p">
                  <ArrowDropUpRoundedIcon style={{ color: "gcreen" }} />
                  <p>2.05 %</p>
                </p>
              )}
              {lowRate && (
                <p className="pricepagefeedinfo__widget__bottom_rateBox_right_p">
                  <ArrowDropUpRoundedIcon style={{ color: "red" }} />
                  <p>2.05 %</p>
                </p>
              )}
              <p className="pricepagefeedinfo__widget__bottom_rateBox_right_amount">
                18,245.4 USD
              </p>
            </div>
          </div>
          <div className="pricepagefeedinfo__widget__bottom_rateBox_rate"></div>
        </div>
      </div>
    </div>
  );
}

export default PricePageFeedInfoWidget;
