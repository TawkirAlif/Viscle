import { Button } from '@material-ui/core'
import React from 'react'
import './PromotionPageFeed.css'
import { useHistory } from "react-router-dom";
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';

function PromotionPageFeed() {

        const history = useHistory();

        const promotionSubPage = (e) => {
                e.preventDefault();
                if ('submit')
                    history.push('/promotionsubpage')
              }
        
        return (
                <div className='promotionpagefeed'>
                        <div className='promotionpagefeed_header'     style={{
                  backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
                        }}></div>
                        
                        <div className='promotionpagefeed_time'>
                                <p>Oct 29th - Nov 29th</p>
                                <h3>Bitcoin X TORN Net Deposite Compaing</h3>
                        </div>
                        <div className='promotionpagefeed_button'>
                                <Button type="submit" onClick={promotionSubPage} ><LaunchRoundedIcon className='promotionpagefeed_button_icon'/>Deposite Bitcoin</Button>
                        </div>
                        
                </div>
        )
}

export default PromotionPageFeed
