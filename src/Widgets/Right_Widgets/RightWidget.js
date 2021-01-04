import React from "react";
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";
import "./RightWidget.css";
import RightWidgetBottom from "./RightWidgetBottom";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import { Button } from "@material-ui/core";

function RightWidget({ userBalance, userBalanceToUsd, userInshight, balanceCurrency }) {
  return (
    <div className="rightwidget">
      <div className="right_widget_top">
        <div className="user__total__Balance">
          <div className="user__total__Balance_back">
            <CallMadeRoundedIcon />
          </div>
          <div className="user__total__Balance_inshight_box">
            <img
              src="https://pbs.twimg.com/media/Eq524FeU0AAu4gc?format=png&name=240x240"
              alt=""
            />
          </div>
          <div className="user__total__Balance_box">
            <h3>Total Balance</h3>
            <div className="user__total__Balance_box_currency">
              <>{balanceCurrency}</>
            </div>
            <div className="userBalance">
              <div></div>
              <h1 className="user_balance">{userBalance}</h1>
              <div></div>
            </div>
            <div className="userBalancetoUsd">
              <div></div>
              <h2 className="user_balance_toUsd">{userBalanceToUsd} USD</h2>
              <div></div>
            </div>
            <div className="user__total__Balance_box_buttons">
              <div></div>
              <Button>Withdraw</Button>
              <div></div>
            </div>
          </div>
        </div>
                  </div>
                  <div className='right_widget_bottom_header'>
                          <h4>Latest Activities</h4>
                          <MoreHorizRoundedIcon />
                  </div>
      <div className="right_widget_bottom">
        <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.pngfind.com/pngs/m/577-5776671_deposit-icon-partnership-green-hd-png-download.png"
          activityName="Exchange"
          activityCurrency="XRP"
          complete={true}
          activityMoney="212.46"
          activityTime="Nov30, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.greendot.com/for-people/deposit-money/ach-bank-transfer/_jcr_content/root/responsivegrid/responsivegrid/layout_container_1296336461/col2Tile1/image.coreimg.png/1589552591909/accountnow-taxpage-01172019.png"
          activityName="Diposite"
          activityCurrency="BTC"
          failed={true}
          activityMoney="1.34346"
          activityTime="Jan22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.pngfind.com/pngs/m/577-5776671_deposit-icon-partnership-green-hd-png-download.png"
          activityName="Exchange"
          activityCurrency="XRP"
          complete={true}
          activityMoney="212.46"
          activityTime="Feb30, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.greendot.com/for-people/deposit-money/ach-bank-transfer/_jcr_content/root/responsivegrid/responsivegrid/layout_container_1296336461/col2Tile1/image.coreimg.png/1589552591909/accountnow-taxpage-01172019.png"
          activityName="Diposite"
          activityCurrency="BTC"
          failed={true}
          activityMoney="1.34346"
          activityTime="Apr22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
        />
                <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
        />
      </div>
    </div>
  );
}

export default RightWidget;
