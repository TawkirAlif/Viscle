import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './PricePageFeedMiddle.css'
import DragHandleRoundedIcon from '@material-ui/icons/DragHandleRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import LanguageIcon from '@material-ui/icons/Language';
import VerticalSplitRoundedIcon from '@material-ui/icons/VerticalSplitRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import SpeedRoundedIcon from '@material-ui/icons/SpeedRounded';

function PricePageFeedMiddle() {
        return (
                <div className='pricepagefeedmiddle'>
                        <div className='PricePageFeedMiddle_header'>
                                <div className='PricePageFeedMiddle_header_left'>
                                <div className='PricePageFeedMiddle_header_left_left'>
                                                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png'/>
                                                <div className='PricePageFeedMiddle_header_left_left_infoBox'>
                                                        <h2>Bitcoin</h2>
                                                        <p>BTC</p>
                                                </div>
                                </div>
                                        <div className='PricePageFeedMiddle_header_left_right'>
                                                <DragHandleRoundedIcon />
                                </div>
                        </div>
                                <div className='PricePageFeedMiddle_header_right'>
                                <Button><ShareRoundedIcon />Share</Button>
                                <Button><StarRoundedIcon />Watchlist</Button>
                        </div>
                                <div className='PricePageFeedMiddle_header_bottom'>
                        </div>
                        </div>
                                        <div className='PricePageFeedMiddle_header_bottom_info'>
                                                <h1>19,2830.382 USD</h1>
                                                <p>+0.92%</p>
                                        </div>
                                        <div className='PricePageFeedMiddle_rate_box'></div>
                        <div className='PricePageFeedMiddle_rate_box_bottom'>
                        <p>09:00</p>
                        <p>10:00</p>
                        <p>11:00</p>
                        <p>12:00</p>
                        <p>01:00</p>
                        <p>02:00</p>
                        <p>03:00</p>
                        </div>

                        <div className='PricePageFeedMiddle_middle'>
                                <div className='PricePageFeedMiddle_middle_infoCintainer'>
                                        <div className='PricePageFeedMiddle_middle_left'>
                                        <FiberSmartRecordIcon className='PricePageFeedMiddle_middle_left_right_icon'/>
                                        </div>
                                        <div className='PricePageFeedMiddle_middle_left_right'>
                                                <div classname='PricePageFeedMiddle_middle_left_right_top'>
                                                        
                                                <p className='PricePageFeedMiddle_middle_right_top'>
                                                        Marcket Cap
                                                        <FiberManualRecordIcon />
                                                </p>
                                                </div>
                                                <div className='PricePageFeedMiddle_middle_right_bottom'>
                                                        <h3>273,463,43.32 USD</h3>
                                                </div>
                                        </div>
                                </div>

                                <div className='PricePageFeedMiddle_middle_infoCintainer'>
                                        <div className='PricePageFeedMiddle_middle_left'>
                                                <EqualizerRoundedIcon className='PricePageFeedMiddle_middle_left_right_icon'/>
                                        </div>
                                        <div className='PricePageFeedMiddle_middle_left_right'>
                                                <div classname='PricePageFeedMiddle_middle_left_right_top'>
                                                        
                                                <p className='PricePageFeedMiddle_middle_right_top'>
                                                        Volume 24h
                                                        <FiberManualRecordIcon />
                                                </p>
                                                </div>
                                                <div className='PricePageFeedMiddle_middle_right_bottom'>
                                                        <h3>273,463,43.32 USD</h3>
                                                </div>
                                        </div>
                                </div>


                                <div className='PricePageFeedMiddle_middle_infoCintainer'>
                                        <div className='PricePageFeedMiddle_middle_left'>
                                                <SubjectRoundedIcon className='PricePageFeedMiddle_middle_left_right_icon'/>
                                        </div>
                                        <div >
                                                <div classname='PricePageFeedMiddle_middle_left_right_top'>
                                                        
                                                <p className='PricePageFeedMiddle_middle_right_top'>
                                                        Circulating Supply
                                                        <FiberManualRecordIcon />
                                                </p>
                                                </div>
                                                <div className='PricePageFeedMiddle_middle_right_bottom'>
                                                        <h3>273,463,43.32 BTC</h3>
                                                </div>
                                        </div>
                                </div>

                                <div className='PricePageFeedMiddle_middle_infoCintainer'>
                                        <div className='PricePageFeedMiddle_middle_left'>
                                                <SpeedRoundedIcon className='PricePageFeedMiddle_middle_left_right_icon'/>
                                        </div>
                                        <div className='PricePageFeedMiddle_middle_left_right'>
                                                <div classname='PricePageFeedMiddle_middle_left_right_top'>
                                                        
                                                <p className='PricePageFeedMiddle_middle_right_top'>
                                                        Total Supply
                                                        <FiberManualRecordIcon />
                                                </p>
                                                </div>
                                                <div className='PricePageFeedMiddle_middle_right_bottom'>
                                                        <h3>273,463,43.32 BTC</h3>
                                                </div>
                                        </div>
                                </div>
                        </div>



                        <div className='PricePageFeedMiddle_about_box'>
                        <div className='PricePageFeedMiddle_about_box_left'>
                                        <h4>About Bitcoin</h4>
                                        <p className='aboutbitcoin'>Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto and started in 2009 when its implementation was released as open-source software.</p>
                        </div>
                                <div className='PricePageFeedMiddle_about_box_right'>
                                        <div className='PricePageFeedMiddle_about_box_right_link'>
                                        <p className='linkname'> <LanguageIcon /></p>
                                        <p className='linkname'> Social Websites</p>
                                        </div>
                                        <div className='PricePageFeedMiddle_about_box_right_link'>
                                        <p className='linkname'> <VerticalSplitRoundedIcon /></p>
                                        <p className='linkname'> Site paper</p>
                                        </div>
                                        <div className='PricePageFeedMiddle_about_box_right_link'>
                                        <p className='linkname'> <GitHubIcon /></p>
                                                <p className='linkname'> Source Code</p>
                                        </div>
                                        <div className='PricePageFeedMiddle_about_box_right_link'>
                                                <p className='linkname'></p>
                                        </div>
                                </div>
                        </div>
                        <div className='PricePageFeedMiddle_button'>
                        <Button>Exchange</Button>
                        </div>
                </div>
        )
}

export default PricePageFeedMiddle
