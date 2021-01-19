import React from "react";
import "./Header.css";
import ShortTextRoundedIcon from "@material-ui/icons/ShortTextRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";

function Header() {
        const handlesideBar = (e) => {
                document.getElementById('visclemobilesidebar').style.marginLeft = '0px'
                document.getElementById('ViscleMobile_body').style.position = 'relative'

        }
  return (
    <div className="ViscleMobile_header">
      <div className="ViscleMobile_header_top">
        <div className="ViscleMobile_header_top_logo">
          <img src="https://pbs.twimg.com/media/Ermizi3U0AAX_tu?format=png&name=900x900" alt='tawkir'/>
                          </div>
                          <div className='ViscleMobile_header_right'>
          <div className="ViscleMobile_header_top_notification">
            <NotificationsActiveRoundedIcon />
          </div>
          <div className="ViscleMobile_header_top_close">
           <ShortTextRoundedIcon onClick={handlesideBar}/>
        </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Header;
