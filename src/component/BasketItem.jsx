import React from 'react'

function BasketItem( {item, product}) {
  return (
    <div className='basket-item'>
      {product.title} x <span>{item.amount}</span>
    </div>
  )
}

export default BasketItem
