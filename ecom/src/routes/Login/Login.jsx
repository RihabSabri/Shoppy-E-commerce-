import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
import { login } from '../../redux/apiCalls'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const Login = () => {

   const [username,setUserName]=useState('')
   const [password,setPassword]=useState('')
   const dispatch=useDispatch()
   const {isFetching,error}=useSelector(state => state.user)
   const loginHandler=(e)=>{
      e.preventDefault()
      login(dispatch,{username,password})
   }
    return (

             <div className='register-container'>
            <div className="register-center">
            <div className="register-logo">
                  <h2 className='logo register-logo-logo'>SHOPPY</h2> 
               </div>
            <h2 className='create-account'>Log In </h2>
            <form action="post" className="form-register">
                <label className='label'>
                   Email
                </label>
                <input className='register-input' placeholder='Enter your Email' title='email' onChange={(e)=>setUserName(e.target.value)} />
                <label className='label'>
                   Password
                </label>
                <input  className='register-input' type='password' placeholder=' Enter Password' title='password' onChange={(e)=>setPassword(e.target.value)}  />
            </form>
            {error&&<span className='regiter-text error-msg'>Something went wrong...</span>}
            <button onClick={loginHandler}  className={isFetching? "btn-disabled":'btn-2 custom'}>
               Login
            </button>
            
             <h5 className="regiter-text">
                Don't have an account? <Link className='signIn-Link' to='/register' >
                   Create account
                </Link>
            </h5>
            </div>
    
        </div>
    )
}

export default Login
