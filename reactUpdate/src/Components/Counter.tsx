
interface counterProps{
    total:number;
}

const Counter = ({total}:counterProps) => {
  return (
    <>
    <h1>Cart Items: {total}</h1>
    </>
  )
}

export default Counter