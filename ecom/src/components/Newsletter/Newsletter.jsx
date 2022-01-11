import React from 'react'
import './Newsletter.css'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
const Newsletter = () => {
    return (
        <div className="news-container">
           <div className="new-center">
                 <h2 className='news-letter-title'>Newsletter</h2>
                   <h3 className='news-letter-desc'>Get updates on our products and sales</h3>
               <div className="newsletter-input">
                   <input className="news-input" placeholder='Enter your Email'/>
                   <button className="btn-6">
                   <SendOutlinedIcon className="send-icon"/>
                   </button>
               </div>
           </div>
        </div>
    )
}

export default Newsletter
