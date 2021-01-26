import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./MainPage.css";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import MiddleFeed from './MiddleFeed'
import RightWidgetBottom from './RightWidgetBottom'
import CallMadeRoundedIcon from "@material-ui/icons/CallMadeRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import { Button } from "@material-ui/core";

function MainPage({ balanceCurrency, userBalance, userBalanceToUsd }) {
  const history = useHistory();
  
  const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid blueviolet",
      fontSize: 18,
      fontWeight: 600,
      minWidth: 90,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 10,
        minWidth: 100,

        borderColor: "lightgray",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  const [userChoose, setUserChoose] = React.useState("");
  const handleChange = (event) => {
    setUserChoose(event.target.value);
  };

  return (
    <div className="mainpage">
      <div clasName="mainpage_top">
        <div
          className="mainpage_top_adbox"
          style={{
            backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
          }}
        >
          <div className="mainpage_top_adbox_top">
            <div className="mainpage_top_adbox_top_left">
              <p>November 2021</p>
            </div>
            <div className="mainpage_top_adbox_top_right">
              <CloseRoundedIcon />
            </div>
          </div>
          <div className="mainpage_top_adbox_top_middle">
            <h2>Assest Detailsing Update</h2>
            <p>Grin blockchain has present suffeciant technicle challange</p>
            <Button>Find out more</Button>
          </div>
          <div className="mainpage_top_adbox_bottom">
            <div className="ad_bootom"></div>
            <div className="ad_bootom"></div>
            <div className="ad_bootom"></div>
          </div>
        </div>
      </div>

      <div className="visclemobile_mainpage_bottom">
        <div></div>
        <div className="visclemobile_user__total__Balance">
          
          <div className="visclemobile_user__total__Balance_back">
          <div></div>
          <div></div>
            <div className='visclemobile_user__total__Balance_back_icon'>
            <CallMadeRoundedIcon />
          </div>

          </div>
          <div className="visclemobile_user__total__Balance_inshight_box">
            <img
              src="https://pbs.twimg.com/media/Eq524FeU0AAu4gc?format=png&name=240x240"
              alt=""
            />
          </div>
          <div className="visclemobile_user__total__Balance_box">
            <div className='visclemobile_user__total__Balance_box_header'>
            <p></p>
            <h3>Total Balance</h3>
            <p></p>
            </div>
            <div className='visclemobile_user__total__Balance_box_currency_container'>
              <div></div>
            <div className="visclemobile_user__total__Balance_box_currency">
              <div>{balanceCurrency}</div>
            </div>
            <div></div>
            </div>
            <div className="visclemobile_userBalance">
              <div></div>
              <h1 className="visclemobile_user_balance">{userBalance}</h1>
              <div></div>
            </div>
            <div className="visclemobile_userBalancetoUsd">
              <div></div>
              <h2 className="visclemobile_user_balance_toUsd">{userBalanceToUsd} USD</h2>
              <div></div>
            </div>
            <div className="visclemobile_user__total__Balance_box_buttons">
              <div></div>
              <Button>Withdraw</Button>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="visclemobile_middle__widget__middle">
        <div className="middle_widget_select">
            <FormControl className={classes.margin}>
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={userChoose}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="Market Cap">Market Cap</MenuItem>
                <MenuItem value={1}>Core Assest</MenuItem>
                <MenuItem value={2}>Top Gainers</MenuItem>
                <MenuItem value={3}>Top Losers</MenuItem>
                <MenuItem value={4}>New</MenuItem>
              </Select>
            </FormControl>
          </div>


          <div className="middle_widget_select">
            <FormControl className={classes.margin}>
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={userChoose}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="Market Cap">Market Cap</MenuItem>
                <MenuItem value={5}>Eng/USD</MenuItem>
                <MenuItem value={6}>Eng/BTC</MenuItem>
                <MenuItem value={7}>Eng/INR</MenuItem>
                <MenuItem value={8}>Eng/EUR</MenuItem>
                <MenuItem value={9}>Eng/BDT</MenuItem>
              </Select>
            </FormControl>
          </div>
      </div>
        <div className="visclemobile_middle__widget__bottom">
        <div className="visclemobile_feeds">
          <MiddleFeed
              currencyName="Bitcoin"
              currencyShortName="BTC"
              currencyPic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              time="12h"
              ratePoint="18,245.4"
              currencyIcon="$"
              topRate={true}
              ratePercent="+2.73"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Ethereum"
              currencyShortName="ETH"
              currencyPic="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
              time="12h"
              ratePoint="8,357"
              currencyIcon="$"
              topRate={true}
              ratePercent="+223.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Tokenbox"
              currencyShortName="TBX"
              currencyPic="https://cryptologos.cc/logos/tokenbox-tbx-logo.png"
              time="12h"
              ratePoint="0.36533"
              currencyIcon="$"
              topRate={true}
              ratePercent="+0.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Steem"
              currencyShortName="STM"
              currencyPic="https://www.kindpng.com/picc/m/18-186648_steemit-steem-dollars-hd-png-download.png"
              time="12h"
              ratePoint="10.65467"
              currencyIcon="$"
              topRate={false}
              ratePercent="-34.8"
              lowRate={true}
            />
                        <MiddleFeed
              currencyName="Ripple"
              currencyShortName="XRP"
              currencyPic="https://www.kindpng.com/picc/m/127-1279698_ripple-coin-xrp-png-transparent-png.png"
              time="12h"
              ratePoint="12,357"
              currencyIcon="$"
              topRate={true}
              ratePercent="+23.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Ubex"
              currencyShortName="UBW"
              currencyPic="https://assets.coingecko.com/coins/images/4163/large/ubex.png?1547039421"
              time="12h"
              ratePoint="0.357"
              currencyIcon="$"
              topRate={false}
              ratePercent="-33.8"
              lowRate={true}
          />
        </div>
        </div>
        <div className='discover_more_assest'>
          <div></div>
          <div className='discover_assest'>
            <Button>Discover More Assest</Button>
          </div>
          <div></div>
      </div>
      <div className='visclemobile_right_widget_bottom_header'>
          <h4>Latest Activities</h4>
            <MoreHorizRoundedIcon />
          </div>
      <div className="visclemobile_widget_bottom">
        <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.pngfind.com/pngs/m/577-5776671_deposit-icon-partnership-green-hd-png-download.png"
          activityName="Exchange"
          activityCurrency="XRP"
          complete={true}
          activityMoney="212.46"
          activityTime="Nov30, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.greendot.com/for-people/deposit-money/ach-bank-transfer/_jcr_content/root/responsivegrid/responsivegrid/layout_container_1296336461/col2Tile1/image.coreimg.png/1589552591909/accountnow-taxpage-01172019.png"
          activityName="Diposite"
          activityCurrency="BTC"
          failed={true}
          activityMoney="1.34346"
          activityTime="Jan22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.pngfind.com/pngs/m/577-5776671_deposit-icon-partnership-green-hd-png-download.png"
          activityName="Exchange"
          activityCurrency="XRP"
          complete={true}
          activityMoney="212.46"
          activityTime="Feb30, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://www.greendot.com/for-people/deposit-money/ach-bank-transfer/_jcr_content/root/responsivegrid/responsivegrid/layout_container_1296336461/col2Tile1/image.coreimg.png/1589552591909/accountnow-taxpage-01172019.png"
          activityName="Diposite"
          activityCurrency="BTC"
          failed={true}
          activityMoney="1.34346"
          activityTime="Apr22, 2021"
                          />
                                  <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
        />
                <RightWidgetBottom
          activityIcon="https://d30rsmlsco0cp0.cloudfront.net/site-images/wsite/wsite-lite/mobile/instant_withdrawals.png"
          activityName="Withdraw"
          activityCurrency="USDT"
          complete={true}
          activityMoney="2712.46"
          activityTime="Nov22, 2021"
        />
      </div>
    </div>
  );
}

export default MainPage;
