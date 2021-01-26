import React, { useState }  from "react";
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
import { Avatar, Button } from "@material-ui/core";

function Header({ profilrPic }) {
  
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");
  };

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
  const [currency, setCurrency] = React.useState("Eng/BTC");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="logo"
          src="https://pbs.twimg.com/media/EsFbuJ0VQAEbach?format=png&name=small"
          alt=""
        />
        <KeyboardBackspaceRoundedIcon className="header_back_icon" />
      </div>
      <div className="header__middle">
        <div className="header__input">
          <SearchIcon className="search__icon" />
          <input type="text" placeholder="Search Today's Trending?"  value={input}
            onChange={(e) => setInput(e.target.vlaue)} />
          <Button  onClick={handleSubmit} type="submit"></Button>
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
              <MenuItem value={10}>Eng/USD</MenuItem>
              <MenuItem value={20}>Eng/BTC</MenuItem>
              <MenuItem value={30}>Eng/INR</MenuItem>
              <MenuItem value={40}>Eng/EUR</MenuItem>
              <MenuItem value={50}>Eng/BDT</MenuItem>
            </Select>
          </FormControl>
                          </div>
                          <Avatar className='header_avatar' src={profilrPic}/>
      </div>
    </div>
  );
}

export default Header;
