import React, { useState } from 'react';

import Home from './Home'
import Add from './Add'

const Main = () => {
  const [menu, setMenu]=useState(true)
  return (
    <div onClick={()=>{setMenu(!menu)}}>
      {menu? <Home /> : <Add /> }

      {/* <Home /> */}
    </div>
  );
}

export default Main;
