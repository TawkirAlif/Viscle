import React from 'react'
import './MobileBuySell.css'
import Sidebar from "./Widget/Sidebar/Sidebar";
import Header from "./Header/Header";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ExchengerMiddleBottomRightBuySellBox from './ExchangePage/ExchengerMiddleBottomRightBuySellBox'


function MobileBuySell() {
        return (
                <div className="ViscleMobile" id="ViscleMobile">
                <div className="ViscleMobile_sidebar">
                  <Sidebar />
                </div>
                <div className="ViscleMobile_body" id="ViscleMobile_body">
                  <div className="app_body_header"></div>
                  <Header />
                  <div className="ViscleMobile_body_main_middle">
                   <ExchengerMiddleBottomRightBuySellBox />
                  </div>
                  <div className="ViscleMobile_body_bottom">
                    <BottomNavigation />
                  </div>
                </div>
              </div>
        )
}

export default MobileBuySell
