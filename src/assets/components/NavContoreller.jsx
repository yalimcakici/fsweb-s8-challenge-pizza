import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'


const Controller = styled.div`
 
display: flex;
bottom: 1rem;
`

function NavContoreller() {
  

  return (

    <Controller className="controller" >
    <Link to="/">Ana Sayfa</Link>
    <Link to="/homepage" className="controllerHome">Ana Sayfa</Link>
    <Link to="/orderpizza" className="controllerOrder">Seçenekler</Link>
    <Link to="/succes" className="controllerSucces">Sipariş Oluştur</Link>
    
    </Controller>
  )
}

export default NavContoreller