import { Button } from "@material-ui/core";
import React from "react";
import "./ExchengerMiddleBottomRightBuySellBox.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function ExchengerMiddleBottomRightBuySellBox() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '87%',
      backgroundColor: "whitesmoke",
      borderRadius: 10,
      color: "gray",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [ordertype, setOrdertype] = React.useState("");

  const handleChange = (event) => {
    setOrdertype(event.target.value);
  };

  return (
    <div className="viscle_mobile_exchengermiddlebottomrightbuysellbox">
      <div className="buysellbutton">
        <div className="buy">
          <Button>Buy</Button>
        </div>

        <div className="sell">
          <Button>Sell</Button>
        </div>
      </div>
      <div className="formselect">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="select-outlined-label">Order Type</InputLabel>
          <Select
            labelId="select-outlined-label"
            id="demo-simple-select-outlined"
            value={ordertype}
            onChange={handleChange}
            label="Order Type"
          >
            <MenuItem value={1}>Stop Limit</MenuItem>
            <MenuItem value={2}>Start Limit</MenuItem>
            <MenuItem value={3}>All Wallet</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="buysellboxother">
        <div className="buysellboxotherheader">
          <p>Limit Price</p>
        </div>
        <div className="buysellboxotherbottom">
          <div className="buysellboxotherbottomp1">
            <p>37193.23</p>
          </div>
          <div className="buysellboxotherbottomp_usdt">
            <p>USDT</p>
          </div>
        </div>
      </div>

      <div className="buysellboxother">
        <div className="buysellboxotherheader">
          <p>Amount</p>
        </div>
        <div className="buysellboxotherbottom">
          <div className="buysellboxotherbottomp1">
            <p>37193.23</p>
          </div>
          <div className="buysellboxotherbottomp_btc">
            <p>BTC</p>
          </div>
        </div>
      </div>

      <div className="buysellboxother">
        <div className="buysellboxotherheader">
          <p>Total Amount</p>
        </div>
        <div className="buysellboxotherbottom">
          <div className="buysellboxotherbottomp1">
            <p>11.283389</p>
          </div>
          <div className="buysellboxotherbottomp_usdt">
            <p>USDT</p>
          </div>
        </div>
      </div>

                  <div className="viscle_mobile_buysellboxbutton">
                          <div></div>
                          <Button>Buy BTC</Button>
                          <div></div>

      </div>
    </div>
  );
}

export default ExchengerMiddleBottomRightBuySellBox;
