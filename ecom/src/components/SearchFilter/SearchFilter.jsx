import React from 'react'
import './SearchFilter.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchFilter = () => {
    return (
        <div className="search-container">

            <div className="search">
                <input className="search-input" placeholder='Search for items'/>
                <SearchOutlinedIcon className="loop-icon"/> 
            </div>
           
        </div>
    )
}

export default SearchFilter
