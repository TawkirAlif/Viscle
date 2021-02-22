import { Button } from "@material-ui/core";
import React from "react";
import "./WalletMiddleHeader.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AlbumIcon from "@material-ui/icons/Album";

function WalletMiddleHeader() {
  return (
    <div className="walletmiddleheader">
      <div className="wallet__middle__header__header">
        <div className="wallet__middle__header__header_left">
          <h4>Total Balance</h4>
        </div>
        <div className="wallet__middle__header__header_right">
          <Button>
            <CreditCardIcon /> Withdraw
          </Button>
          <Button>
            <AccountBalanceIcon /> Deposit
          </Button>
        </div>
      </div>
      <div className="wallet__middle__header__header__middle">
        <div className="wallet__middle__header__header__middle_header">
          <div className="wallet__middle__header__header__middle_header_left">
            <h1>0.368812</h1>
          </div>
          <div className="wallet__middle__header__header__middle_header_right">
            <p>BTC</p>
          </div>
        </div>
        <div className="wallet__middle__header__header__middle_bottom">
          <p>37,345.00 USD</p>
        </div>
        <div className="wallet__middle__header__header_bottom">
          <div className="wallet__middle__header__header_left">
                                          <div className="wallet__middle__header__header_left_left">
                                                  <div className='balance__box'>
              <div className="wallet__middle__header__header_balanceBox">
                <div className="balance__box__left">
                  <AlbumIcon style={{ color: "rgb(102, 0, 212)" }} />
                </div>
                <div className="balance__box__right">
                  <p className="balance__name">Exchange Balance</p>
                  <p className="wallet__middle__header__header_balanceBox_balance">
                    0.25654673.839 BTC
                  </p>
                  <p className="wallet__middle__header__header_balanceBox_balance_usd">
                    3700.96 USD
                  </p>
                </div>
              </div>
              <div className="wallet__middle__header__header_balancebox">
                <div className="balance__box__left">
                  <AlbumIcon style={{ color: "rgb(10, 125, 227)" }} />
                </div>
                <div className="balance__box__right">
                  <p className="balance__name">Exchange Balance</p>
                  <p className="wallet__middle__header__header_balanceBox_balance">
                    0.25654673.839 BTC
                  </p>
                  <p className="wallet__middle__header__header_balanceBox_balance_usd">
                    3700.96 USD
                  </p>
                </div>
              </div>
              </div>
              <div className="wallet__middle__header__header_bottom_rateBox">
                <div className="rateBox__top">
                  <p>Exchange Balance</p>
                  <div className="exchangeRateBox">
                    <Button ></Button>
                  </div>
                </div>
                <div className="rateBox__top">
                  <p>Asset Balance</p>
                  <div className="assetRateBox">
                    <Button ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletMiddleHeader;
