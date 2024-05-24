import { useState } from "react"

const UpdatePizza = () => {

    const [toppings, setToppings] = useState(['Pepperoni', 'Salami', 'Mushroom', 'Jalapenos', 'Olives']);

    const addCheese = () => {
         toppings.includes('Cheese') ? console.log('Cheese already added') : setToppings([...toppings,'Cheese']);
    }

    const listToppings = toppings.map((item) => 
        <li>{item}</li> 
    );

  return (
    <>
    <h1>Pizza Toppings:</h1>
    <ul>{listToppings}</ul>
    <button onClick={addCheese}>Add Cheese</button>
    </>
  )
}

export default UpdatePizza