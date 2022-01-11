import React from 'react'
import './seperator.css'
const Seperator = ({title}) => {
    return (
        <div className='seperator-container'>
          <p className='seperator-text hr2'>
              {title}
              </p> 
        </div>
    )
}

export default Seperator
