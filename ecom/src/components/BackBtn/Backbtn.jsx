import React from 'react'
import './Backbtn.css'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import {Link} from 'react-router-dom'
const Backbtn = ({title}) => {
    return (
        <div className="bck-btn-container">
        <Link className=" bck-btn-link" to ='/'>
          <ArrowBackOutlinedIcon className="bck-btn"/> 
          <h4 className="bck-text">{title}</h4> 
        </Link>
        </div>
    )
}

export default Backbtn
