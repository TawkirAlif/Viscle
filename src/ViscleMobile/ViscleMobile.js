import React from "react";
import "./ViscleMobile.css";
import Sidebar from "./Widget/Sidebar/Sidebar";
import Header from "./Header/Header";
import MainPage from "./AppBody/MainPage";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import MobileExchange from "./MobileExchange";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function ViscleMobile() {
  return (
    <div className="ViscleMobile" id="ViscleMobile">
      <div className="ViscleMobile_sidebar">
        <Sidebar />
      </div>
      <div className="ViscleMobile_body" id="ViscleMobile_body">
        <div className="app_body_header"></div>
        <Header />
        <div className="ViscleMobile_body_main_middle">
          <MainPage
            balanceCurrency="BTC"
            userBalance="1.35739"
            userBalanceToUsd="37,679.368"
          />
        </div>
        <div className="ViscleMobile_body_bottom">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

export default ViscleMobile;
