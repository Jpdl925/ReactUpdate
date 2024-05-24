import { useState } from "react"



const ReactUpdate = () => {


    const [name, setName] = useState('David');

    const handleName = () => {
        if (name == 'David'){
            setName('Aaron');
        }
        else{
            setName('David');
        }
    }
  return (
    <>
    <h1>{name}</h1>
    <button onClick={handleName}>Name Change</button>
    </>
  )
}

export default ReactUpdate