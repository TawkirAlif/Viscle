import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./MainPage.css";
import { useHistory } from "react-router-dom";
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Button } from "@material-ui/core";

function MainPage({ balanceCurrency, userBalance, userBalanceToUsd }) {
        const history = useHistory();

  return (
    <div className="mainpage">
      <div clasName="mainpage_top">
        <div
          className="mainpage_top_adbox"
          style={{
            backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
          }}
        >
          <div className="mainpage_top_adbox_top">
            <div className="mainpage_top_adbox_top_left">
              <p>November 2021</p>
            </div>
            <div className="mainpage_top_adbox_top_right">
              <CloseRoundedIcon />
            </div>
          </div>
          <div className="mainpage_top_adbox_top_middle">
            <h2>Assest Detailsing Update</h2>
            <p>Grin blockchain has present suffeciant technicle challange</p>
            <Button>Find out more</Button>
          </div>
          <div className="mainpage_top_adbox_bottom">
            <div className="ad_bootom"></div>
            <div className="ad_bootom"></div>
            <div className="ad_bootom"></div>
          </div>
        </div>
      </div>

      <div className="visclemobile_mainpage_bottom">
        <div></div>
        <div className="visclemobile_user__total__Balance">
          
          <div className="visclemobile_user__total__Balance_back">
          <div></div>
          <div></div>
            <div className='visclemobile_user__total__Balance_back_icon'>
            <CallMadeRoundedIcon />
          </div>

          </div>
          <div className="visclemobile_user__total__Balance_inshight_box">
            <img
              src="https://pbs.twimg.com/media/Eq524FeU0AAu4gc?format=png&name=240x240"
              alt=""
            />
          </div>
          <div className="visclemobile_user__total__Balance_box">
            <div className='visclemobile_user__total__Balance_box_header'>
            <p></p>
            <h3>Total Balance</h3>
            <p></p>
            </div>
            <div className='visclemobile_user__total__Balance_box_currency_container'>
              <div></div>
            <div className="visclemobile_user__total__Balance_box_currency">
              <div>{balanceCurrency}</div>
            </div>
            <div></div>
            </div>
            <div className="visclemobile_userBalance">
              <div></div>
              <h1 className="visclemobile_user_balance">{userBalance}</h1>
              <div></div>
            </div>
            <div className="visclemobile_userBalancetoUsd">
              <div></div>
              <h2 className="visclemobile_user_balance_toUsd">{userBalanceToUsd} USD</h2>
              <div></div>
            </div>
            <div className="visclemobile_user__total__Balance_box_buttons">
              <div></div>
              <Button>Withdraw</Button>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MainPage;
