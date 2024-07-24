import React from 'react'
import Order from '../assets/Images/order.png'
import Pay from '../assets/Images/pay.png'
import Pick from '../assets/Images/pick.png'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
        <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
      <div className="col px-5 text-center">
        <div className="mb-3">
          <img src={Order} className='w-50 h-50' alt="" />
        </div>
        <h5>Order</h5>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
          <img src={Pay} className='w-50 h-50' alt="" />
        </div>
        <h5>Pay</h5>
      </div>
      <div className=" col px-5 text-center">
        <div className="mb-3">
        <img src={Pick} className='w-50 h-50' alt="" />
        </div>
        <h5>Pick</h5>
      </div>
    </div>
  </div>
  )
}

export default Delivery