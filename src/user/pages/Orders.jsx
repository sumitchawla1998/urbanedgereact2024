import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import ShoppingCart from '../../components/ShoppingCart'
import { db } from '../../firebase/firebaseconfig'
import { useUserStore } from '../../store/user'

function Orders() {
    let user = useUserStore((state) => state.user)

    let [orders, setOrders] = useState([])
    let colref = collection(db, "orders")
    let q = query(colref, where("uid", "==", user.uid))
    useEffect(() => {
        let unsub = onSnapshot(q, function (snapShot) {
            let result = []
            snapShot.docs.forEach(function (doc) {
                result.push({ id: doc.id, ...doc.data() })
            })

            setOrders(result)
        })
        return () => unsub()
    }, [])

    return (
        <>

            <Navbar />

            <div id="page" className="site ">
                {/* Header */}
                <Header />
                <div className="site-main clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="shop-checkout">
                                {orders && orders.map(order => {
                                    return (
                                        <div className="col-sm-12">
                                            <form action="#" className="checkout">
                                                <div className="col2-set" id="customer_details">
                                                    <h3 className="table-title">Your order with Order ID : { order.id}</h3>
                                                    <div className="checkout-review-order">
                                                        <table className="checkout-review-order-table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr className="cart_item">
                                                                    <td className="product">
                                                                        <div className="product-thumbnail">
                                                                            <a href="shop-details.html"><img src="/lola/images/Shop/cart-product-thumb-1.jpg" alt="Product 1" /></a>
                                                                        </div>
                                                                        <div className="product-info">
                                                                            <div className="product-name">
                                                                                <a href="shop-details.html">The Skinny x 1</a>
                                                                            </div>
                                                                            <div className="product-size-color">
                                                                                <span>Small/Blue</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="product-total">
                                                                        <span className="Price-amount">
                                                                            <span className="Price-currencySymbol">$</span>
                                                                            175.00
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="cart_item">
                                                                    <td className="product">
                                                                        <div className="product-thumbnail">
                                                                            <a href="shop-details.html"><img src="/lola/images/Shop/cart-product-thumb-2.jpg" alt="Product 2" /></a>
                                                                        </div>
                                                                        <div className="product-info">
                                                                            <div className="product-name">
                                                                                <a href="shop-details.html">The Slouchy x 1</a>
                                                                            </div>
                                                                            <div className="product-size-color">
                                                                                <span>Small/Blue</span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="product-total">
                                                                        <span className="Price-amount">
                                                                            <span className="Price-currencySymbol">$</span>
                                                                            150.00
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            <tfoot>
                                                                <tr className="cart-subtotal">
                                                                    <th>Subtotal</th>
                                                                    <td>
                                                                        <span className="Price-amount">
                                                                            <span className="Price-currencySymbol">$</span>
                                                                            {order.totalprice}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="cart-shipping">
                                                                    <th>Shipping</th>
                                                                    <td>
                                                                        Your product will deliver within 7 days. Please double check
                                                                        your address,or contact us if you need any help.
                                                                    </td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Total</th>
                                                                    <td>
                                                                        <span className="Price-amount">
                                                                            <span className="Price-currencySymbol">$</span>
                                                                           {order.totalprice}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                        </table>
                                                        {/* <input type="submit" className="button" /> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                {/*Footer*/}

                <Footer />
            </div>




            <ShoppingCart />

        </>
    )
}

export default Orders