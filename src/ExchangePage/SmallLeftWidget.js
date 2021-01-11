import React from "react";
import "./SmallLeftWidget.css";
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

function SmallRightWidget() {
  const history = useHistory();

  const mainPage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/app')
  }
  const pricePage = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/price')
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
 
  const Activities = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/activitiesx')
  }




  return (
    <div className="Smallleftwidget">
      <div className="SmallleftSidebar">
        <div className="Smallleft_widget_middle">
          <div classNmae="Smallleft_widget_middle_raw">
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option" type="submit" onClick={mainPage}>
                <WidgetsRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option">
                <InsertChartRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>

            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option" >
                <AttachMoneyRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option" type="submit" onClick={walletPage}>
                <AccountBalanceWalletRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option" type='submit' onClick={promotionPage}>
                <TrendingUpRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option" type="submit" onClick={Activities}>
                <BrokenImageRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option">
                <NotificationsActiveRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
            <div className="SmallleftWidgetOption">
              <Button className="Smallleft_widget_middle_option">
                <SettingsRoundedIcon className="Smallleft_widget_middle_option_icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="Smallleft_widget_bottom_messageBox">
        <div className="Smallleft_widget_bottom_message_box">
          <div className="Smallleft_widget_bottom_message_box_icon">
            <Brightness4RoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallRightWidget;
