import { useState } from 'react'
function App() {
  const [count,setCount] = useState(0)
  function handleDecrement(){
    if(count>0){
      setCount(count-1)
    }
    else{
      setCount(0)
    }
  }

  return (
    <>
    <div className="container">
    <h1>React Increment/Decrement</h1>
    <p>Counter:<span> {count}</span></p>
    <button className='btn' onClick={()=>setCount(count+1)}>Increment</button>
    <button className="btn" onClick={handleDecrement}>Decrement</button>
    <button className="btn" onClick={()=>setCount(0)}>Reset</button>
    </div>

    </>
  )
}

export default App