import React from "react";
import "./Wallet.css";
import LeftWidget from "./LeftWidget";
import WalletMiddleHeader from "./WalletMiddleHeader";
import WalletPageBodyBottomFeed from "./WalletPageBodyBottomFeed";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import ArrowDropUpRoundedIcon from "@material-ui/icons/ArrowDropUpRounded";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Avatar, Button } from "@material-ui/core";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

function Wallet() {
  const topRate = true;
  const lowRate = false;

  const openNav = (e) => {
    document.getElementById("mySidebar").style.width = "600px";
    document.getElementById("mySidebarWithdraw").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "0px";
    document.getElementById("wallet__page__bodyBottom").style.margin = "0px";
  };
  const closeNav = (e) => {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("mySidebarWithdraw").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "0px";
    document.getElementById("wallet__page__bodyBottom").style.margin =
      "0 170px";
  };
  const backNav = (e) => {
    document.getElementById("mySidebar").style.width = "600px";
    document.getElementById("mySidebarWithdraw").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "0px";
    document.getElementById("wallet__page__bodyBottom").style.margin =
      "0px";
  };
  const backNav2 = (e) => {
    document.getElementById("mySidebar").style.width = "600px";
    document.getElementById("mySidebarWithdraw").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "0px";
    document.getElementById("wallet__page__bodyBottom").style.margin =
      "0px";
  };
  const handleWithdrawMenu = (e) => {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "0px";
    document.getElementById("mySidebarWithdraw").style.width = "600px";
    document.getElementById("wallet__page__bodyBottom").style.margin = "0px";
  };
  const handleDepositeMenu = (e) => {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("mySidebarWithdraw").style.width = "0px";
    document.getElementById("mySidebarDeposite").style.width = "600px";
    document.getElementById("wallet__page__bodyBottom").style.margin = "0px";
  };

  return (
    <div className="wallet">
      <div className="wallet__body">
        <div className="wallet__sidebar">
          <LeftWidget />
        </div>
        <div className="wallet__main__body">
          <div className="wallet__main__body__top">
            <div className="wallettop" id="walletTop">
              <WalletMiddleHeader />
            </div>
          </div>
          <div calssName="wallet__main__body__bottom">
            <div
              className="wallet__page__bodyBottom"
              id="wallet__page__bodyBottom"
            >
              <div className="wallet__page__bodyBottom_header">
                <div className="empty"></div>
                <div className="wallet__page__bodyBottom_header_container">
                  <div className="wallet__bodyTokenSymble">
                    <div classname="wallet__bodytoken">
                      <p>Token</p>
                    </div>
                    <div classname="wallet__bodysymble">
                      <p>Symble</p>
                    </div>
                  </div>
                </div>
                <div className="wallet__page__bodyBottom_header_container">
                  <div className="wallet__bodyPriceTime">
                    <div className="wallet__bodytime">
                      <p>24h</p>
                    </div>
                  </div>
                </div>
                <div className="wallet__page__bodyBottom_header_container">
                  <div className="wallet__bodyMarketCapVolume">
                    <div className="wallet__bodymarket__Cap">
                      <p>On Orders</p>
                    </div>
                    <div className="wallet__bodyavailable__balance">
                      <p>Available Balance</p>
                    </div>
                  </div>
                </div>
                <div className="wallet__page__bodyBottom_header_container">
                  <p className="wallet__page__bodyBottom_header_container_p">
                    Total Balance
                  </p>
                </div>
              </div>
              <div className="wallet__page__bodyBottom_body">
                <div
                  className="WalletPageBodyBottomFeed1"
                  onClick={openNav}
                  value="BTC"
                  value2="Bictcoin"
                  value3="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
                >
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
                    currencyName="Bitcoin"
                    currencySymble="BTC"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed2" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
                    currencyName="Ethereum"
                    currencySymble="ETH"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed3" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://cryptologos.cc/logos/tokenbox-tbx-logo.png"
                    currencyName="Tokenbox"
                    currencySymble="TBX"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    lowRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed4" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://www.kindpng.com/picc/m/18-186648_steemit-steem-dollars-hd-png-download.png"
                    currencyName="Steem"
                    currencySymble="STM"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed5" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://www.kindpng.com/picc/m/127-1279698_ripple-coin-xrp-png-transparent-png.png"
                    currencyName="Ripple"
                    currencySymble="XRP"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed6" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://assets.coingecko.com/coins/images/4163/large/ubex.png?1547039421"
                    currencyName="Ubex"
                    currencySymble="UBW"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    lowRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed7" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
                    currencyName="Bitcoin"
                    currencySymble="BTC"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed8" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
                    currencyName="Bitcoin"
                    currencySymble="BTC"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed9" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
                    currencyName="Ethereum"
                    currencySymble="ETH"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    lowRate={true}
                  />
                </div>
                <div className="WalletPageBodyBottomFeed10" onClick={openNav}>
                  <WalletPageBodyBottomFeed
                    currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
                    currencyName="Bitcoin"
                    currencySymble="BTC"
                    availableBalance="2,837,473,932"
                    availableBalanceAmount="6753983.37"
                    onOrders="65,327,823,237"
                    onOrderAmount="63823.379"
                    rate="2.43%"
                    topRate={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="walletwidget" id="mySidebar">
          <div className="wallet__widget__header">
            <div className="wallet__widget__header_back">
              {" "}
              <KeyboardBackspaceIcon onClick={closeNav} />{" "}
            </div>
            <div className="wallet__widget__header_avatar">
              {" "}
              <Avatar src="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" />{" "}
            </div>
            <div className="wallet__widget__header_info">
              <p className="walletwidget_coin">ETH Balance</p>
              <p className="walletwidget_coin_name">Ethereum</p>
            </div>
            <div className="wallet__widget__header_close">
              {" "}
              <CloseRoundedIcon onClick={closeNav} />{" "}
            </div>
          </div>
          <div className="wallet__money__box">
            <div className="wallet__money__boxHeader">
              <h1>24.1236</h1>
              <div className="wallet__money__boxHeader_symbol_container">
                <p>ETH</p>
              </div>
            </div>
            <div className="wallet__money__boxBottom">
              <p>3,700.96 USD</p>
            </div>
          </div>
          <div className="wallet__money__box_tranding_account">
            <div className="wallet__money__box_tranding_account_left">
              <Avatar src="https://pbs.twimg.com/media/ErEIkiFVQAAcc3y?format=png&name=120x120" />
            </div>
            <div className="wallet__money__box_tranding_account_right">
              <p className="wallet__money__box_tranding_account_right_top">
                Tranding Account
              </p>
              <h2 className="wallet__money__box_tranding_account_right_middle">
                0.234672 BTC
              </h2>
              <p className="wallet__money__box_tranding_account_right_bottom">
                3,795.03 USD
              </p>
            </div>
          </div>
          <div className="wallet__money__box_tranding_account">
            <div className="wallet__money__box_tranding_account_left">
              <Avatar src="https://pbs.twimg.com/media/ErD9UjEVgAEPw18?format=png&name=120x120" />
            </div>
            <div className="wallet__money__box_tranding_account_right">
              <p className="wallet__money__box_tranding_account_right_top">
                Total holdings
              </p>
              <h2 className="wallet__money__box_tranding_account_right_middle">
                0.234672 BTC
              </h2>
              <p className="wallet__money__box_tranding_account_right_bottom">
                3,795.03 USD
              </p>
            </div>
          </div>
          <div className="wallet__widget__bottom">
            <div className="wallet__widget__bottom_header">
              <p>24h Markets</p>
              <p>
                <MoreHorizRoundedIcon />
              </p>
            </div>
            <div className="wallet__widget__bottom_rateBox">
              <div className="wallet__widget__bottom_rateBox_header">
                <div className="wallet__widget__bottom_rateBox_left">
                  <p className="wallet__widget__bottom_rateBox_left_p">
                    Ethereum
                  </p>
                  <p className="wallet__widget__bottom_rateBox_left_symble">
                    ETH
                  </p>
                </div>
                <div className="wallet__widget__bottom_rateBox_right">
                  <p className="wallet__widget__bottom_rateBox_right_p">
                    <ArrowDropUpRoundedIcon />
                    <p>2.05 %</p>
                  </p>
                  <p className="wallet__widget__bottom_rateBox_right_amount">
                    18,245.4 USD
                  </p>
                </div>
              </div>
              <div className="wallet__widget__bottom_rateBox_rate"></div>
            </div>
          </div>
          <div className="wallet__widget__bottom">
            <div className="wallet__widget__bottom_buttons">
              <Button onClick={handleWithdrawMenu}>
                <CreditCardIcon /> Withdraw
              </Button>
              <Button onClick={handleDepositeMenu}>
                <AccountBalanceIcon /> Deposit
              </Button>
            </div>{" "}
          </div>
          <div className="wallet__widget__bottomBox"></div>
        </div>

        <div className="walletwidget" id="mySidebarWithdraw">
          <div className="wallet__widget__header">
            <div className="wallet__widget__header_back">
              {" "}
              <KeyboardBackspaceIcon onClick={backNav} />{" "}
            </div>
            <div className="wallet__widget__header_avatar">
              {" "}
              <Avatar src="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" />{" "}
            </div>
            <div className="wallet__widget__header_info">
              <p className="walletwidget_coin">Withdraw ETH</p>
              <p className="walletwidget_coin_name">Ethereum</p>
            </div>
            <div className="wallet__widget__header_close">
              {" "}
              <CloseRoundedIcon onClick={closeNav} />{" "}
            </div>
          </div>

          <div className="wallet_withdraw_bar_2nd">
            <div className="wallet_withdraw_bar_2nd_header">
              <p>ADDRESS</p>
              <div>
                <p className="wallet_withdraw_bar_2nd_header_count">2</p>
              </div>
            </div>
            <div className="wallet_withdraw_bar_2nd_bottom">
              <div className="wallet_withdraw_bar_2nd_bottom_left">
                <p className="wallet_withdraw_bar_2nd_bottom_left_p">
                  78ft78gi8gu7re45df
                </p>
              </div>
              {topRate && (
                <div className="wallet_withdraw_bar_2nd_bottom_right">
                  <CheckRoundedIcon />
                </div>
              )}
              {lowRate && (
                <div className="wallet_withdraw_bar_2nd_bottom_right">
                  <WarningRoundedIcon style={{ color: "rgb(255, 184, 184)" }} />
                </div>
              )}
            </div>
          </div>


          {lowRate && <div className='wallet_withdraw_bar_3rd' >
            <p className='wallet_withdraw_bar_3rd_top'>Available Balance</p>
            <h4 className='wallet_withdraw_bar_3rd_middle'>0.2537273 ETH</h4>
            <p className='wallet_withdraw_bar_3rd_bottom'>$10.263899 USD</p>
          </div>}
          {topRate && <div className='wallet_withdraw_bar_3rd2'>
            <p className='wallet_withdraw_bar_3rd_top'>Available Balance</p>
            <h4 className='wallet_withdraw_bar_3rd_middle'>0.2537273 ETH</h4>
            <p className='wallet_withdraw_bar_3rd_bottom'>$10.263899 USD</p>
          </div>}


          <div className='wallet_withdraw_bar_4th'>
            <div className='wallet_withdraw_bar_4th_top'>
            <div><p>AMOUNT TO WITHDRAW </p><p className='wallet_withdraw_bar_4th_top_amount'>0.5</p></div>
            <div><p>Max Amount </p></div>
            </div>
            <div className='wallet_withdraw_bar_4th_bottom'><p>$1,000,000,00 daily withdrawal limit.</p></div>
          </div>

          
          <div className="wallet_withdraw_bar_5th">
            <div className="wallet_withdraw_bar_5th_header">
              <p>TRANSACATION FEE</p>
              <div>
                <p className="wallet_withdraw_bar_5th_header_count">2</p>
              </div>
            </div>
            <div className="wallet_withdraw_bar_5th_bottom">
              <div className="wallet_withdraw_bar_5th_bottom_left">
                <p className="wallet_withdraw_bar_5th_bottom_left_p">
                  0.2648938 ETH
                </p>
              </div>
            </div>
          </div>
          
          <div className="wallet_withdraw_bar_5th">
            <div className="wallet_withdraw_bar_5th_header">
              <p>TOTAL</p>
            </div>
            <div className="wallet_withdraw_bar_5th_bottom">
              <div className="wallet_withdraw_bar_5th_bottom_left">
                <p className="wallet_withdraw_bar_5th_bottom_left_p">
                  0.6298754 ETH
                </p>
              </div>
            </div>
          </div>

          <div className='wallet_withdraw_bar_button'>
            <Button>Withdraw</Button>
          </div>


          
          <div className="wallet__widget__bottomBox"></div>
        </div>

        <div className="walletwidget" id="mySidebarDeposite">
          <div className="wallet__widget__header">
            <div className="wallet__widget__header_back">
              {" "}
              <KeyboardBackspaceIcon onClick={backNav2} />{" "}
            </div>
            <div className="wallet__widget__header_avatar">
              {" "}
              <Avatar src="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" />{" "}
            </div>
            <div className="wallet__widget__header_info">
              <p className="walletwidget_coin">Deposite ETH</p>
              <p className="walletwidget_coin_name">Ethereum</p>
            </div>
            <div className="wallet__widget__header_close">
              {" "}
              <CloseRoundedIcon onClick={closeNav} />{" "}
            </div>
          </div>
          <div className="wallet__widget__bottomBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
