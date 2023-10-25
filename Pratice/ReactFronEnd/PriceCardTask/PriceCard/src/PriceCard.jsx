import React from 'react'
import './index.css'


function PriceCard() {
  return (
    <div className='pricing'>
        <div className='card-wrapper'>
            <div className='card-header'>
                <img src="" />
                <h2>FREE</h2>
                <div className='card-detail'>
                <p><span class="fas fa-check check"></span> <b></b> Singel User</p>
                <p><span class="fas fa-check check"></span> <b></b> 50GB Storage</p>
                <p><span class="fas fa-check check"></span> <b></b> Unlimeted Public Projects</p>
                <p><span class="fas fa-check check"></span> <b></b> Community Access</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Unlimited Private Project</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Dedicated Phone Support</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Free Subdomain</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Monthly Status Reports</p>  
                </div>
            </div>
            <div className='card-price'>
                <p><sup>$ </sup>0 <sub>/month</sub></p>
            </div>
            <button className='card-button'>Try It</button>
        </div>
        <div className='card-wrapper'>
            <div className='card-header'>
                <img src="" />
                <h2>PLUS</h2>
                <div className='card-detail'>
                <p><span class="fas fa-check check"></span> <b></b> Singel User</p>
                <p><span class="fas fa-check check"></span> <b></b> 50GB Storage</p>
                <p><span class="fas fa-check check"></span> <b></b> Unlimeted Public Projects</p>
                <p><span class="fas fa-check check"></span> <b></b> Community Access</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Unlimited Private Project</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Dedicated Phone Support</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Free Subdomain</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Monthly Status Reports</p>  
                </div>
            </div>
            <div className='card-price'>
                <p><sup>$ </sup>9 <sub>/month</sub></p>
            </div>
            <button className='card-button'>buy It</button>
        </div>
        <div className='card-wrapper'>
            <div className='card-header'>
                <img src="" />
                <h2>PRO</h2>
                <div className='card-detail'>
                <p><span class="fas fa-check check"></span> <b></b> Singel User</p>
                <p><span class="fas fa-check check"></span> <b></b> 50GB Storage</p>
                <p><span class="fas fa-check check"></span> <b></b> Unlimeted Public Projects</p>
                <p><span class="fas fa-check check"></span> <b></b> Community Access</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Unlimited Private Project</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Dedicated Phone Support</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Free Subdomain</p>
                <p class="no"><span class="fas fa-times nocheck"></span> <b></b> Monthly Status Reports</p>  
                </div>
            </div>
            <div className='card-price'>
                <p><sup>$ </sup>49 <sub>/month</sub></p>
            </div>
            <button className='card-button'>Buy It</button>
        </div>
    </div>
  )
}

export default PriceCard