import React from 'react'
import Sidebar from "./Widget/Sidebar/Sidebar";
import Header from "./Header/Header";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ExchangerMiddleBottomLeftBottom from './ExchangePage/ExchangeMiddleBottomLeftBottom'

function MobileTrade() {
        return (
                <div className="ViscleMobile" id="ViscleMobile">
                <div className="ViscleMobile_sidebar">
                  <Sidebar />
                </div>
                <div className="ViscleMobile_body" id="ViscleMobile_body">
                  <div className="app_body_header"></div>
                  <Header />
                <div className="ViscleMobile_body_main_middle">
                   <ExchangerMiddleBottomLeftBottom />
                  </div>
                  <div className="ViscleMobile_body_bottom">
                    <BottomNavigation />
                  </div>
                </div>
              </div>
        )
}

export default MobileTrade
