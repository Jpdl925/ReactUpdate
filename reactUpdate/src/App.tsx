
import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import ReactUpdate from './Components/ReactUpdate'
import UpdatePizza from './Components/UpdatePizza'
import Counter from './Components/Counter'

function App() {


  const [cartItem, setCartItem] = useState(['Milk','Cheese','Bread']);

  const addCart = () => {
    cartItem.includes("Butter") ? console.log("Butter has already been added") : setCartItem([...cartItem,"Butter"]);
  }

  return (
    <>
     <ReactUpdate/> 
     <UpdatePizza/>
     <Counter total={cartItem.length}/>
     <Cart cartItems={cartItem}/>
     <button onClick={addCart}>Add To Cart</button>
    </>
  )
}

export default App
