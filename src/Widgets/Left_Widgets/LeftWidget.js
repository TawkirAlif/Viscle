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
        <img src='https://gm1.ggpht.com/ntZCXxreBUrfZu7IEwSbM9jj2tpzR2cLXo8MJQ7hCg-pl2drr7ZE5juFMUL4Yu33e-5E3TvSq31GFqv8mwoJb0Ffw1hX3ApylFugQO-PlVjfPONfq6vPfIRURjbU1ZLXWYzfnpISDucKZ_72QUZuR2Lgn4zqrVKdBW3Bi5DcA_0s6jJMMqIxseWRdmPGyk1eA7i64NAmFZvRSIo1TQvGFD9L5rNd6rIqGAiAqQ-3Ty8gQ6risC_iO2X9f8_0Ofe9FXxQ222ezcODq4oieveaJDx1gyF4wZ8ukKl8lyiJ0oVsVfK4g3GkDJQr4L48Hj9BonHboYfKCLgmp1tuSqirwibxUh4sqNG1PDHFtWBnZhAOYDpn4MharztLML-yDCxa00jhw_4sny1xaWeDdnS1TEPSx9aeBXuzB34bsHKLEwG7o6M0UBXosqVuwRaaOuWTAhMGpoTS1T0Z6JnI0QkDeHCR5X14O0mYhdzb3wK5p7GjgHF65sVWVXi8ceqOFVz8gktpC5HvxTtLCx7GTqh6GkotU_o9nf1-cO3C8YFaN3-1N0tHT55gCqLvcbyVOpfqUAdoNfpAtujB_PFeEsvH6Wj14a4qtbQ45zgLKsXluasSnUwVVO07GnKjzLUNsaawBJNn0DSRLqjRbbnq3QzmA8tRzgrA8MMBk4EIBMiHoq8vZ_kUxgaR8Hw-X04elR9ycPKx55td876HIbpRoO-3gVe1HF7IX3xvNFBQhR_pWu5uT4-rkrEYkcmHTSa3ywNUmg=s0-l75-ft-l75-ft' alt=''/>
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
