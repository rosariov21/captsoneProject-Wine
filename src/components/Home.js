import React from 'react'
import logo1  from '../images/logo1.jpg'
export default function Home() {
    return (
  <div>
      <br/>
  <h2 style={{textAlign: 'center', color: 'white',  backgroundColor:"orange"}}>
   Let the Drinks Come to You.</h2>

   <div className="logo1">
          <img src={logo1} width="max-content" height="250px" />
        </div>
 <br/>

   <h4 style={{textAlign: 'center', color: 'white', backgroundColor:"orange"}}>Beer and Wine Delivered to your home in under 60 mintes</h4>
   </div>
    )
}