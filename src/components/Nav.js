import React, { Component } from "react";
import Beer from './Beer';
import YellowC from '../images/YellowC.png'
import WCart from '../images/WCart.png'
import Wine from './Wine';
import CheckOut from './CheckOut';
import SignUp from './SignUp';
import Login from './Login'
import About from './About'
import 
{HashRouter as Router, Route, Switch, Link} 
from 'react-router-dom';

import MakeUpdate from './MakeUpdate';
import Home from './Home';

export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
          id : ""
        }
    }
    setId = (id)=>{
      this.setState({id})
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
                <li className="nav-item">
                <Link className="nav-link" to={"/Login"} style={{textAlign: 'center', color: 'yellow' }}>Login</Link><small></small>
              </li>



                <li>
                  <Link className="navBar" to ="/CheckOut" style={{textAlign: 'center', color: 'yellow' }}>CheckOut </Link>

                  <img src={YellowC} width="40px" />
                    {this.props.cartCount}
                  </li>

                  <li className="nav-item">
                <Link className="nav-link" to={"/About"} style={{textAlign: 'center', color: 'yellow' }}>Photo Gallery</Link>
              </li>
               
              </ul>
              
            </nav>
            </div>
          <Switch>
  
          
   <Route  exact path="/Home" component={Home} />
   <Route path="/Beer" component={()=><Beer addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>} />
              <Route path ="/Wine" component={()=><Wine addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart}/>}/>
              <Route path = "/MakeUpdate" render={()=><MakeUpdate setId={this.setId}/>} />
              <Route path = "/SignUp" render={()=><SignUp currentId={this.state.id} setId={this.setId}/>}  />
              <Route path ="/CheckOut" component={()=><CheckOut addToCart={this.props.addToCart} deleteToCart={this.props.deleteToCart} shoppingList={this.props.shoppingList}/>}/>
              <Route path path="/About" component={About} />
           
             <Route path ="/Login" component={Login}/>
             
              </Switch>
        </Router>
    
        
     
      //create the routing path to render
    );
  }

}
