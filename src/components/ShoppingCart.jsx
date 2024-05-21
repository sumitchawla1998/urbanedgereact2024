import React from 'react'
import { useCartStore } from '../store/cart'
import { useUserStore } from '../store/user'
import { useNavigate } from 'react-router-dom'
import { error } from '../utils/messages'

function ShoppingCart() {
    let items = useCartStore((state) => state.items)
    let updatecart = useCartStore((state) => state.updatecart)
    let removeitem = useCartStore((state) => state.removeitem)
    let totalprice = useCartStore((state) => state.totalprice)
    let isloggedin = useUserStore((state) => state.isloggedin)

    let navigate = useNavigate()


    function placeorder() {
    
        if (isloggedin) {
            navigate("/checkout")
        }
        else {
            navigate("/userlogin")
            error("Please Sign In To Place Order!")
        }
    }

    return (
        <>
            <div className="cart-wrapper">
                <a className="shop-cart-close" onClick={()=>{
                    document.body.classList.toggle("theme-cart-open")
                }} />
                <div className="cart-header">
                    <h3 className="shop-cart-title">SHOPPING CART</h3>
                    <ul className="shop_table shop_table_cart">
                        {items && items.map((cartitem,index)=>(
                             <li className="cart_item clearfix">
                             <div className="product-thumbnail">
                                 <a href="shop-details.html"><img src="images/Shop/cart-product-thumb-1.jpg" alt="Product 1" /></a>
                             </div>
                             <div className="product-info">
                                 <div className="product-name">
                                     <a href="shop-details.html">{cartitem.title}</a>
                                 </div>
                                 <div className="product-size-color">
                                     <span>{cartitem.size}/{cartitem.color}</span>
                                 </div>
                                 <div className="product-quantity spinner" data-trigger="spinner">
                                     <input type="text" className="qty" value={cartitem.quantity} data-rule="quantity" />
                                     <div className="spinner-controls">
                                         <a onClick={()=>{
                                             updatecart(index, cartitem.quantity + 1)
                                         }}  data-spin="up" className="spin-up">+</a>
                                         <a onClick={()=>{
                                             updatecart(index, cartitem.quantity - 1)}}  data-spin="down" className="spin-down">-</a>
                                     </div>
                                 </div>
                                 <div className="product-subtotal">
                                     <span>${cartitem.tprice}</span>
                                 </div>
                             </div>
                         </li>
                        ))}
                       
                       
                    </ul>
                </div>
                <div className="cart-footer">
                    <div className="cart-wrap-total-checkout clearfix">
                        <div className="cart_total clearfix">
                            <span className="cart-total-text">Subtotal</span>
                            <span className="cart-total">${totalprice}</span>
                        </div>
                        <div className="proceed-to-checkout">
                            <a href='javascript:void(0)' onClick={placeorder} className="checkout-button"><span>Place Order</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart