
import {Card, Carousel} from 'react-bootstrap'; 
import React from 'react';
import PhoneWine from '../images/PhoneWine.jpg'
import gifbeer from '../images/gifbeer.gif'

class About extends React.Component{
    render(){
      return(
        <div>
         <Carousel className="Caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={PhoneWine}
      alt="First slide"  height= "500px" width="200px"/>
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={gifbeer}
      alt="second slide"  height= "500px" width="200px" />


  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.1000storieswines.com/wp-content/uploads/C0023_retouched-poster.jpg"
      alt="Third slide" length="200px" height= "500px" width="200px" />
  </Carousel.Item>
</Carousel>  
    </div>

    
      );
    }
  }


export default About;