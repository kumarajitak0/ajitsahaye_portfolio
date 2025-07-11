import React, {useState} from 'react'
import Home from '../../pages/Home/Home';
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from "react-icons/ai";
import "./Layout.css";
import Menus from '../Menus/Menus';

const Layout = () => {
  const [toggle, setToggle]= useState(true);
  
  //change state
  const handleToggle = ()=>
  {
    setToggle(!toggle);
  };

  return (
    <>
    <div className='sidebar-section'>
        <div className={toggle? "sidebar-toggle sidebar" : 'sidebar'}>
            <div className='sidebar-toggle-icon'>
               <p onClick={handleToggle}>
                {toggle ? (<AiOutlineDoubleLeft size={30} color='white' />):(<AiOutlineDoubleRight size={30} color='white'/>) }             
               </p>
            </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
            <Home/>
        </div>
    </div>
    </>
  )
};

export default Layout;