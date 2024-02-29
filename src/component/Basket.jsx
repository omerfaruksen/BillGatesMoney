import React from 'react';
import BasketItem from './BasketItem';

function Basket({ basket, product ,total }) {
  return (
    <div className='basket-container container'>
        <h3>Basket :</h3>
      {basket.map(item => (
        <BasketItem key={item.id} item={item} product={product.find(p => p.id===item.id)}/>
      ))}
      <div className='total'>
        Total : $ {total}
      </div>
    </div>
  );
}

export default Basket;
