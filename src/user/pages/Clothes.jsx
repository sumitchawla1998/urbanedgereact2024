import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import { products } from '../../data/products'
import ClothCard from '../../components/ClothCard'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ShoppingCart from '../../components/ShoppingCart'
import {categories} from '../../data/categories'
const Clothes = () => {

    let [category,setCategory] = useState("All")

    let filteredproducts = products.filter((product)=>product.category == category)

    console.log(category)
 
    return (
        <>

            <Navbar />

            <div id="page" className="site" style={{overflow:'scroll'}}>
                <Header />

                <div className="site-main clearfix">
                    <div className="shop-product-list shop-product-list-3-columns clearfix col-sm-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="categories-list">
                                    <ul className="categories-list-nav">
                                        {categories.map((category)=>(   <li>
                                            <NavLink onClick={()=>{
                                                setCategory(category)
                                            }}>{category}</NavLink>
                                        </li>

                                        ))}
                                        
                                
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <ul className="products clearfix">
                                
                                {
                                    category == "All"?products.map((cloth) => (
                                        
                                        <ClothCard key={cloth.id} id={cloth.id} title={cloth.title} image={cloth.image} imagehover={cloth.imagehover} category={cloth.category} price={cloth.price} />

                                    )):
                                    filteredproducts.map((cloth) => (
                                        
                                        <ClothCard key={cloth.id} id={cloth.id} title={cloth.title} image={cloth.image} imagehover={cloth.imagehover} category={cloth.category} price={cloth.price} />

                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <ShoppingCart />


        </>
    )
}

export default Clothes