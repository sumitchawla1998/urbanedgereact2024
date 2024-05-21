import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { products } from '../../data/products'
import { useParams } from 'react-router-dom'
import { useCartStore } from '../../store/cart'
import ShoppingCart from '../../components/ShoppingCart'
import Footer from '../../components/Footer'



function ClothDetails() {

  let { id } = useParams()

  let product = products.find((product) => product.id == id)


  let sizeref = useRef(null)
  let colorref = useRef(null)

  let updateitems = useCartStore((state) => state.updateitems)


  function addtocart(e) {
    e.preventDefault()
 
    let item = { ...product, size: sizeref.current[0].value, color: colorref.current[0].value, quantity: 1, tprice: product.price }

    updateitems(item)
  }
  return (
    <>

      <div className='shop-page shop-page-product-details'>

        <Navbar />

        <div id="page" className="site">

          <Header />
          <div className="site-main clearfix">
            <div className="col-md-7">
              <div className="row">
                <div id="shop-product-slider" className=" shop-product-slider carousel slide">

                  <img src={product.image} alt="Product details slide 1" height={800} />

                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="product" >
                  <div className="itable">
                    <div className="icell">
                      <div className="entry-summary">
                        <h1 className="product_title">The Skinny in Stone Ponya</h1>
                        <div className="total-price">
                          <p className="price">
                            <span className="Price-amount">
                              <span className="Price-currencySymbol">$</span>
                              175.00
                            </span>
                          </p>
                        </div>
                        <div className="description">
                          <div className="panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                              <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Form and function. Modern and minimal. Cooler than cool.
                                </a>
                              </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingOne">
                              <div className="panel-body">
                                Exercitation photo booth stumptown tote bag Banksy, elit small batch
                                freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
                                kale chips proident chillwave deep v laborum.
                              </div>
                            </div>
                            <ul className="details">
                              <a href="#collapseOne" role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseOne">
                                <li />
                                <li />
                                <li />
                              </a>
                            </ul>
                          </div>
                        </div>
                        <div className="wrap-select">


                          <select ref={sizeref} name="select-size" className="select-size " id="select-size">
                            <option value="Small" selected>Small</option>
                            <option value="Big">Big</option>
                            <option value="XXXL">XXXL</option>
                            <option value="XXL">XXL</option>
                            <option value="XL">XL</option>
                            <option value="L">L</option>
                            <option value="S">S</option>
                          </select>
                          <select ref={colorref} name="select-color" className="select-color" id="select-color">
                            <option value="Black" selected>Black</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="White">White</option>
                            <option value="Orange">Orange</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Purple">Purple</option>
                          </select>
                        </div>
                        <p className="button">
                          <input onClick={addtocart} type="submit" className="button" defaultValue="add to cart" />
                        </p>
                        <p className="free-shipping">
                          <a href="#">FREE SHIPPING ON ORDERS 70USD+</a>
                        </p>
                        <p className="link-for-size-guide">
                          <a href="size-guide.html">size guide</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {/* Shop Cart */}
        <ShoppingCart />
      </div>





    </>

  )
}

export default ClothDetails