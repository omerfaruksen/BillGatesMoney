import React from 'react'


function Product ({product, basket, setBasket, total, money}) {

    const basketItem= basket.find(item => item.id === product.id)


    const addBasket=()=>{
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş mi?
        if(checkBasket){
            checkBasket.amount +=1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket= () =>{
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -=1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }



  return (
    <>
      <div className="product">
        <img src={product.image} alt="" />
        <h5>{product.title}</h5>
        <div className="price">$ {product.price}</div>
        <div className="actions">
            <button className='sel-button' disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className="amount">{basketItem && basketItem.amount || 0}</span>
            <button className='buy-button' disabled={total+product.price > money} onClick={addBasket}>Satın Al</button>
        </div>
        
      </div>
    </>
  )
}

export default Product
