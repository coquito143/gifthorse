import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1><Link to='/' onClick={props.resetForm}>Gift Horse</Link></h1>
      <div className="welcome-div">
        {props.currentUser
          ?
          <>
            <p>Welcome {props.currentUser.username}!</p>
            <Link to={`/users/${props.currentUser.id}`}>
            <button>My Profile</button>
            </Link>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/Register</button>
        }
      </div>
    </header>
  )
}
