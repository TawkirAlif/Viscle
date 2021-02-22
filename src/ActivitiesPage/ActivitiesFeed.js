import React from 'react'
import './ActivitiesFeed.css'
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import { Avatar } from '@material-ui/core';

function ActivitiesFeed({currencyIcon, currencySymble, Activity}) {
        return (
                <div className='activitiesfeed'>
                        <div className='activitiesfeed_left'>
                        <div className='activitiesfeed_icon'>
                                <LaunchRoundedIcon />
                        </div>
                        <div className='activitiesfeed_currencyInfo_box'>
                                        <Avatar className='activitiesfeed_currencyInfo_box_avatar' src={currencyIcon}/>
                                <p>{Activity} {currencySymble}</p>
                                </div>
                                </div>
                                <div className='activitiesfeed_right'>
                        <div className='activitiesfeed_ammount_date'>
                                <div></div>
                                <div>

                                <h8>0.263874781 USDT</h8>
                                <p>Jan 17, 2021 10:20:35</p>
                                </div>
                                <div></div>
                        </div>
                        <div className='activitiesfeed_address_transaction'>
                        <div></div>
                                <div>

                        <h8>ehjy33r29hediu3</h8>
                        <p>de8uue89fh498467</p>  
                                </div>
                                <div></div>
                                
                                </div>
                                </div>
                </div>
        )
}

export default ActivitiesFeed
