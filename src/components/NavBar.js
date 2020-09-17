import React, { Component } from "react";
import Beer from './Beer';
import shop  from '../images/shop.png'
import Wine from './Wine';
import CheckOut from './CheckOut';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';

import UserAPI from './UserAPI';
import Home from './Home';

export default class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){

    
    return (
      
        
        
        <Router>
          <div className="Nav-animation">
            <nav>
              <ul>
              <li>
                <Link className='navBar' to = "/Home">Home</Link>
                </li>
                <li>
                  <Link className="navBar" to ="/Beer">Beer</Link>
                </li>
                

                <li>
                   <Link className="navBar" to ="/Wine">Wine</Link>
                </li>
             
            
                <li>
                  <Link className="navBar" to ="/UserAPI">Contact</Link>
                </li>
                
                <li>
                  <Link className="navBar" to ="/CheckOut">CheckOut </Link>

                  <img src={shop} width="50px"/>
                    {this.props.cartCount}
                  </li>

                 
               
              </ul>
              
            </nav>
            </div>
          <Switch>
  
          
   <Route  exact path="/Home" component={Home} />
   <Route path="/Beer" component={()=><Beer addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>} />
              <Route path ="/Wine" component={()=><Wine addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>}/>
              <Route path = "/UserAPI" component={UserAPI}/>
              <Route path ="/CheckOut" component={()=><CheckOut addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart} shoppingList={this.props.shoppingList}/>}/>
              </Switch>
        </Router>
    
        
     
      //create the routing path to render
    );
  }

}
