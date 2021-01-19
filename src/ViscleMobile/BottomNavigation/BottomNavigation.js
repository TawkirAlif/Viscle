import React from "react";
import InsertDriveFileRoundedIcon from "@material-ui/icons/InsertDriveFileRounded";
import InsertChartRoundedIcon from "@material-ui/icons/InsertChartRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import ImportExportRoundedIcon from "@material-ui/icons/ImportExportRounded";
import "./BottomNavigation.css";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function BottomNavigation() {
  const history = useHistory();

  const mobileexchange = (e) => {
          e.preventDefault();
          if ('submit')
          history.push("/mobileexchange");
  };
  const MobileBuySell = (e) => {
    e.preventDefault();
    if ('submit')
    history.push("/mobilebuysell");
};

  return (
    <div className="bottomnavigation">
      <Button
        className="bottomnavigation_button"
      >
                          <InsertChartRoundedIcon
                                  type="submit"
        onClick={mobileexchange} />
      </Button>
      <Button className="bottomnavigation_button">
        <PostAddRoundedIcon   type="submit"
        onClick={MobileBuySell} />
      </Button>
      <Button className="bottomnavigation_button">
        <ImportExportRoundedIcon />
      </Button>
      <Button className="bottomnavigation_button">
        <InsertDriveFileRoundedIcon />
      </Button>
    </div>
  );
}

export default BottomNavigation;
