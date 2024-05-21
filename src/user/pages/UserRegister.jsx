import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../../firebase/firebaseconfig'
import { addDoc, collection } from 'firebase/firestore'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { error, success } from '../../utils/messages'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCart from '../../components/ShoppingCart'


function UserRegister() {

    let [nm,setNm] = useState("")
    let [email,setEmail] = useState("")
    let [pwd,setPwd] = useState("")
    let navigate = useNavigate()

    async function signup(e){
        e.preventDefault()

        if(nm == "" || email == "" || pwd == ""){
            error("All Fields Are Required")
            return
        }

        let credentials = await createUserWithEmailAndPassword(auth,email,pwd)
        if(credentials.user != null){
            await updateProfile(auth.currentUser,{displayName:nm})
            let colref = collection(db,"users")
            await addDoc(colref,{
                "uid":auth.currentUser.uid,
                "nnm":nm,
                "email":email,
                "pwd":pwd,
            })
    
            success("Sign Up Successfull")
            navigate("/userlogin")
        }
        else{
            error("Please Enter Valid Credentials")
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
                           
                                        <h3 className="page-title">customer register</h3>
                               
                                        <form action="#" className="login-forms" onSubmit={signup}>
                                            <p className="form-row">
                                                <input value={nm} onChange={(e)=>setNm(e.target.value)} type="text" className="input-text required" placeholder="name" />
                                            </p>
                                            <p className="form-row">
                                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="input-text required" placeholder="email" />
                                            </p>
                                            <p className="form-row">
                                                <input value={pwd} onChange={(e)=>setPwd(e.target.value)} type="password" className="input-text required" placeholder="password" />
                                            </p>

                                            <p className="form-row">
                                                <input type="submit" className="button" value="create account"  />
                                            </p>
                                            <p className="create-account">
                                                <Link to="/userlogin">user login</Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ShoppingCart />
               
         
        </>
    )
}

export default UserRegister