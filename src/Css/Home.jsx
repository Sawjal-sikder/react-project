import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className="icon-bar">
    <a className="active" href="#"><i className="fa fa-home"></i></a> 
    <a href="#"><i className="fa fa-search"></i></a> 
    <a href="#"><i className="fa fa-envelope"></i></a> 
    <a href="#"><i className="fa fa-globe"></i></a>
    <a href="#"><i className="fa fa-trash"></i></a> 
  </div>
)
}

export default Home
