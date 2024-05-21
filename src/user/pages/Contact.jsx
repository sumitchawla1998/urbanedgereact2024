import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import ShoppingCart from '../../components/ShoppingCart'

function Contact() {
    return (
        <>


            <Navbar />
      
            <div id="page" className="site">
             
                <Header />
               
                <div className="site-main clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="wrap-contact-forms other-page margin-top-140">
                                    {/*Title*/}
                                    <h3 className="page-title">get in touch</h3>
                                    <div className="link-email">
                                        <a href="mailto:vlad@htmlbook.ru">contact@UrbanEdge.com</a>
                                    </div>
                                    {/*End Title*/}
                                    {/*Form*/}
                                    <form action="#" className="contact-forms">
                                        <div className="field-text">
                                            <input type="text" className="required" placeholder="name" />
                                        </div>
                                        <div className="field-text">
                                            <input type="text" className="input required" placeholder="email" />
                                        </div>
                                        <div className="field-textarea">
                                            <textarea className="required" placeholder="message" defaultValue={""} />
                                        </div>
                                        <div className="field-submit">
                                            <input type="submit" className="submit btn btn-1" defaultValue="send" />
                                        </div>
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

export default Contact