import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../images/logo.webp";
import "./nav.css";
const Nav = ({search, setSearch, searchproduct}) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="header">
        <div className="top-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search-box">
            <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={searchproduct}><FaSearch /></button>
          </div>
          {
            isAuthenticated ?
              // if user is login then logout button will shown and also user profile
              <div className="user">
                <div className="icon">
                  <CiLogout />
                </div>
                <div className="btn">
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>
              </div>
            :
              // if user is not login then login button will shown 
              <div className="user">
                <div className="icon">
                  <FiLogIn />
                </div>
                <div className="btn">
                  <button onClick={() => loginWithRedirect()}>Login</button>
                </div>
              </div>
          }
        </div>
        <div className="last-header">
          <div className="user-profile">
            {
              // user profile will shown here
              isAuthenticated ?
              <div>
                
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              :
              <div>
                
                <div className="info">
                  <p>Please Login</p>
                </div>
              </div>
            }
          </div>
          <div className="nav">
            <ul>
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/shop" className="link">Shop</Link></li>
              <li><Link to="/cart" className="link">Cart</Link></li>
              <li><Link to="/about" className="link">About</Link></li>
              <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
          </div>
          <div className="offer">
            <p>flat 10% over all iphone</p>
          </div>
        </div>
    </div>
  )
}

export default Nav
