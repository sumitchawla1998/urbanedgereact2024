import React from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import ShoppingCart from '../../components/ShoppingCart'

const Home = () => {
    return (

        <>
            <Navbar />
            <div id="page" className="site">
                <Header />
                <Slider />
            </div>
            <ShoppingCart />
           
        </>


    )
}

export default Home

