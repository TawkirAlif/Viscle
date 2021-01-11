import React from "react";
import "./PromotionPageMain.css";
import PromotionPageFeed from './PromotionPageFeed'
import { Button } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import LeftWidget from "./LeftWidget";
import { useHistory } from "react-router-dom";


function PromotionPageMain() {

  const handleClick = (e) => {
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.color = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.color = "black";
  }

  const handleClick2 = (e) => {
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.color = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.color = "black";
  }

  const handleClick3 = (e) => {
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.color = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.color = "black";
  }

  const handleClick4 = (e) => {
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.color = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.color = "black";
  }

  const handleClick5 = (e) => {
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.backgroundColor = "rgb(0, 136, 255)";
    document.getElementById("promotionpagemain_Bottom_pageCountBox5").style.color = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox4").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox3").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox2").style.color = "black";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.backgroundColor = "white";
    document.getElementById("promotionpagemain_Bottom_pageCountBox1").style.color = "black";
  }



  return (
    <div className="promotionpagemain">
      <div>
        <LeftWidget />
      </div>
      <div className='PromotionPageMain_Middle'>
      <div className="promotionpagemain_middle">
        <div className="promotionpagemain_middle_left">
          <div className="promotionpagemain_middle_left_header">
            <h2>Viscle Exchange</h2>
            <h1>Promotions</h1>
          </div>
          <div className="promotionpagemain_middle_left_header_bottom">
            <div className="promotionpagemain_middle__widget__top">
              <div
                style={{
                  backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
                }}
                className="promotionpagemain_middle__widget__top_messageBox"
              >
                <div className="promotionpagemain_middle__widget__top_messageBox_close">
                  <div className="promotionpagemain_middle__widget__top_messageBox_time">
                    <p>21 june, 2021</p>
                  </div>
                  <CloseRoundedIcon />
                </div>
                <div className="promotionpagemain_middle__widget__top_messageBox_messageHeader">
                  <h1>Bitcoin X TORN Net Deposite Compaing</h1>
                </div>
                <div className="promotionpagemain_middle__widget__top_messageBox_message">
                  <p>
                    The Grin blockchain has presented singnificant technical
                    challenges. The Grin blockchain has presented singnificant
                    technical challenges.
                  </p>
                </div>
                <div className="promotionpagemain_middle__widget__top_messageBox_button">
                  <Button>Earn Crypto</Button>
                </div>
                <div className="middle__widget__top_messageBox_active">
                  <div className="middle__widget__top_messageBox_Active1"></div>
                  <div className="middle__widget__top_messageBox_Active2"></div>
                  <div className="middle__widget__top_messageBox_Active2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promotionpagemain_middle_right">
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
        <div className='promotionpagemain_Bottom'>
          <div className='promotionpagemain_Bottom_header'>
            <h1>Letest Promotion</h1>
          </div>
          <div className='promotionpagemain_Bottom_Bottom'>
          <PromotionPageFeed />
          <PromotionPageFeed />
          <PromotionPageFeed />
          <PromotionPageFeed />
          <PromotionPageFeed />
          <PromotionPageFeed />
          </div>
        </div>
        <div className='promotionpagemain_Bottom_flex-end'>
        <div className='promotionpagemain_Bottom_pageCountBox'><p id='promotionpagemain_Bottom_pageCountBox1' onClick={handleClick}>1</p></div>
        <div className='promotionpagemain_Bottom_pageCountBox'><p id='promotionpagemain_Bottom_pageCountBox2' onClick={handleClick2}>2</p></div>
        <div className='promotionpagemain_Bottom_pageCountBox'><p id='promotionpagemain_Bottom_pageCountBox3' onClick={handleClick3}>3</p></div>
        <div className='promotionpagemain_Bottom_pageCountBox'><p id='promotionpagemain_Bottom_pageCountBox4' onClick={handleClick4}>4</p></div>
        <div className='promotionpagemain_Bottom_pageCountBox'><p id='promotionpagemain_Bottom_pageCountBox5' onClick={handleClick5}>Next</p></div>
        </div>
        </div>
    </div>
  );
}

export default PromotionPageMain;
