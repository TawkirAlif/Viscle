import React from "react";
import "./PromotionSubPage.css";
import LeftWidget from "./LeftWidget";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PromotionPageMiddle from "./PromotionPageMiddle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function PromotionPage() {
  return (
    <div className="promotionpage">
      <div>
        <LeftWidget />
      </div>

      <div className="PromotionPage_PromotionPageMiddle">
        <PromotionPageMiddle />
      </div>
      <div className="PromotionPage_PromotionPageWidget_main">
        <div className="PromotionPage_PromotionPageWidget">
          <div className="PromotionPage_PromotionPageWidget_right">
            <div className="PromotionPage_PromotionPageWidget_right_header">
              <h3>Top Deposite Ranking</h3>
              <div className="PromotionPage_PromotionPageWidget_right_headerBottom">
                <AccessTimeIcon />
                <p> Last Updated 20:49 UTC</p>
              </div>
            </div>
            <div className="PromotionPage_PromotionPageWidget_rightMiddle">
              <div className="PromotionPage_PromotionPageWidget_right_middle">
                <div className="PromotionPage_PromotionPageWidget_right_middle_left">
                  <p1>Name</p1>
                  <p2>ACC</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_right">
                  <p>Net Deposite</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#1</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#2</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#3</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#4</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#5</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom">
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_left">
                  <p1>#6</p1>
                  <p2>142*****839</p2>
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_right">
                  <p>14,578,329 BTC</p>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_button_ButtonBox">
                <div></div>
                <div className="PromotionPage_PromotionPageWidget_right_middle_bottom_button">
                  <Button>Load More</Button>
                </div>
                <div></div>
              </div>
            </div>
            <div className="PromotionPage_PromotionPageWidget_right_bottom">
              <div className="PromotionPage_PromotionPageWidget_right_bottom_header">
                <div className="PromotionPage_PromotionPageWidget_right_bottom_header_left">
                  Featured Promotions
                </div>
                <div className="PromotionPage_PromotionPageWidget_right_bottom_header_right">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>

            <div className="PromotionPage_PromotionPageWidget_right_bottomBottom_main">
              <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom">
                <div
                  className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_left"
                  style={{
                    backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
                  }}
                ></div>
                <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_right">
                  <p>October 29, - November 29</p>
                  <h1>BTC NET DEPOSITE COMPAING</h1>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom">
                <div
                  className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_left"
                  style={{
                    backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
                  }}
                ></div>
                <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_right">
                  <p>October 29, - November 29</p>
                  <h1>BTC NET DEPOSITE COMPAING</h1>
                </div>
              </div>

              <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom">
                <div
                  className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_left"
                  style={{
                    backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
                  }}
                ></div>
                <div className="PromotionPage_PromotionPageWidget_right_bottom_Bottom_right">
                  <p>October 29, - November 29</p>
                  <h1>BTC NET DEPOSITE COMPAING</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionPage;
