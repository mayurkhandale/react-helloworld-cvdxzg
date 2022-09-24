import React, { useState } from 'react';
import '../style.css';
const Count = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count-1);
  };
  return (
    <>
      <div>
        <button onClick={Increment}>Incre</button>
        <h1>count {count}</h1>
        <button onClick={decrement}>Decre</button>
      </div>
    </>
  );
};

export default Count;
