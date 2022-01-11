import React from 'react'
import "./SingleProduct.css"
import {Link} from 'react-router-dom'
const SingleProduct = ({product}) => {
    return (
        <div className="Product-container">
            <img className='image-product' src={product.image} alt="Product"/>
                <Link to={`/product/${product._id}`} >
                    <button  className='btn-4'>View </button>
                    </Link>
             <div className="product-info">
             <h4 className='product-title'>
                 {product.title}
             </h4> 
             <h5 className='price-tag'>
               { `${product.price}`+" DT"}
             </h5>
             </div>
        </div>
    )
}

export default SingleProduct
