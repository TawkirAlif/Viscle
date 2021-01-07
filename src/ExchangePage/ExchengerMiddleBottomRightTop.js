import React from "react";
import "./ExchengerMiddleBottomRightTop.css";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import ExchengerMiddleBottomRightTop_mainBody from "./ExchengerMiddleBottomRightTop_mainBody";

function ExchengerMiddleBottomRightTop() {
  return (
    <div className="exchengermiddlebottomrighttop">
      <div className="ExchengerMiddleBottomRightTop_header">
        <div>
          <h2>Order Book</h2>
        </div>
        <div className="ExchengerMiddleBottomRightTop_header_icons">
          <SortRoundedIcon className="icon1" />
          <SortRoundedIcon className="icon2" />
          <ViewCarouselRoundedIcon className="icon3" />
        </div>
      </div>
      <div className="ExchengerMiddleBottomRightTop_body">
        <div className="ExchengerMiddleBottomRightTop_body_header">
          <div className="ExchengerMiddleBottomRightTop_mainBody_toprate_header">
            <p>Price</p>
          </div>
          <div className="ExchengerMiddleBottomRightTop_mainBody_toprate_p">
            <p>Amount (BTC)</p>
          </div>
          <div className="ExchengerMiddleBottomRightTop_mainBody_toprate_p">
            <p>Total (USDT)</p>
          </div>
        </div>
        <div className="ExchengerMiddleBottomRightTop_mainBody">
          <div className="ExchengerMiddleBottomRightTop_mainBodyTop">
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              lowRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
          </div>
          <div className="ExchengerMiddleBottomRightTop_mainBodyMiddle">
            <div></div>
            <div className="a">
              <h3>78892.6729 USDT</h3>
            </div>
            <div></div>
          </div>
          <div className="ExchengerMiddleBottomRightTop_mainBodyBottom">
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
            <ExchengerMiddleBottomRightTop_mainBody
              topRate={true}
              price="32764827"
              amount="6427823.273"
              total="3478423.374"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchengerMiddleBottomRightTop;
