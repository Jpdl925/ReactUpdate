
interface cartProps{
  cartItems:string[];
}


const Cart = ({cartItems}:cartProps) => {

    const listItems = cartItems.map((Item) => 
      <li>{Item}</li>
    );

  return (
    <>
    <ul>{listItems}</ul>
    </>
  )
}

export default Cart