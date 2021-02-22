import { Button } from "@material-ui/core";
import React from "react";
import "./ExchangeMiddleBottomLeftBottom.css";
import ExchangeMiddleBottomLeftBottom_bodyFeed from "./ExchangeMiddleBottomLeftBottom_bodyFeed";
import { makeStyles, withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function ExchangeMiddleBottomLeftBottom() {


  
  const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 5,
      position: "relative",
      fontSize: 18,
      fontWeight: 300,
      backgroundColor: 'whitesmoke',
      width: 300,
      borderRadius: 10,
      padding: "20px 36px 20px 22px",
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
  const [userChoose, setUserChoose] = React.useState("Market Trades");
  const handleChange = (event) => {
    setUserChoose(event.target.value);
  };


  return (

    <div className="visclemobile_exchangemiddlebottomleftbottom">
      <div className="visclemobile_ExchangeMiddleBottomLeftBottom_buttons">
        <h3>{userChoose}</h3>
          <div className="FormSelect">
          <div></div>
            <FormControl className={classes.margin}>
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={userChoose}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="Market Cap">Market Cap</MenuItem>
                <MenuItem value={"My Trades"}>My Trades</MenuItem>
                <MenuItem value={"My Orders"}>My Orders</MenuItem>
                <MenuItem value={"Favorites"}>Favorites</MenuItem>
              </Select>
            </FormControl>
          <div></div>
          </div>
        <div className="visclemobile_ExchangeMiddleBottomLeftBottom_body">
          <div className="visclemobile_ExchangeMiddleBottomLeftBottom_body-top">
            <div className="visclemobile_middlebottomleftbottom_bodyHead">
              <p className="visclemobile_table__name">Time</p>
            </div>
            <div className="visclemobile_middlebottomleftbottom_bodyHead">
              <p className="visclemobile_table__name">Price(USDT)</p>
            </div>
            <div className="visclemobile_middlebottomleftbottom_bodyHead">
              <p className="visclemobile_table__name">Amount(BTC)</p>
            </div>
            <div className="visclemobile_middlebottomleftbottom_bodyHead">
              <p className="visclemobile_table__name">Total (USDT)</p>
            </div>
          </div>
          <div className="ExchangeMiddleBottomLeftBottom_body-main">
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
              <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
              <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='29788.28'
              amount="64672.3654"
              total="357873982"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeMiddleBottomLeftBottom;
