import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Blogdata } from '../NavBar/Blogdata';

const Serviceint = () => {
    const { title } = useParams()
    const [bodydata, setBodydata] = useState("")

    useEffect(() => {
       const filterdata = Blogdata.filter((blog)=> blog.title === title)
       setBodydata(filterdata[0].body)
    }, []);
  return (
    <div>
      <h1>{ title }</h1>
      <p>{bodydata.slice(0,500) }</p>
      <p>{bodydata.slice(501,1500) }</p>
    </div>
  );
}

export default Serviceint;
