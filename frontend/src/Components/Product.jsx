import React from 'react'

const Product = ({Image, Name, Price, Color}) => {
  return (
    <div className='col-12 col-md-4'>
        <div className='p-1'>
            <div className={`border shadow-sm p-3 ${Color}`}>
            <img src={Image} alt="" className='w-75 h-75'/>
            <h3>{Name}</h3>
            <p>₹{Price}</p>
            <button className='btn bg-white w-100 rounded-0'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Product