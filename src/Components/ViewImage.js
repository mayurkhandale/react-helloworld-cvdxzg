import React, { useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';

const ViewImage = () => {
  const [status,setstatus]=useState(false)
   const navigate=useNavigate()
  const location = useLocation();
  console.log(location.state.id);
  // const { Poster, Title } = location.state.id;
  const [state, setState] = useState(location);
  console.log(state, '99');
  const handleView = () => {
    setState({
      state:[]
    })
  };
const handleClick=()=>{
  console.log('hii')
   navigate('/watchMovie')
}
  return (
    <>
      <h1>View Image</h1>
      {state.state.length>0 ? (
        <div className="w-100 h-100 text-center">
          <img src={state.state[0].Poster} className="w-80" />
          <h1 className="title">{state.state[0].Title}</h1>
          <button className="btn btn-danger m-2" onClick={handleView}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={handleClick}>Watch Movie </button>
        </div>
      ) : (
        
        <div className="alert alert-danger text-center"  onClick={handleClick}>View card Empty </div>
      )}
    </>
  );
};

export default ViewImage;
