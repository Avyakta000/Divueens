import React from 'react'
import './TopBrands.css'
import { brands } from '../../assets/assets'
const TopBrands = () => {
  return (
    <>
    <div className="brand-section">

      <div className="heading">
        <hr className="hr-left" />
        <h2>Top Brands</h2>
        <hr className="hr-right" />
      </div>
      <div className="brands">
        {brands.map((item,index)=>(
            <div key={index} className="brand-container">
            <img src={item} alt="" />
        </div>
        ))}
      </div>
      <div className="heading-2">
        <h1>Get Div coins on every order</h1>
      </div>

    </div>
    </>
  )
}

export default TopBrands
