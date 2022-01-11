import React from 'react'
import './Nav.css'
import {Badge} from "@material-ui/core"
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useDispatch} from 'react-redux'
import { logOut } from '../../redux/userRedux';

const theme = createTheme({
  palette: {
    primary: {
       main: '#ebc814',
    },
    secondary:{
      main:'#1f1e1e'
    }
  },
});

const Nav = () => {
    const user=useSelector(state => state.user.currentUser)
    const quantity=useSelector(state =>state.cart.quantity)
    const cart=useSelector(state => state.cart)
    const dispatch=useDispatch()
    const handleLogout=()=>{
     dispatch(logOut(user))
    }

    console.log(cart)
  
    return (
        <div className="nav-container">
           <div className="nav-center">
               <div className="nav-left">
                  <h2 className='logo'>SHOPPY</h2> 
               </div>
               <div className="nav-right">
                   <Link className="nav-links" to='/'>Home</Link> 
                   {user.length!==0?
                   <div>
                   <span className='nav-links'>{user.username}</span>
                   <button className='btn-logout' onClick={handleLogout}>Sign Out</button>
                   </div>
                   :
                     <div>
                   <Link className="nav-links" to='/login'>Sign In</Link>
                    <Link className="nav-links" to='/register'>Register</Link>
                    </div>}
                  <ThemeProvider theme={theme}>
                  <Badge badgeContent={quantity} color="primary">
                    <Link to='/cart'>
                      <LocalMallOutlinedIcon color="secondary"/>
                    </Link>
                  </Badge>
                  </ThemeProvider>
               </div>
               </div> 
        </div>
    )
}

export default Nav
