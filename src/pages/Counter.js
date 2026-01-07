import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(count+1);
    }
    const decrease = () =>{
        setCount(count-1);
    }

  return (
    <div className='counter'>
    <button onClick={increase} className='btn'>ADD</button>
    <h1 className='text'>Count : {count} </h1>
    <button onClick={decrease} disabled={count===0} className='btn1'>MIN</button>
    </div>
  )
}

export default Counter