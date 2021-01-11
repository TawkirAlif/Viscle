import { Avatar } from '@material-ui/core'
import React from 'react'
import './PromotionPageMiddle.css'
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import { Button } from '@material-ui/core';

function PromotionPageMiddle() {
        return (
                <div className='promotionpagemiddle'>
                        <div className='promotionpagemiddle_Header'>
                        <h1 className='promotionpagemiddle_Header_top'>Viscle Exchange</h1>
                        <h1 className='promotionpagemiddle_Header_bottom'>Bitcoin X TORN Net Deposite Compaing</h1>
                        </div>
                        <div className='promotionpagemiddle_bottom'>
                                <div className='promotionpagemiddle_bottom_top_img'           style={{
            backgroundImage: `url('https://pbs.twimg.com/media/Eq3RGX_VoAA1TKD?format=png&name=small')`,
          }}>
                                </div>
                                <div className='promotionpagemiddle_bottom_message'>
                                        <h2>Competition Overview</h2>
                                        <div className='promotionpagemiddle_bottom_message_separator'></div>
                                        <p>A cryptocurrency (or crypto currency or crypto for short) is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of ...A cryptocurrency (or crypto currency or crypto for short) is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of computerized database using strong cryptography to secure transaction records, to control the creation of ...</p>
                                </div>
                                <div className='promotionpagemiddle_bottom_message_bottom_adBox'>
                                        <Avatar src='https://brandmark.io/logo-rank/random/beats.png' />
                                        <div className='promotionpagemiddle_bottom_message_bottom_adBox_text'>
                                                <h5> Compaing Period : October 26, 2021at 21:00 UTC to November 26, 2021at 21:00 UTC </h5>
                                        </div>
                                </div>
                                <div className='promotionpagemiddle_bottom_price_box'>
                                        <h3>Prizes</h3>
                                        <div className='promotionpagemiddle_bottom_price_box_bottom'>
                                                <div className='promotionpagemiddle_bottom_price_box_bottom_row'>
                                                        <div> <BubbleChartIcon /></div>
                                                        <div className='promotionpagemiddle_bottom_price_box_row_charts'>
                                                                <h3>First Place 2.5 BTC</h3>
                                                        </div>
                                                </div>
                                                <div className='promotionpagemiddle_bottom_price_box_bottom_row'>
                                                        <div> <BubbleChartIcon /></div>
                                                        <div className='promotionpagemiddle_bottom_price_box_row_charts'>
                                                                <h3>First Place 2.5 BTC</h3>
                                                        </div>
                                                </div>

                                                <div className='promotionpagemiddle_bottom_price_box_bottom_row'>
                                                        <div> <BubbleChartIcon /></div>
                                                        <div className='promotionpagemiddle_bottom_price_box_row_charts'>
                                                                <h3>First Place 2.5 BTC</h3>
                                                        </div>
                                                </div>

                                                <div className='promotionpagemiddle_bottom_price_box_bottom_row'>
                                                        <div> <BubbleChartIcon /></div>
                                                        <div className='promotionpagemiddle_bottom_price_box_row_charts'>
                                                                <h3>First Place 2.5 BTC</h3>
                                                        </div>
                                                </div>

                                                <div className='promotionpagemiddle_bottom_price_box_bottom_row'>
                                                        <div> <BubbleChartIcon /></div>
                                                        <div className='promotionpagemiddle_bottom_price_box_row_charts'>
                                                                <h3>5th-10th Place Share a pool of 2.5 BTC</h3>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='promotionpagemiddle_bottom_price_box_bottom_text'>
                                                <p>Although bitcoin is a purely digital currency, it can be kept secure in analog form. Paper wallets can be used to store bitcoins offline, which significantly decreases the chances of the cryptocurrency being stolen by hackers or computer viruses.</p>
                                        </div>
                                        <div className="promotionpagemiddle_bottom_price_box_bottom_Button">
                                                <Button>Deposite Now</Button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default PromotionPageMiddle
