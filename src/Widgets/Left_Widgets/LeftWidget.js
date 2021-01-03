import React from "react";
import "./LeftWidget.css";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import WidgetsRoundedIcon from "@material-ui/icons/WidgetsRounded";
import SwapHorizRoundedIcon from "@material-ui/icons/SwapHorizRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import BrokenImageRoundedIcon from "@material-ui/icons/BrokenImageRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import { Button } from "@material-ui/core";

function LeftWidget() {
  return (
    <div className="leftwidget">
      <div className="left_widget_header">
        <h1>Unity</h1>
        <KeyboardBackspaceRoundedIcon className="left_widget_header_back_icon" />
      </div>
      <div className="left_widget_middle">
        <div classNmae="left_widget_middle_raw">
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <WidgetsRoundedIcon className="left_widget_middle_option_icon" />
              <p>Home</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <SwapHorizRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Exchange</p>
            </div>
          </div>

          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <AttachMoneyRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Price</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <AccountBalanceWalletRoundedIcon className="left_widget_middle_option_icon"/>
              <p>Wallets</p>
            </div>
          </div>
          <div className="leftWidgetOption">
            <div className="left_widget_middle_option">
              <TrendingUpRoundedIcon className="left_widget_middle_option_icon"/>
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
            <h1>Send Cryto to an Email Address</h1>
        </div>
        <div className='left_widget_bottom_message_box_button'>
            <div className='left_widget_bottom_message_box_btn'>
              <p>Send Now</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className='left_widget_bottom'>
        <Brightness4RoundedIcon className='left_widget_bottomIcon'/>
        <h3 className='left_widget_bottom_h3'>Dark</h3>
      </div>
    </div>
  );
}

export default LeftWidget;
