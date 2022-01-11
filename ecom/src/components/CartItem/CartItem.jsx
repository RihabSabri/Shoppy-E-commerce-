import React,{useState,useEffect}from 'react'
import "./CartItem.css"
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useSelector} from 'react-redux'
import { Backbtn } from '..'
import { useDispatch} from 'react-redux'
import { removeFromCart } from '../../redux/cartRedux';

const CartItem = () => {
    const dispatch = useDispatch();
    
    const cart = useSelector(state => state.cart)
       const cartHandler=(cart)=>{
       dispatch(removeFromCart(cart))
       
    }


    return (
        <div className='Cart-item-container'>
            <div className="cart-item-container-top">
                <Backbtn title={<h4 className='bck-btn-text'>Continue Shopping</h4>}/>
                <p className="title-product title-bag">
                                Your Bag
                </p>
            </div>
                <div className="container-bag">
                    <div className="divider-cont">
                    {cart.products.map( product=>

                    <div className="items-inside-bag">
                    <div className="left-bag">
                                <button className="remove-from-cart" onClick={()=>cartHandler(product)}>
                                        <DeleteOutlineIcon className="remove-icon"/>
                                </button>
                        <img src= {product.image} alt="bag item" className="first-part" />
                        <div className="second-part">
                            <div className='second-part-1'>
                          <h5 className="size">Product:</h5>  
                           <h5 className="bag-product-title">{product.title}</h5> 
                           </div>
                           <div className='second-part-2'>
                            <h5 className="size">ID:</h5>  
                           <h5 className="bag-product-title">{product._id}</h5> 
                           </div>
                            <div className='second-part-2'>
                            <h5 className="size">Size:</h5>  
                           <h5 className="bag-product-title">{product.size.toUpperCase()}</h5> 
                           </div>
                        </div>
                        <div className="thrid-part">
                            <button className='btn-quantity'>
                                <AddOutlinedIcon/>
                            </button>
                           <span className="number">{product.quantity}</span>
                            <button className='btn-quantity'>
                                <RemoveOutlinedIcon/>
                            </button> 

                            <div className='bag-price'>
                                <h5>{product.price*product.quantity}DT</h5>
                            </div>
                        </div>
                    </div>
                    </div>
                    )}
                    </div>
                    <div className="right-bag right-bag-display">
                          <p className="title-product order-bag">
                             Order Summary
                          </p>
                          <div className="elements-summary">
                             <h5 className="size">Subtotal</h5>  
                           <h5 className="bag-product-title">{cart.total} DT</h5>  
                          </div>
                          <div className="elements-summary">
                             <h5 className="size">Shipping</h5>  
                           <h5 className="bag-product-title">0 DT</h5>  
                          </div>
                          <div className="elements-summary">
                             <h5 className="size">Shipping discount</h5>  
                           <h5 className="bag-product-title">0 DT</h5>  
                          </div>
                          <div className="elements-summary">
                             <h5 className="bag-price">Total</h5>  
                           <h5 className="bag-price">{cart.total?cart.total:0}DT</h5>  
                          </div>
                          <button className='btn-check '> 
                                Checkout
                          </button>
                    </div>
                    
                </div>
                        
        </div>
    )
}

export default CartItem
