import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {increment,decrement,incremenrBy} from "../redux/features/countFeature";
const CountRedux = () => {
  const dispatch=useDispatch();

  const store=useSelector((state)=>{
      return state['counter']
  })
  const handleClick=()=>{
    console.log('hii')
    dispatch(increment())
  }
  const handleClick1=()=>{
    dispatch(decrement())
  }
  const handleClick2=()=>{
   dispatch(incremenrBy(5))
  }
  console.log(store)
  const {count}=store
  return (
    <>
     <button onClick={handleClick}>Incremenrt</button>
      <h1> Count Redux   {count}</h1> 
    
      <button onClick={handleClick1}>decrement</button>

      <button onClick={handleClick2}>increment by </button>
      


    </>
  );
};

export default CountRedux;
