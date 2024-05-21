import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebaseconfig'
import { useUserStore } from '../../store/user'
import { Link, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
import ShoppingCart from '../../components/ShoppingCart'

function UserLogin() {
   
    let [email,setEmail] = useState("")
    let [pwd,setPwd] = useState("")

    let login = useUserStore((state) => state.login)
    let navigate = useNavigate()

    async function signin(e){
        e.preventDefault()

        if(email == "" || pwd == ""){
            error("All Fields Are Required")
            return
        }

        let credentials = await signInWithEmailAndPassword(auth, email, pwd)
        
        if(credentials.user != null){
            login(credentials.user)
            navigate("/",{replace:true})
        }
        else{
            error("Please Enter Valid Username or Password")
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
                            <div className="col-sm-12">
                                <div className="wrap-login-forms other-page margin-top-140">
                                  
                                    <h3 className="page-title">customer login</h3>
                                  
                                    <form action="#" className="login-forms" onSubmit={signin}>
                                        <p className="form-row">
                                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="input-text required" placeholder="email" />
                                        </p>
                                        <p className="form-row">
                                            <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" className="input-text required" placeholder="password" />
                                        </p>
                                        <p className="lost_password">
                                            <a href="reset-password.html">forgot your password?</a>
                                        </p>
                                        <p className="form-row">
                                            <input type="submit" className="button" value="login" />
                                        </p>
                                        <p className="create-account">
                                            <Link to="/userregister">create account</Link>
                                        </p>
                                    </form>
                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Shop Cart */}
            <ShoppingCart />
            {/* End Shop Cart */}
        </>

     
    )
}

export default UserLogin