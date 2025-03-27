import React from 'react'
import { useState } from 'react'
import homeBanner from "../../images/iteration-1-images/home-banner.png"; 
import logo from "../../images/iteration-1-images/logo.svg";



    

function HomePage(props) {
    const [header, setHeader] = useState("");


  return (
    <>


    <img className="headerAnasayfa" src={logo}></img>
    <h2 className='p1'>KOD ACIKTIRIR</h2>
    <h2 className='p2'>PIZZA, DOYURUR</h2>
    <button className="buttonAnasayfa">ACIKTIM</button>
    <img src={homeBanner} className="homeBanner" />




    </>
   

  )
}

export default HomePage
