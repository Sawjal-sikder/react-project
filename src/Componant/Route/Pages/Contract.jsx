import React from 'react';
import { useNavigate } from 'react-router-dom';


const Contract = () => {
  const navgate = useNavigate()
  return (
    <div>
      <h1>Contracts</h1>
      <button onClick={()=>{navgate("/")}} >Go To Home Page</button>
    </div>
  );
}

export default Contract;
