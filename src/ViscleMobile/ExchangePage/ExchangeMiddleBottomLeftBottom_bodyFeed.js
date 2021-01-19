import React from "react";
import "./ExchangeMiddleBottomLeftBottom_bodyFeed.css";

function ExchangeMiddleBottomLeftBottom_bodyFeed({
  topRate,
  lowRate,
  time,
  price,
  amount,
  total
}) {
  return (
    <div className="exchangemiddlebottomleftbottom_bodyfeed">
      <div className="middlebottomleftbottom_bodyfeed">
        <p className="exchangemiddlebottomleftbottom_bodyfeed_text">{time}</p>
      </div>
      <div className="middlebottomleftbottom_bodyfeed">
        <span>
          {topRate && (
            <p className="exchangemiddlebottomleftbottom_bodyfeed_toprate">
            {price}
            </p>
          )}
        </span>
        <span>
          {lowRate && (
            <p className="exchangemiddlebottomleftbottom_bodyfeed_lowrate">
            {price}
            </p>
          )}
        </span>
      </div>
      <div className="middlebottomleftbottom_bodyfeed">
        <p className="exchangemiddlebottomleftbottom_bodyfeed_text">{amount}</p>
      </div>
      <div className="middlebottomleftbottom_bodyfeed">
        <p className="exchangemiddlebottomleftbottom_bodyfeed_text">{total}</p>
      </div>
    </div>
  );
}

export default ExchangeMiddleBottomLeftBottom_bodyFeed;
