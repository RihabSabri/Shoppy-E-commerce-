import React from 'react'
import { Anouncement, Footer, Nav, Newsletter,CartItem, Backbtn } from '../../components'
import './Cart.css'


const Cart = () => {
    return (
        <div className="cart-container">
           <Nav/>
           <Anouncement/> 
            <CartItem/> 
           <Newsletter/>
           <Footer/>
        </div>
    )
}

export default Cart
