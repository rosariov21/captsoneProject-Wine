import React from 'react'


import red from '../images/red.jpg';
import {embed, ResponsiveEmbed, Carousel} from 'react-bootstrap'; 
export default function Home() {
    return (
        
  <div className='foo'  >   
   
      <br/>
   <div >
   <div >

  
   <h2 style={{textAlign: 'center', color: 'white' }}>
   Let the Drinks Come to You.</h2>
   {/* <ResponsiveEmbed aspectRatio="16by9">
      
          <embed src={gifbeer} style={{  height: 'auto' }}  />
          </ResponsiveEmbed>    */}
 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn11.bigcommerce.com/s-ejfomtx0h7/images/stencil/original/carousel/11/brews3.jpg?c=2"
      alt="First slide" style={{text:"let the drinks come to you ",color: 'white' }}  height= "500px" width="200px"/>
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.dennisgroup.com/wp-content/uploads/2019/06/iStock-904073158small.jpg"
      alt="second slide"  height= "500px" width="200px" />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.1000storieswines.com/wp-content/uploads/C0023_retouched-poster.jpg"
      alt="Third slide" height= "500px" width="200px"/>
  </Carousel.Item>
</Carousel> 
          
          <h4 style={{textAlign:'center', color: 'white' }}>Beer and Wine Delivered to your home in under 60 mintes</h4>
          </div> 
        </div>
      
       
   </div>
    )
}