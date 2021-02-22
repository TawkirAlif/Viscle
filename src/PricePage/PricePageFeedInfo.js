import React from "react";
import LeftWidget from "./LeftWidget";
import "./PricePageFeedInfo.css";
import PricePageFeedInfoWidget from './PricePageFeedInfoWidget'
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
import PricePageFeedMiddle from "./PricePageFeedMiddle";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Avatar } from "@material-ui/core";

function PricePageFeedInfo() {

  return (
    <div className="pricepagefeedinfo">
      <div>
        <LeftWidget />
      </div>
      <div className="PricePageFeedMiddle">
        <PricePageFeedMiddle />
      </div>
      <div className="pricepagefeedinfo_widget">
      <div className="pricepagefeedinfo_widget_header">
        <div className="pricepagefeedinfo_widget_header_left">
          <h4>Related Coins</h4>
        </div>
        <div>
          {" "}
          <MoreHorizRoundedIcon />{" "}
        </div>
        </div>
        
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
        <PricePageFeedInfoWidget currencyIcon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png' currencyName='Bitcoin' currencySymble='BTC' topRate={true}/>
      </div>
    </div>
  );
}

export default PricePageFeedInfo;
