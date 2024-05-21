import React, { useState } from 'react'
import ShoppingCart from '../../components/ShoppingCart'
import Header from '../../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../../store/cart'
import { useUserStore } from '../../store/user'
import { addDoc, collection } from 'firebase/firestore'
import { error, success } from '../../utils/messages'
import { db } from '../../firebase/firebaseconfig'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Checkout() {
    let [isChecked, setIsChecked] = useState(true)

    let [fnm,setFnm] = useState("")
    let [lnm,setLnm] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [address,setAddress] = useState("")
    let [city,setCity] = useState()
    let [pincode,setPincode] = useState("")
    let [notes,setNotes] = useState("")
   

    let items = useCartStore((state) => state.items)
    let totalprice = useCartStore((state) => state.totalprice)
    let clearcart = useCartStore((state) => state.clearcart)
    let user = useUserStore((state) => state.user)
    let isloggedin = useUserStore((state) => state.isloggedin)

    let navigate = useNavigate()
 
    async function checkout(e){
        e.preventDefault()
        console.log(isloggedin)

        if(fnm == "" || lnm == "" || email == "" || phone == "" || address == "" || city == "" || pincode ==""){
            error("All Fields Are Required")
            return
        }

        

        if(isloggedin){
            let colref = collection(db,"orders")
            let docref = await addDoc(colref,{
                "uid":user.uid,
                "cust":user.displayName,
                "items" : items,
                "size" : items.length,
                "totalprice" : totalprice,
                "fnm" : fnm,
                "lnm" : lnm,
                "email":email,
                "phone":phone,
                "city" : city,
                "pincode" : pincode,
                "notes" : notes,
            
            })

             success("Your Order Is Successfull Placed And Deliver Within 7 Days!")
          
            // navigate("/payment/"+docref.id)
        }
        else{
            error("Please Sign In to Checkout")
        }
       
    }


    return (
        <>

            <Navbar />
           
            <div id="page" className="site">
               
                <Header />
               
                <div className="site-main clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="shop-checkout">
                                <div className="col-sm-12">
                                    <div className="shop-checkout-info">
                                        New customer?
                                        <Link to="/userregister" className="showlogin" data-toggle="collapse" aria-expanded="false" aria-controls="logInForm">Click here to register</Link>
                                    </div>

                                    <div className="shop-checkout-info">
                                        Have a coupon?
                                        <a href="#cuponForm" className="showlogin" data-toggle="collapse" aria-expanded="false" aria-controls="cuponForm">Click here to enter your code</a>
                                    </div>
                                    <div className="collapse" id="cuponForm">
                                        <div className="wrap-login-forms other-page">
                                          
                                            <form action="#" className="checkout_coupon">
                                                <p className="form-row form-row-first">
                                                    <input type="text" className="input-text required" placeholder="Cupon code" />
                                                </p>
                                                <p className="form-row form-row-last">
                                                    <input type="submit" className="button" defaultValue="sign in" />
                                                </p>
                                            </form>
                                   
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <form action="#" className="checkout" onSubmit={checkout}>
                                        <div className="col2-set" id="customer_details">
                                            <div className="col-1 ">
                                                <div className="billing-fields">
                                                    <h3>Billing details</h3>
                                                    <p className="form-row">
                                                        <label htmlFor="billing_first_name">
                                                            First Name
                                                        </label>
                                                        <input value={fnm} onChange={e=>setFnm(e.target.value)}  type="text" className="input-text" name="billing_first_name" id="billing_first_name" placeholder=" First Name" />
                                                    </p>
                                                    <p className="form-row">
                                                        <label htmlFor="billing_last_name">
                                                            Last Name
                                                        </label>
                                                        <input  value={lnm} onChange={e=>setLnm(e.target.value)} type="text" className="input-text" name="billing_last_name" id="billing_last_name" placeholder="Last Name" />
                                                    </p>
                                                   
                                                    <p className="form-row">
                                                        <label htmlFor="billing_Email_Address">
                                                            Email Address
                                                        </label>
                                                        <input  value={email} onChange={e=>setEmail(e.target.value)} type="email" className="input-text" name="billing_Email_Address" id="billing_Email_Address" placeholder=" Email Address" />
                                                    </p>
                                                    <p className="form-row">
                                                        <label htmlFor="billing_Phone">
                                                            Phone
                                                        </label>
                                                        <input  value={phone} onChange={e=>setPhone(e.target.value)} type="text" className="input-text" name="billing_Phone" id="billing_Phone" placeholder=" Phone" />
                                                    </p>

                                                    <p className="form-row">
                                                        <label htmlFor="billing_Address">
                                                            Address
                                                        </label>
                                                        <input  value={address} onChange={e=>setAddress(e.target.value)} type="text" className="input-text" name="billing_Address" id="billing_Address" placeholder=" Address" />
                                                    </p>
                                                    <p className="form-row">
                                                        <label htmlFor="billing_Town_City">
                                                            Town / City
                                                        </label>
                                                        <input  value={city} onChange={e=>setCity(e.target.value)} type="text" className="input-text" name="billing_Town_City" id="billing_Town_City" placeholder=" Town / City" />
                                                    </p>

                                                    <p className="form-row">
                                                        <label htmlFor="billing_Postcode">
                                                            Postcode
                                                        </label>
                                                        <input  value={pincode} onChange={e=>setPincode(e.target.value)} type="text" className="input-text" name="billing_Postcode" id="billing_Postcode" placeholder=" Postcode" />
                                                    </p>
                                                </div>


                                            </div>
                                            <div className="col-2">
                                                <div className="shipping-fields">
                                                    <h3>Ship to a different address?</h3>
                                                    <p className="form-row">
                                                        <label htmlFor="Ship_Order_Notes">
                                                            Order Notes
                                                        </label>
                                                        <textarea  value={notes} onChange={e=>setNotes(e.target.value)} type="text" className="input-text" name="Ship_Order_Notes" id="Ship_Order_Notes" placeholder=" Order Notes"  />
                                                    </p>
                                                </div>

                                                <div class="checkout-review-order" style={{marginTop:20}}>

                                                    <div class="checkout-payment">
                                                        <ul class="payment_methods">
                                                            <li class="payment_method payment_method_transfer_banck">
                                                                <input disabled={true} type="radio" class="input-checkbox" checked name="payment-method" id="payment_method_transfer_banck" />
                                                                <label for="payment_method_transfer_banck">
                                                                    Direct bank Transfer
                                                                </label>
                                                            </li>
                                                            <li class="payment_method payment_method-paypal">
                                                                <input disabled={true} type="radio" class="input-radio" name="payment-method" id="payment_method-paypal" />
                                                                <label for="payment_method-paypal">
                                                                    Paypal
                                                                </label>
                                                            </li>
                                                            <li class="payment_method payment_method-cheque">
                                                                <input checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type="radio" class="input-radio" name="payment-method" id="payment_method-cheque" />
                                                                <label for="payment_method-cheque">
                                                                    Cash on Delivery
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <input style={{width:'100%'}}  type="submit" class="button" value="Checkout" />
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               <Footer />
            </div>

            <ShoppingCart />

        </>
    )
}

export default Checkout