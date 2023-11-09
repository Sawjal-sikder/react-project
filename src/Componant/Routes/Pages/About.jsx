import React from 'react';
 import {  useNavigate } from 'react-router-dom';
const About = () => {
  const Navigate = useNavigate()
  return (
    <div>
      About Pages <br /><br />
      <button onClick={()=>{Navigate("/")}}>Go To Home Pages</button>
    </div>
  );
}

export default About;
