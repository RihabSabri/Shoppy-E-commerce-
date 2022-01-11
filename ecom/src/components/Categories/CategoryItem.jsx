import React from 'react'
import  './CategoryItem.css'
import {Link} from 'react-router-dom'
const CategoryItem = ({item}) => {
    return (
        <div className='category-item-container'>
            <Link to={`/products/${item.cat}`}>
            <img className='image-category'src={item.img}  alt='category'/>
            <div className="category-info">
                 <p className='category-title'>
                {item.title}
            </p>
                <button className='btn-3'>
                Browse
            </button> 
            </div>
             </Link>
        </div>
    )
}

export default CategoryItem
