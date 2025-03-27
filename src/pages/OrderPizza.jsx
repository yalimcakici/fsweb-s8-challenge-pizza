import  { useState } from 'react';
import React from 'react'
import logo from "../../images/iteration-1-images/logo.svg";


function OrderPizza(props) {
  const [order, setOrder] = useState();


  return (
    <>
     
      
      <header className='imageOrder'>
      <img src={logo} alt="Logo" className="imageOrder" />
      </header>
      

      
      
      

          
    </>
  );
}

export default OrderPizza;
