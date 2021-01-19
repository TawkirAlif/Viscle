import React from "react";
import { Avatar } from "@material-ui/core";
import "./MobileExchange.css";
import Sidebar from "./Widget/Sidebar/Sidebar";
import Header from "./Header/Header";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import ExchangeMiddleBottomLeft from './ExchangePage/ExchangeMiddleBottomLeft'
import TrendingUpRoundedIcon from "@material-ui/icons/TrendingUpRounded";
import TrendingDownRoundedIcon from "@material-ui/icons/TrendingDownRounded";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

function MobileExchange({
  currencyIcon,
  timeInfo,
  trendPercent,
  topRate,
  lowRate,
}) {
  const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid white",
      fontSize: 18,
      fontWeight: 600,
      minWidth: 70,
      maxWidth: 70,
      padding: "10px 26px 10px 12px",
      marginLeft: "30px",
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
        borderRadius: 5,
        borderColor: "whitesmoke",
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
  const [currency, setCurrency] = React.useState("");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="ViscleMobile" id="">
      <div className="ViscleMobile_sidebar">
        <Sidebar />
      </div>
      <div className="ViscleMobile_body" id="ViscleMobile_body">
        <div className="app_body_header"></div>
        <Header />
        <div className="ViscleMobile_body_main_middle">
          <div className="ViscleMobile_body_main_middle_top">
            <div></div>
            <div className="ViscleMobile_body_main_middle_middle">
              <div className="ViscleMobile_body_main_middle_top_left">
                <div className="currency__info_box">
                  <Avatar src={currencyIcon} />
                  <div className="exchangemiddletop_currency_info">
                    <p className="Currency__Info__Box_header">
                      {" "}
                      <FormControl className={classes.margin}>
                        <Select
                          labelId="customized-select-label"
                          id="customized-select"
                          value={currency}
                          onChange={handleChange}
                          input={<BootstrapInput />}
                        >
                          <MenuItem value={"Doller"}>USD</MenuItem>
                          <MenuItem value={"Bitcoin"}>BTC</MenuItem>
                          <MenuItem value={"Rupe"}>INR</MenuItem>
                          <MenuItem value={"Euro"}>EUR</MenuItem>
                          <MenuItem value={"Taka"}>BDT</MenuItem>
                        </Select>
                      </FormControl>
                    </p>
                    <p className="exchangemiddletop_currency_name">
                      {currency}
                    </p>
                  </div>
                </div>
              </div>
              <div className="ViscleMobile_body_main_middle_top_right">
                <div className="viscle_mobile_currency__info__box">
                  <div className="currencyUpdate">
                    <p className="Currency__Info__Box_header">
                      {timeInfo} Change
                    </p>
                    <div className="exchangemiddletop_chenging_percent">
                      <div>
                        <span>
                          {topRate && (
                            <TrendingUpRoundedIcon
                              style={{
                                color: "green",
                                fontSize: "18px",
                                marginRight: "5px",
                              }}
                            />
                          )}
                        </span>
                      </div>
                      <div>
                        {topRate && (
                          <p style={{ color: "green", fontSize: "15px" }}>
                            {trendPercent}
                          </p>
                        )}
                      </div>
                      <div>
                        <span>
                          {lowRate && (
                            <TrendingDownRoundedIcon
                              style={{
                                color: "red",
                                fontSize: "18px",
                                marginRight: "5px",
                              }}
                            />
                          )}
                        </span>
                      </div>
                      <div>
                        {lowRate && (
                          <p style={{ color: "red", fontSize: "15px" }}>
                            {trendPercent}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <ExchangeMiddleBottomLeft currencyInfo='BTC' oInfo='9.23874' hInfo='0.27394' cInfo='6.37924' lInfo='3.28304'/>
        </div>
        <div className="ViscleMobile_body_bottom">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}

export default MobileExchange;
