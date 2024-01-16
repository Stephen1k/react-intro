import { useState } from 'react'

import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  let addValue = () => {
  setCounter(counter+1)
  }

  let removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
     <h1>React Course </h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <button onClick={removeValue}>Remove Value</button>
     <p>footer: </p>
    </>
  )
}

export default App
