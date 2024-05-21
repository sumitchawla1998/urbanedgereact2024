import React from 'react'

function Slider() {
    return (
        <>
            <section className="home-slider">
                <div id="home-slider" className="carousel slide" data-ride="carousel">
                    {/* Wrapper for slides */}
                    {/* Slider 1 */}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active" style={{ backgroundImage: 'url("lola/images/Home-Slider/slide-1.jpg")' }}>
                            <div className="itable">
                                <div className="icell">
                                    <div className="slider-content">
                                        <h2 className="slider-title-before">HANDMADE BASICS WITH STYLE AND QUALITY</h2>
                                        <h1 className="slider-title">Back to Black</h1>
                                        <a href="shop.html" className="btn btn-1"><span>start shopping now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider 2 */}
                        <div className="item" style={{ backgroundImage: 'url("lola/images/Home-Slider/slide-2.jpg")' }}>
                            <div className="itable">
                                <div className="icell">
                                    <div className="slider-content">
                                        <h2 className="slider-title-before">HANDMADE BASICS WITH STYLE AND QUALITY</h2>
                                        <h1 className="slider-title">Modern &amp; Edgy</h1>
                                        <a href="shop.html" className="btn btn-1"><span>start shopping now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slider 3 */}
                        <div className="item" style={{ backgroundImage: 'url("lola/images/Home-Slider/slide-3.jpg")' }}>
                            <div className="itable">
                                <div className="icell">
                                    <div className="slider-content">
                                        <h2 className="slider-title-before">HANDMADE BASICS WITH STYLE AND QUALITY</h2>
                                        <h1 className="slider-title">Major Comeback</h1>
                                        <a href="shop.html" className="btn btn-1"><span>start shopping now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#home-slider" data-slide-to={0} className="active" />
                        <li data-target="#home-slider" data-slide-to={1} />
                        <li data-target="#home-slider" data-slide-to={2} />
                    </ol>
                </div>
            </section>
        </>
    )
}

export default Slider