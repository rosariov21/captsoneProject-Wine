import React, { Component } from 'react'

import axios from 'axios';
import { Button } from "react-bootstrap";


class Wine extends React.Component {
    constructor(props){
        super(props);
    // set state to store info
    //Reference Insomnia data flow
        this.state ={
          wines: [], 
          filterWine: [],
          userInput:"",
          id: 0,
          name: "",
          year: 1980,
          grapes: "",
          country: "",
          region: "",
          description: "",
          picture: "",
          price: 0,
        }
        this.handleUserInput=this.handleUserInput.bind(this)
      }
      
   mapWineList (searchWine){
    return searchWine.map((wine) => (

        <div className='wineKid' key={wine.id}>
            <br/>

          <p>
             <img className='winepics' key={wine.id} src={wine.picture} alt ='wine bottle'/>
          </p>
          <p className='main' key ={wine.id}>
             {wine.name} 
             <br/>
             {wine.year}  
             <br/>
             {wine.country}
             <br/>
             {wine.price}  
             <br/>
             {wine.description}  
          </p>
          <button  className="add" onClick={()=>this.props.addToCart(wine)}>add to cart </button>
             <button className="remove" onClick={()=>this.props.deleteToCart(wine)}>remove from cart </button>
          </div>
      ))
        
   }


handleUserInput(e){
console.log(this.state.wines[0].name)

    let lowerInput=this.state.userInput.toLowerCase()
 this.setState({
     userInput:e.target.value,
     filterWine:this.mapWineList(this.state.wines.filter(wineI=> wineI.name.toLowerCase().includes(lowerInput)||
    (wineI.description.length>0 && wineI.description.toLowerCase().includes(lowerInput))||
    (wineI.country.length>0 && wineI.country.includes(lowerInput))))
//    (wineI.region.length>0 && wineI.regions.toLowerCase().includes(lowerInput))))

 })
 console.log(e.target.value)
    
    

}

      getWine(){
        axios.get('http://myapi-profstream.herokuapp.com/api/db6de6/wines')
          .then(response => {
            this.setState({
              wines:response.data,
            filterWine:this.mapWineList(response.data)
            })
            
          }).catch(error =>{
            console.log(error)
          })
      }

      componentDidMount(){
          this.getWine()
      }




//Must we render in ul & li?
//map function to pull data

    render() {
        return (
            <div className='title'>
                <h1>Top Sellers</h1>
            
            <div className='parent'>
            <input className="searchBox"  type="text" placeholder="Search wine" onChange={this.handleUserInput}/>

            <Button variant="primary" type="submit">Get Wine Information</Button>
            {this.state.filterWine}
</div>
</div>
            )};
        }
  export default Wine;


    
  