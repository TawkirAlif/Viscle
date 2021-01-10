import React from "react";
import "./LeftWidget.css";
import InsertChartRoundedIcon from '@material-ui/icons/InsertChartRounded';
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import WidgetsRoundedIcon from "@material-ui/icons/WidgetsRounded";
import SwapHorizRoundedIcon from "@material-ui/icons/SwapHorizRounded";
import { useHistory } from "react-router-dom";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import BrokenImageRoundedIcon from "@material-ui/icons/BrokenImageRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import { Button } from "@material-ui/core";

function LeftWidget({RightWidgetMessage}) {
  const history = useHistory();

  const exchangePage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/exchange')
  }
  const pricePage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/price')
  }
  const homePage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/app')
  }
  const walletPage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/wallet')
  }
  const promotionPage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/promotionpage')
  }

  return (
    <div className="leftwidget">
      <div className='leftSidebar'>
       <div className="left_widget_middle">
        <div classNmae="left_widget_middle_raw">
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option" type="submit" onClick={homePage}>
              <WidgetsRoundedIcon className="left_widget_middle_option_icon" />
              <p>Home</p>
            </div>
          </div>
            <div className="leftWidgetOption" >
            <div className="left_widget_middle_option" type="submit" onClick={exchangePage}>
              <InsertChartRoundedIcon className="left_widget_middle_option_icon" />
              <p>Exchange</p>
            </div>
          </div>

          <div className="leftWidgetOption">
            <div className="left_widget_middle_option" type="submit" onClick={pricePage}>
              <AttachMoneyRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Price</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option" type="submit" onClick={walletPage}>
              <AccountBalanceWalletRoundedIcon className="left_widget_middle_option_icon" />
              <p>Wallets</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <TrendingUpRoundedIcon className="left_widget_middle_option_icon" type='submit' onClick={promotionPage}/>
              <p>Promotion</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <BrokenImageRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Activites</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <NotificationsActiveRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Notification</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <SettingsRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Setting</p>
            </div>
          </div>
        </div>
      </div>
      <div className='left_widget_bottom_messageBox'>
        <div className='left_widget_bottom_message_box'>
          <div className='left_widget_bottom_message_box_icon'>
            <CloseRoundedIcon />
        </div>
          <div className='left_widget_bottom_message_box_text'>
              <h2>{RightWidgetMessage}</h2>
        </div>
        <div className='left_widget_bottom_message_box_button'>
            <Button className='left_widget_bottom_message_box_btn'>
              Send Now
            </Button>
          </div>
          
        </div>
      </div>
      <div className='left_widget_bottom'>
        <Brightness4RoundedIcon className='left_widget_bottomIcon'/>
        <h2 className='left_widget_bottom_h3'>Dark</h2>
      </div>
      </div>
    </div>
  );
}

export default LeftWidget;
