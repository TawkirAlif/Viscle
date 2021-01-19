import { Button } from "@material-ui/core";
import React from "react";
import "./Activites.css";
import EventNoteRoundedIcon from "@material-ui/icons/EventNoteRounded";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import InputBase from "@material-ui/core/InputBase";
import LeftWidget from "./LeftWidget";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Avatar } from "@material-ui/core";
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import ActivitiesFeed from './ActivitiesFeed'
import MuseumRoundedIcon from '@material-ui/icons/MuseumRounded';
import TransformRoundedIcon from '@material-ui/icons/TransformRounded';

function Activites() {
  const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 5,
      position: "relative",
      backgroundColor: "whitesmoke",
      alignItems: "center",
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
        alignItems: "center",
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
  const [userChoose, setUserChoose] = React.useState("Market Cap");
  const handleChange = (event) => {
    setUserChoose(event.target.value);
  };

  const handleWidth = (e) => {
    document.getElementById("activites_middle").style.width = "850px";
    document.getElementById("activitySidebar").style.width = "400px";
    document.getElementById("activitySidebar").style.marginTop = "0px";
  }
  const handleWidthToClose = (e) => {
    document.getElementById("activites_middle").style.width = "100%";
    document.getElementById("activitySidebar").style.width = "0px";
    document.getElementById("activitySidebar").style.marginTop = "2000px";
  }

  return (
    <div className="activites">
      <div className="activities_left_widget">
        <LeftWidget />
      </div>
      <div className='activites_middle' id='activites_middle'>
      <div className="activites_middle_widget_top">
        <div className="top_activites_middle_widget_top">
          <Button>All</Button>
          <Button>Withdrawals</Button>
          <Button>Deposite</Button>
          <Button>Bank withdaws</Button>
        </div>
        <div>
          <FormControl className={classes.margin}>
            <Select
              className="activities_left_widget_form_icon"
              labelId="customized-select-label"
              id="customized-select"
              value={userChoose}
              onChange={handleChange}
              input={
                <BootstrapInput className="activities_left_widget_form_icon" />
              }
            >
              <MenuItem value={"All"}>
                <div className="activities_left_widget_form_icon">
                  <EventNoteRoundedIcon />
                  <p>All</p>
                </div>
              </MenuItem>
              <MenuItem value={"A - Z"}>
                <div className="activities_left_widget_form_icon">
                  <EventNoteRoundedIcon />
                  <p>All</p>
                </div>
              </MenuItem>
              <MenuItem value={"Eng/BTC"}>
                {" "}
                <div className="activities_left_widget_form_icon">
                  <EventNoteRoundedIcon />
                  <p>All</p>
                </div>
              </MenuItem>
              <MenuItem value={"BTC/INR"}>BTC/INR</MenuItem>
              <MenuItem value={"DEMO"}>Eng/EUR</MenuItem>
              <MenuItem value={"demo"}>Eng/BDT</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>


      <div className='activities_left_widget_bottom_header'>
        <h2>History</h2>
        <div className='activities_left_widget_bottom_header_top'>
            <div>Time</div>
            <div className='activitiesfeed_right'>
          <div>Account/Date</div>
            <div>Address/Transaction</div>
            </div>
        </div>
        </div>


        <div className='Activities_middle_ActivitiesFeed'>
          
          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" currencySymble='BTC' Activity="Withdraw"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" currencySymble='ETH' Activity="Deposite"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" currencySymble='BTC' Activity="Withdraw"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" currencySymble='ETH' Activity="Deposite"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" currencySymble='BTC' Activity="Withdraw"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" currencySymble='ETH' Activity="Deposite"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" currencySymble='BTC' Activity="Withdraw"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" currencySymble='ETH' Activity="Deposite"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png" currencySymble='BTC' Activity="Withdraw"/>
          </div>

          <div onClick={handleWidth}>
          <ActivitiesFeed currencyIcon="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" currencySymble='ETH' Activity="Deposite"/>
          </div>

        </div>
        
    </div>
      <div className='activities_right_widget' id='activitySidebar'>
      <div className="activities_right_widget__widget__header">
            <div className="activities_right_widget__widget__header_avatar">
              {" "}
              <Avatar src="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png" />{" "}
            </div>
            <div className="activities_right_widget__widget__header_info">
              <p className="activities_right_widget_coin">Diposite USDT</p>
              <p className="activities_right_widget_coin_name">Jan 22, 2021 10:20:35</p>
            </div>
            <div className="activities_right_widget__widget__header_close">
              {" "}
              <CloseRoundedIcon onClick={handleWidthToClose} />{" "}
            </div>
        </div>
        <div className='activities_right_widget_2nd'>
          <div className='activities_right_widget_2nd_top'>
            <h1>5340.000</h1>
            <p>USDT</p>
          </div>
          <div className='activities_right_widget_2nd_bottom'>
            <p>834rhr874g483je9i98</p>
          </div>
        </div>
        <div className='activities_right_widget_3rd'>
              <RadioButtonCheckedRoundedIcon />
          <div className='activities_right_widget_3rd_right'>
            <h5>Status</h5>
            <p>Complete</p>
              </div>
        </div>
        <div className='activities_right_widget_4rd'>
              <MuseumRoundedIcon />
          <div className='activities_right_widget_4rd_right'>
            <h5>Amount</h5>
            <p>14,399.32 USDT</p>
              </div>
        </div>
        <div className='activities_right_widget_4rd'>
              <DnsRoundedIcon />
          <div className='activities_right_widget_4rd_right'>
            <h5>Address</h5>
            <p>64g84h8EGFRRX778eyr</p>
              </div>
        </div>
        <div className='activities_right_widget_4rd'>
              <TransformRoundedIcon />
          <div className='activities_right_widget_4rd_right'>
            <h5>Transaction ID</h5>
            <p>8237GHVsa28JGw893jeu9</p>
              </div>
        </div>
    </div>
    </div>
  );
}

export default Activites;
