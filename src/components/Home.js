import React from 'react'


import gifbeer from '../images/gifbeer.gif';
import {embed, ResponsiveEmbed} from 'react-bootstrap'; 
export default function Home() {
    return (
  <div className='foo'>    
      <br/>
   <div>
   <div>
   <h2 style={{textAlign: 'center', color: 'white', backgroundColor:'teal'}}>
   Let the Drinks Come to You.</h2>
   <ResponsiveEmbed aspectRatio="16by9">
      
          <embed src={gifbeer} style={{  height: 'auto' }}  />
          </ResponsiveEmbed>   
          
          <h4 style={{textAlign:'center', color: 'white', backgroundColor:'teal' }}>Beer and Wine Delivered to your home in under 60 mintes</h4>
          </div> 
        </div>
      
       
   </div>
    )
}