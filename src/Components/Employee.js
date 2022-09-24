import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {techChange} from "../redux/features/employeeFeature";
const Employee=()=>{
  const dispatch=useDispatch()
  const store=useSelector((state)=>{
    return state['employee']
  })
  console.log(store,'77')
  const handleClick=()=>{
    dispatch(techChange())
   
  }
  return(
    <>
      <h1>employee</h1>
      {store.tech}
      <button onClick={handleClick}>Change Tech</button>
    </>
  )
}

export default Employee;
