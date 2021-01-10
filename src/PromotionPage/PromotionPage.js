import React from 'react'
import './PromotionPage.css'
import LeftWidget from './LeftWidget'
import PromotionPageMiddle from './PromotionPageMiddle'

function PromotionPage() {
        return (
                <div className='promotionpage'>
                        <div>
                        <LeftWidget />
                        </div>

                        <div>
                        <PromotionPageMiddle />
                        </div>
                </div>
        )
}

export default PromotionPage
