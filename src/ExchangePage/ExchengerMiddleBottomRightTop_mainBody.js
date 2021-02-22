import { colors } from "@material-ui/core";
import React from "react";
import "./ExchengerMiddleBottomRightTop_mainBody.css";

function ExchengerMiddleBottomRightTop_mainBody({
  topRate,
  lowRate,
  price,
  amount,
  total,
}) {
  return (
    <div>
      <div className="topRate">
        {lowRate && (
          <div
            style={{ backgroundColor: "rgb(255, 196, 196)" }}
            className="ExchengerMiddleBottomRightTop_mainBody_toprate_price"
          >
            <p style={{ color: " rgb(255, 74, 74)" }} className="">
              {price}
            </p>
          </div>
        )}

        {topRate && (
          <div
            style={{ backgroundColor: "rgb(192, 239, 226)" }}
            className="ExchengerMiddleBottomRightTop_mainBody_toprate_price"
          >
            <p style={{ color: " rgb(28, 195, 147)" }} className="">
              {price}
            </p>
          </div>
        )}
        <div className="ExchengerMiddleBottomRightTop_mainBody_toprate_p">
          <p>{amount}</p>
        </div>
        <div className="ExchengerMiddleBottomRightTop_mainBody_toprate_p">
          <p>{total}</p>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default ExchengerMiddleBottomRightTop_mainBody;
