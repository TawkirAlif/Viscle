import React, { useState } from "react";
import "./PricePage.css";
import SmallLeftWidget from "./SmallLeftWidget";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import PricePageCategory from "./PricePageCategory";
import PricePageBodyBottomFeed from "./PricePageBodyBottomFeed";
import LeftWidget from './LeftWidget'
import { useHistory } from "react-router-dom";
import PricePageFeedInfo from './PricePageFeedInfo'

function PricePage() {

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
  const [userChoose, setUserChoose] = React.useState("Market Cap");
  const handleChange = (event) => {
    setUserChoose(event.target.value);
  };

  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };

  const PricePageFeedInfo = (e) => {
    e.preventDefault();
    if ('submit')
        history.push('/pricepagefeedinfo')
  }

  return (
    <div className="pricepage">
      <LeftWidget />
      <div className="price__page__body">
        <div className="price__page__body_header">
          <div className="price__page__body_header_right">
            <h2>Search by token name, symbol or address</h2>
            <p>Find the best prices accross exchange network</p>
            <div className="price__page__body_header_input">
              <SearchIcon className="price__page__body_header_input_search__icon" />
              <input
                type="text"
                placeholder="Search Today's Trending?"
                value={input}
                onChange={(e) => setInput(e.target.vlaue)}
              />
              <Button onClick={handleSubmit} type="submit"></Button>
            </div>
          </div>
          <div className="price__page__body_header_left">
            <img
              src="https://pbs.twimg.com/media/ErJ60TyVQAAeWfI?format=png&name=small"
              alt=""
            />
          </div>
        </div>
        <div className="price__page__body_header_middle">
          <PricePageCategory />
        </div>
        <div className="price__page__body_header_middleBottom">
          <div>
            <h3>Today's Cryptocurrency prices</h3>
          </div>
          <div>
            <FormControl className={classes.margin}>
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={userChoose}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="Market Cap">Market Cap</MenuItem>
                <MenuItem value={'A - Z'}>A-Z</MenuItem>
                <MenuItem value={'Eng/BTC'}>Eng/BTC</MenuItem>
                <MenuItem value={'BTC/INR'}>BTC/INR</MenuItem>
                <MenuItem value={"DEMO"}>Eng/EUR</MenuItem>
                <MenuItem value={"demo"}>Eng/BDT</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="price__page__bodyBottom">
          <div className="price__page__bodyBottom_header">
            <div className="empty"></div>
            <div className="price__page__bodyBottom_header_container">
              <div className="TokenSymble">
                <div classname="token">
                  <p>Token</p>
                </div>
                <div classname="symble">
                  <p>Symble</p>
                </div>
              </div>
            </div>
            <div className="price__page__bodyBottom_header_container">
              <div className="PriceTime">
                <div className="price">
                  <p>Price</p>
                </div>
                <div className="time">
                  <p>24h</p>
                </div>
              </div>
            </div>
            <div className="price__page__bodyBottom_header_container">
              <div className="MarketCapVolume">
                <div className="marketCap">
                  <p>{userChoose}</p>
                </div>
                <div className="volume">
                  <p>Volume</p>
                </div>
              </div>
            </div>
            <div className="price__page__bodyBottom_header_container">
              <h3>This will be the graph</h3>
            </div>
          </div>
          <div className="price__page__bodyBottom_body"               type='submit'
              onClick={PricePageFeedInfo}>
            <PricePageBodyBottomFeed

              currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              currencyName="Bitcoin"
              currencySymble="BTC"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
              currencyName="Ethereum"
              currencySymble="ETH"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://cryptologos.cc/logos/tokenbox-tbx-logo.png"
              currencyName="Tokenbox"
              currencySymble="TBX"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              lowRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://www.kindpng.com/picc/m/18-186648_steemit-steem-dollars-hd-png-download.png"
              currencyName="Steem"
              currencySymble="STM"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://www.kindpng.com/picc/m/127-1279698_ripple-coin-xrp-png-transparent-png.png"
              currencyName="Ripple"
              currencySymble="XRP"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://assets.coingecko.com/coins/images/4163/large/ubex.png?1547039421"
              currencyName="Ubex"
              currencySymble="UBW"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              lowRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              currencyName="Bitcoin"
              currencySymble="BTC"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              currencyName="Bitcoin"
              currencySymble="BTC"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
              currencyName="Ethereum"
              currencySymble="ETH"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              lowRate={true}
            />
                        <PricePageBodyBottomFeed
              currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              currencyName="Bitcoin"
              currencySymble="BTC"
              price="64782.4385"
              marketCap="6753983.37"
              volume="65327823.237"
              rate="2.43%"
              topRate={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
