import React from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./Middle_Widget.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Button } from "@material-ui/core";

function Middle_Widgets() {
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
  const [userChoose, setUserChoose] = React.useState("");
  const handleChange = (event) => {
    setUserChoose(event.target.value);
  };
  return (
    <div className="middlewidget">
      <div className="middle__widget__top">
        <div
          style={{
            backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
          }}
          className="middle__widget__top_messageBox"
        >
          <div className="middle__widget__top_messageBox_close">
            <div className="middle__widget__top_messageBox_time">
              <p>21 june, 2021</p>
            </div>
            <CloseRoundedIcon />
          </div>
          <div className="middle__widget__top_messageBox_messageHeader">
            <h1>Assest Dilistings Update</h1>
          </div>
          <div className="middle__widget__top_messageBox_message">
            <p>
              The Grin blockchain has presented singnificant technical
              challenges.
            </p>
          </div>
          <div className="middle__widget__top_messageBox_button">
            <Button>Find More</Button>
          </div>
          <div className="middle__widget__top_messageBox_active">
            <div className="middle__widget__top_messageBox_Active1"></div>
            <div className="middle__widget__top_messageBox_Active2"></div>
            <div className="middle__widget__top_messageBox_Active2"></div>
          </div>
        </div>
      </div>
      <div className="middle__widget__middle">
        <div className="middle__widget__middle_buttons">
          <Button className="middle__widget__middle_button">
            <>Core Assest</>
          </Button>
          <Button className="middle__widget__middle_button">
            <>Top Gainers</>
          </Button>
          <Button className="middle__widget__middle_button">
            <>Top Losers</>
          </Button>
          <Button className="middle__widget__middle_button">
            <>New</>
          </Button>
        </div>
        <div>
          <div className="middle_widget_select">
            <FormControl className={classes.margin}>
              <Select
                labelId="customized-select-label"
                id="customized-select"
                value={userChoose}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="Market Cap">Market Cap</MenuItem>
                <MenuItem value={0}>Eng/USD</MenuItem>
                <MenuItem value={0}>Eng/BTC</MenuItem>
                <MenuItem value={0}>Eng/INR</MenuItem>
                <MenuItem value={0}>Eng/EUR</MenuItem>
                <MenuItem value={0}>Eng/BDT</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="middle__widget__bottom"></div>
      </div>
    </div>
  );
}

export default Middle_Widgets;
