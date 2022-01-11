import React from 'react'
import './Footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="left-footer">
                  <h2 className='logo'>SHOPPY</h2> 
                  <p className="footer-description">
                      This website was created by Rihab Sabri as part of a learning experience.
                      Please enjoy your pretend shoping experience and I hope you like it.<br/>
                      Kind regards.
                  </p>
                  <div className="icons-footer">
                  <FacebookIcon className='fb-icon'/>
                  <GitHubIcon className='git-icon'/>
                  <LinkedInIcon className='lnk-icon'/>
                  </div>
            </div>
            <div className="center-footer">
              <h3 className="title-center">
                  ShortCut links 
              </h3>
              <ul className="list-center">
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Home</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Woman Fashion</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Men Fashion</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Sale</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Account</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Bag</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Popular</a> 
                  </li>
                  <li className="list-center-item">
                     <a href="" className="list-center-link">Tracking Order</a> 
                  </li>
              </ul>
            </div>
            <div className="left-footer">
             <h3 className="title-center">
                  Contact Us 
              </h3>
              <ul className="list-right">
                  <li className="list-right-item">
                     <PhoneIphoneOutlinedIcon className="right-icon"/>
                     <a href="" className="list-right-link">+216 00000000</a> 
                  </li>
                  <li className="list-right-item">
                       <RoomOutlinedIcon className="right-icon"/>
                     <a href="" className="list-right-link">Ben Arous,Tunisia</a> 
                  </li>
                  <li className="list-right-item">
                      <MailOutlineOutlinedIcon className='right-icon'/>
                     <a href="" className="list-right-link">Contact@Shoppy.com</a> 
                  </li>
                </ul>
               <img className='pay-image' src= "payement.png" alt='pay'/> 
            </div>
        </div>
    )
}

export default Footer
