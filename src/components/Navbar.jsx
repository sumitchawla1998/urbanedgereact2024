import { doc } from 'firebase/firestore'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebaseconfig'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'

function Navbar() {
  let navigate = useNavigate()

  let isloggedin = useUserStore((state) => state.isloggedin)
  let logout = useUserStore((state) => state.logout)
  let clearcart = useCartStore((state) => state.clearcart)

  console.log(isloggedin)
  function toggle(){
    ()=>{
      document.body.classList.toggle("theme-menu-open")
    }
  }
  return (
    <>
      <div className="theme-menu">
        <a href="" className="menu-header-close-button-mobile" />
        <div className="menu-header">
          <h3 className="menu-title">MENU</h3>
          <nav className="menu">
            <ul>
              <li className="menu-item-has-children">
                <NavLink to="/">HOME</NavLink>
              </li>

              <li className="menu-item-has-children">
                <NavLink to="/clothes">CLOTHES</NavLink>
              </li>

                <li><NavLink to="/about">ABOUT</NavLink></li>
              <li><NavLink to="/userregister">REGISTER</NavLink></li>

              <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>
          </nav>


          
          {!isloggedin && <div className="menu-log-in">
          <NavLink to="/userlogin">LOG IN</NavLink>
         </div>}

          {isloggedin && <div className="menu-log-in">
          <NavLink onClick={()=>{
            clearcart()
            auth.signOut()
            logout()

          }} to="/userlogin">LOG OUT</NavLink>
         </div>}
           

        </div>
        <div className="menu-footer">
          <ul className="menu-social">
            <li className="social-icon">
              <a href="" target="_blank"><i className="fa fa-facebook" /></a>
            </li>
            <li className="social-icon">
              <a href="" target="_blank"><i className="fa fa-twitter" /></a>
            </li>
            <li className="social-icon">
              <a href="" target="_blank"><i className="fa fa-pinterest" /></a>
            </li><li className="social-icon">
              <a href="" target="_blank"><i className="fa fa-instagram" /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar