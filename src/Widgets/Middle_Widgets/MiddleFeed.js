import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopRate from "@material-ui/icons/TrendingUpRounded";
import LowRate from "@material-ui/icons/TrendingDownRounded";
import "./MiddleFeed.css";

function MiddleFeed({
  currencyName,
  currencyShortName,
  currencyIcon,
  currencyPic,
  time,
  ratePoint,
  ratePercent,
  topRate,
  lowRate,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(0),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

  const classes = useStyles();
  return (
    <div classname="middlefeed">
      <div className="feedbox">
        <div className="currencyHeader">
          <div className="currencyInfo">
            <div className={classes.root}>
              <Avatar alt="" src={currencyPic} className={classes.large} />
            </div>
            <div className="currency__Info">
              <div className="currency__info">
                <h2>{currencyName}</h2>
              </div>
              <div className="currency__info">
                <p>{currencyShortName}</p>
              </div>
            </div>
          </div>
          <div className="feedbox__time">{time}</div>
        </div>
        <div className="currencyMiddle">
          <div className="rateBox">
            <div className="rate__point">
              <h3 className="r_p">
                {ratePoint}
                {currencyIcon} {currencyShortName}
              </h3>
            </div>
            <div className="ratebox_right">
              <span>{topRate && <TopRate className="top_rate_badge" />}</span>
              <span>{lowRate && <LowRate className="low_rate_badge" />}</span>
              <span>
                {topRate && <p className="top_rate">{ratePercent} % </p>}
              </span>
              <span>
                {lowRate && <p className="low_rate">{ratePercent} % </p>}
              </span>
            </div>
          </div>
            <div className="tranding">
        <img src='https://pbs.twimg.com/media/Eq4zPa7UUAYCN5a?format=png&name=small' alt=''/>
            </div>
        </div>
        <div className="currencyBottom"></div>
      </div>
    </div>
  );
}

export default MiddleFeed;
