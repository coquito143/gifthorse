import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'

export default function Header(props) {
  return (
    <header>
      <Link to='/' onClick={props.resetForm}><img className="logo-img" src={Logo} /></Link>
      <div className="welcome-div">
        {props.currentUser
          ?
          <>

            <Link to={`/users/${props.currentUser.id}`}>
            My Profile
            </Link>
            <button
              className="Oval"
              onClick={props.handleLogout}>Logout</button>
          </>
          :
          <button onClick={props.handleLoginButton} className="Oval rainbow-wrapper">Login/Register</button>
        }
      </div>
    </header>
  )
}
