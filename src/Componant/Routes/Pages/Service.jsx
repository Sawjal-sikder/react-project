import React, { useState } from 'react';

import './Service.css'
import { Blogdata } from '../NavBar/Blogdata';
import { Link } from 'react-router-dom';
const Service = () => {
  const [blogs, setBlogs] = useState(Blogdata)
  const trankedstring = (str, num)=>{
     if (str.length > num) {
      return str.slice(0, num) + "..."
     } else{
      return str;
     }
  }
  return (
    <div>
      <h1>Service pages</h1>
      <section>
        { blogs.map((blog)=>{
          const {id, title, body} = blog
          return <article key={id}>
              <h2>{ title }</h2>
              <p> {trankedstring(body, 100)} </p>
              <Link to={title}>Learn more..</Link>
          </article>
        }) }
      </section>
    </div>
  );
}

export default Service;
