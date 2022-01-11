import React from 'react'
import "./Register.css"
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className='register-container'>
            <div className="register-center">
            <div className="register-logo">
                  <h2 className='logo register-logo-logo'>SHOPPY</h2> 
               </div>
            <h2 className='create-account'>Create An account</h2>
            <form action="post" className="form-register">
                <label className="label">
                    Name
                </label>
                <input className='register-input' placeholder='Enter your name' title='Name' />
                <label className='label'>
                   Email
                </label>
                <input className='register-input' placeholder='Enter your Email' title='email' />
                <label className='label'>
                   Password
                </label>
                <input  className='register-input' type='password' placeholder='Create Password' title='password'  />
                <label className='label'>
                  Confirm Password
                </label>
                <input className='register-input' type='password' placeholder='Comfirm Password' title='password' />
            </form>
            <h5 className="regiter-text">
                By creating this account you accept <span style={{fontSize:16}}>the terms</span>  and <span style={{fontSize:16}}>conditions</span> of Shoppy.
            </h5>
            <button  className='btn-2 custom'>
                Create
            </button>
             <h5 className="regiter-text">
                Already have an account? <Link className='signIn-Link' to='/login' >
                    Sign In 
                </Link>
            </h5>
            </div>
    
        </div>
    )
}

export default Register
