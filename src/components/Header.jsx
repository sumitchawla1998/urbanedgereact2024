import React from 'react'
import { useCartStore } from '../store/cart'

const Header = () => {
    
  let items = useCartStore((state) => state.items)
    return (
        <header className="header">
            <div className="menu-link-wrap" onClick={
                ()=>{
                   document.body.classList.toggle("theme-menu-open")
                }
            }>
                <a href="#" className="menu-link">
                    <span />
                </a>
            </div>
            <div className="logo-wrap">
                <a href="index-2.html" className="theme-logo">UrbanEdge</a>
            </div>
            <div className="header-cart">
                <a href="#" className="cart-link">
                    <strong>CART</strong>
                    <span>{items.length}</span></a>
            </div>
        </header>
    )
}

export default Header