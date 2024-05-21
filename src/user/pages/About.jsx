import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import ShoppingCart from '../../components/ShoppingCart'

function About() {
  return (
    <>


  <Navbar />
  {/* End Theme Menu */}
  <div id="page" className="site">
     <Header />
    <div className="site-main clearfix">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="other-page about-page margin-top-155">
              {/*Title*/}
              <h3 className="page-title">UrbanEdge - Where Fashion Meets the Streets!</h3>
              {/* End Title*/}
              <div className="about-page-content">
                <h4>Style that Defines City Life For Men & Women</h4>
                <img src="lola/images/About/about-img.jpg" alt="images" />
                <h4>Focusing on quality and unique personal style</h4>
                <p>Step into the heart of metropolitan style with UrbanEdge, where every garment tells a story of urban sophistication and contemporary flair. Our curated collection embodies the pulse of city life, blending sleek designs with the raw energy of the streets. From chic streetwear to statement pieces that command attention, UrbanEdge is your destination for fashion that captures the essence of modern urban living. Discover your signature style and embrace the rhythm of the city with UrbanEdge.
                </p>
              </div>
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

export default About