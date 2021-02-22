import { Avatar } from "@material-ui/core";
import React from "react";
import "./RightWidgetBottom.css";

function RightWidgetBottom({
  activityIcon,
  activityName,
  activityCurrency,
  complete,
  failed,
  activityMoney,
  activityTime,
}) {
  return (
    <div className="visclemobile_rightwidgetbottom">
      <div className="activitybox">
        <div className="activity_Info">
          <Avatar className="activity_icon" src={activityIcon} />
          <div className="activity_info">
            <p className="activity_name">
              {activityName} {activityCurrency}
            </p>
            <span>
              {complete && <p className="activity_status">Complete</p>}
            </span>
            <span>{failed && <p className="activity_Status">Failed</p>}</span>
            <p className="activity_monye">
              {activityMoney} {activityCurrency}
            </p>
          </div>
        </div>
        <div className="activity_time">{activityTime}</div>
      </div>
      <div className="visclemobile_activityBoxBottom"></div>
    </div>
  );
}

export default RightWidgetBottom;
