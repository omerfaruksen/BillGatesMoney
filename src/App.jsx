import './App.css'
import './index.css'
import { useEffect,useState } from 'react'
import Header from './component/Header'
import product from './product.json'
import Product from './component/Product'
import Basket from './component/Basket'

function App() {
  const[money, setMoney]=useState(100000000000);
  const [basket,setBasket]=useState([]);
  const [total, setTotal]=useState(0);
  const resetBasket=()=>{
    setBasket([])
  }
  useEffect(()=>{
    setTotal(
      basket.reduce((acc,item) => {
        return acc + (item.amount*(product.find(product => product.id === item.id).price))
    }, 0),
    )
    
  }, [basket])
  return (
    <>
      <div className="billgates">
        <img  src="https://neal.fun/spend/billgates.jpg" alt="" />
        <br />
        <h1>Spend Bill Gates' Money</h1>
        <br />
      </div>
        <Header  total={total} money={money}/>
      <div className="container products">
        {product.map(product=>(
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>
        <Basket product={product} total={total} basket={basket}/>
        <button className='reset-basket container' onClick={resetBasket}> Reset Basket</button>
    </>
  )
}

export default App
