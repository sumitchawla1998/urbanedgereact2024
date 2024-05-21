import React from 'react'
import { useNavigate } from 'react-router-dom'

function ClothCard({ id,title, price, image, imagehover }) {

  let navigate = useNavigate()
  return (
    <>
      <li className="col-sm-4 product" data-category="all,jeans" onClick={()=>{
        navigate("/clothes/"+id)
        navigate(0)
      }}>
        <div className="loop-product-link">
          <img src={image} alt="image" />
          {/* <img className="image-hover" src={imagehover} alt="image" /> */}
          <h3>{title}</h3>
          <span className="price">
            <span className="amount">
              <span className="simbol">$</span>
              {price}
            </span>
          </span>
        </div>
      </li>
    </>
  )
}

export default ClothCard