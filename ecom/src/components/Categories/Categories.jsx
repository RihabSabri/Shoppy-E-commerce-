import React from 'react'
import CategoryItem from './CategoryItem'
import {categories} from '../../categories'
import  './Categories.css'
const Categories = () => {
    return (
        <div className="categories-container">
            {categories.map(item=>(
                < CategoryItem item={item} key={item.id}/>
            ))}
           
        </div>
    )
}

export default Categories
