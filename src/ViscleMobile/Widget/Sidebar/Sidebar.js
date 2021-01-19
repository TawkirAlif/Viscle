import React from "react";
import "./Sidebar.css";
import WidgetsRoundedIcon from "@material-ui/icons/WidgetsRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Avatar, Button } from "@material-ui/core";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import BrokenImageRoundedIcon from "@material-ui/icons/BrokenImageRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";

function Sidebar() {

  const history = useHistory();

  const home = (e) => {
    e.preventDefault();
    if ('submit')
    history.push("/visclemobile");
  };
  
  const mobileexchange = (e) => {
          e.preventDefault();
          if ('submit')
          history.push("/mobileexchange");
  };
  const MobileBuySell = (e) => {
    e.preventDefault();
    if ('submit')
    history.push("/mobilebuysell");
};

  
  const handleToggle = (e) => {
    document.getElementById("toggle").style.marginLeft = "45px";
  };
  const handleSidebar = (e) => {
    document.getElementById("visclemobilesidebar").style.marginLeft = "-270px";
    document.getElementById("ViscleMobile_body").style.position = "fixed";
  };


  return (
    <div className="sidebar" id="visclemobilesidebar">
      <div className="sidebar_top">
        <div className="sidebar_top_logo">
          <img
            src="https://pbs.twimg.com/media/Ermizi3U0AAX_tu?format=png&name=900x900"
            alt="tawkir"
          />
        </div>
        <div className="sidebsr_top_notification">
          <NotificationsActiveRoundedIcon />
        </div>
        <div className="sidebar_top_close">
          <CloseRoundedIcon onClick={handleSidebar} />
        </div>
      </div>
      <div className="sidebar_bottom">
        <div className="sidebar_bottom_option" type='submit' onClick={home}>
          <WidgetsRoundedIcon />
          <p className="sidebar_bottom_option_text">Home</p>
        </div>
        <div className="sidebar_bottom_option" type='submit' onClick={mobileexchange}>
          <InsertChartRoundedIcon />
          <p className="sidebar_bottom_option_text">Exchange</p>
        </div>
        <div className="sidebar_bottom_option">
          <AttachMoneyRoundedIcon />
          <p className="sidebar_bottom_option_text">Prices</p>
        </div>
        <div className="sidebar_bottom_option">
          <AccountBalanceWalletRoundedIcon />
          <p className="sidebar_bottom_option_text">Wallets</p>
        </div>
        <div className="sidebar_bottom_option">
          <TrendingUpRoundedIcon />
          <p className="sidebar_bottom_option_text">Promotions</p>
        </div>
        <div className="sidebar_bottom_option">
          <BrokenImageRoundedIcon />
          <p className="sidebar_bottom_option_text">Setting</p>
        </div>
        <div className="sidebar_bottom_option">
          <NotificationsActiveRoundedIcon />
          <p className="sidebar_bottom_option_text">Activities</p>
        </div>
        <div className="sidebar_bottom_option">
          <SettingsRoundedIcon />
          <p className="sidebar_bottom_option_text">Notification</p>
        </div>

        <div className="header__input">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Search" />
          <Button type="submit"></Button>
        </div>
        <div className="sidebar_bottom_bottom">
          <Brightness4RoundedIcon />
          <div className="dark_toggle">
            <div
              className="toggle_button"
              id="toggle"
              onClick={handleToggle}
            ></div>
          </div>
          <Avatar src="https://avatars1.githubusercontent.com/u/73068865?s=120&v=4" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
