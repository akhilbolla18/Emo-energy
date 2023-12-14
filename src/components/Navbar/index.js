import React from 'react'
import "./index.css"
import Cookies from 'js-cookie'
import { withRouter} from 'react-router-dom'



function Navbar(props) {
  const onClickLogout = () => {
    const {history} = props
    // FIX7: The Cookie is set with the key "jwt_token" so it should be removed using the same key
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className='navbar'>
      <div className='nav-home'>
      <div className='bg-container'>
        <div className='nav-heading'>
        <h3 className='book-blog-heading'>EMO-BLOG</h3>
       </div>
       <div className='nav-container'>
        <p className='nav-items'>Home</p>
        <p className='nav-items'>Product</p>
        <p className='nav-items'>Contact</p>
       </div>
        <h5 className="register outlined-button"  onClick={onClickLogout}>Logout
        </h5>
      </div>
       
    </div>
    </nav>
    
   
  )
}

export default withRouter(Navbar)