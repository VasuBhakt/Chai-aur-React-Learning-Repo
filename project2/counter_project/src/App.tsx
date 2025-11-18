import { useState } from 'react';
import './App.css'
// Project for Web Hooks
function App() {
  let [counter, setCounter] = useState(15); //Initialized with 15
  const addValue = () : void => {
    if(counter==20) return ; //Shouldn't go over 20
    setCounter(counter+1);
    console.log(`value increased ${counter}`);
  }
  const reduceValue = () : void => {
    if(counter==0) return ; //Shouldn't go below 0
    setCounter(counter - 1)
    console.log(`value decreased ${counter}`);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={reduceValue}>Reduce value</button>
    </>
  )
}

export default App
