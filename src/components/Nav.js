import React, { Component } from "react";
import Beer from './Beer';
import shop  from '../images/shop.png'
import Wine from './Wine';
import CheckOut from './CheckOut';
import SignUp from './SignUp';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';

import MakeUpdate from './MakeUpdate';
import Home from './Home';

export default class Nav extends Component{
    constructor(props){
        super(props)
    }
    render(){

    
    return (
      
        
        
        <Router>
          <div className="Nav-animation">
            <nav >
              <ul>
              <li>
                <Link className='navBar' to = "/Home"  style={{textAlign: 'center', color: 'yellow' }}>Home</Link>
                </li>
                <li>
                  <Link className="navBar" to ="/Beer" style={{textAlign: 'center', color: 'yellow' }}>Beer</Link>
                </li>
                

                <li>
                   <Link className="navBar" to ="/Wine" style={{textAlign: 'center', color: 'yellow' }}>Wine</Link>
                </li>
             
            
                <li>
                  <Link className="navBar" to ="/MakeUpdate"style={{textAlign: 'center', color: 'yellow' }}>Profile</Link>
                </li>
                <li>
                  <Link className="navBar" to ="/SignUp"style={{textAlign: 'center', color: 'yellow' }}>SignUp</Link>
                </li>
                
                <li>
                  <Link className="navBar" to ="/CheckOut" style={{textAlign: 'center', color: 'yellow' }}>CheckOut </Link>

                  <img src={shop} width="50px" />
                    {this.props.cartCount}
                  </li>

                 
               
              </ul>
              
            </nav>
            </div>
          <Switch>
  
          
   <Route  exact path="/Home" component={Home} />
   <Route path="/Beer" component={()=><Beer addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>} />
              <Route path ="/Wine" component={()=><Wine addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>}/>
              <Route path = "/MakeUpdate" component={MakeUpdate}/>
              <Route path = "/SignUp" component={SignUp}/>
              <Route path ="/CheckOut" component={()=><CheckOut addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart} shoppingList={this.props.shoppingList}/>}/>
              </Switch>
        </Router>
    
        
     
      //create the routing path to render
    );
  }

}
