import { Button } from "@material-ui/core";
import React from "react";
import "./ExchangeMiddleBottomLeft.css";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import BubbleChartOutlinedIcon from "@material-ui/icons/BubbleChartOutlined";
import LaunchRoundedIcon from "@material-ui/icons/LaunchRounded";
import { LocationOffOutlined } from "@material-ui/icons";

function ExchangeMiddleBottomLeft({
  currencyInfo,
  oInfo,
  hInfo,
  cInfo,
  lInfo,
}) {
  return (
    <div className="viscle_mobile_exchangemiddlebottomleft">
      <div className="viscle_mobile_exchange_middle_bottom_left">
        <div className="viscle_mobile_Exchange_Middle_Bottom_Left">
          <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header">
            <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header_buttons">
              <Button>Price Chart</Button>
              <Button>Deep Chart</Button>
            </div>
            <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header_right_icons">
              <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header_right_icon">
                <WatchLaterOutlinedIcon />
                <p>30min</p>
              </div>
              <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header_right_icon">
                <BubbleChartOutlinedIcon />
                <p>Indicator</p>
              </div>
              <div className="viscle_mobile_Exchange_Middle_Bottom_Left_header_right_icon_launch">
                <LaunchRoundedIcon />
              </div>
            </div>
          </div>
          <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header">
                <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box">
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box-icon">
                    {currencyInfo}
                  </p>
                </div>
                <div className="exchangemiddle_bottom_left_middle_body_header_box">
                  <p className="exchangemiddle_bottom_left_middle_body_header_box-icon">
                    O
                  </p>
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box_text">
                    {oInfo}
                  </p>
                </div>
                <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box">
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box-icon">
                    H
                  </p>
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box_text">
                    {hInfo}
                  </p>
                </div>
                <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box">
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box-icon">
                    L
                  </p>
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box_text">
                    {lInfo}
                  </p>
                </div>
                <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box">
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box-icon">
                    C
                  </p>
                  <p className="viscle_mobile_exchangemiddle_bottom_left_middle_body_header_box_text">
                    {cInfo}
                  </p>
                </div>
              </div>
          <div className="viscle_mobile_exchangemiddle_bottom_left_middle">
            <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body">
              

              <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_insight_box">
                <img
                  src="https://www.tokens.net/media/blog/image/double-bottom_Em0bPh1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="viscle_mobile_exchangemiddle_bottom_left_middle_body_widget">
              <p>19000.000</p>
              <p>18000.000</p>
              <p>17000.000</p>
              <p>16000.000</p>
              <p>15000.000</p>
              <p>14000.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="viscle_mobile_Exchange_Middle_Bottom_Left_Bottom">
        <p>0:30</p>
        <p>1:30</p>
        <p>2:30</p>
        <p>3:30</p>
        <p>4:30</p>
      </div>
    </div>
  );
}

export default ExchangeMiddleBottomLeft;
