import React from "react";
import "./Heade.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import SystemUpdateAltRoundedIcon from "@material-ui/icons/SystemUpdateAltRounded";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Avatar } from "@material-ui/core";

function Header({profilrPic}) {
  const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid white",
      fontSize: 18,
      fontWeight: 600,
      minWidth: 80,
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
        borderRadius: 5,
        borderColor: "#fafafa",
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
    <div className="header">
      <div className="header__left">
        <img
          className="logo"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/133732630_383628032737473_3554463676936883782_n.png?_nc_cat=109&ccb=2&_nc_sid=58c789&_nc_eui2=AeFzl11LgUJhIZKXNZCaIcO7smrNKGQgu7Wyas0oZCC7tTvui58k4Bo7zqkdiru8na0Xcto141I9HdZORigeADPi&_nc_ohc=wAcvrmEqfoMAX92vtV4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=06336ec79b2dc94156a99ebde613c5ae&oe=6018B4EA"
          alt=""
        />
        <KeyboardBackspaceRoundedIcon className="header_back_icon" />
      </div>
      <div className="header__middle">
        <div className="header__input">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Search Today's Trending?" />
        </div>
      </div>
      <div className="header__right">
        <NotificationsNoneRoundedIcon className="header__right_icon" />
        <SystemUpdateAltRoundedIcon className="header__right_icon"/>
        <div className='header_select'>
          <FormControl className={classes.margin}>
            <Select
              labelId="customized-select-label"
              id="customized-select"
              value={currency}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Eng/USD</MenuItem>
              <MenuItem value={20}>Eng/BTC</MenuItem>
              <MenuItem value={30}>Eng/INR</MenuItem>
              <MenuItem value={30}>Eng/EUR</MenuItem>
              <MenuItem value={30}>Eng/BDT</MenuItem>
            </Select>
          </FormControl>
                          </div>
                          <Avatar className='header_avatar' src={profilrPic}/>
      </div>
    </div>
  );
}

export default Header;
