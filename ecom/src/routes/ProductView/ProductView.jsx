import React from 'react'
import './ProductView.css'
import {Anouncement, Nav,ViewProduct,Footer,Newsletter, Backbtn,Seperator,SearchFilter} from '../../components'

const ProductView = () => {
    return (
        <div className="product-view-container">
           <Nav/>
           <Anouncement/>
           <Backbtn title={"Go back"}/>
           <ViewProduct/>
           <Newsletter/>
           <Footer/>
        </div>
    )
}

export default ProductView
