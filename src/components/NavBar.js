import React from 'react'
import Beer from './Beer';

import Wine from './Wine';
import Review from './Review';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';
import UserCheckout from './UserCheckout';
import EditOrder from './EditOrder';
import WebContact from './WebContact';
import Home from './Home';


function NavBar() {
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

                <li>
                   <Link className="navBar" to ="/Wine">Wine</Link>
                </li>
                <Link className='navBar' to = "/Review">Cart</Link>
                </li>
              
                
                <li>
                  <Link className="navBar" to ="/UserCheckOut">CheckOut</Link>
                </li>
                <li>
                  <Link className="navBar" to ="/EditOrder">EditOrder</Link>
                </li>
                <li>
                  <Link className="navBar" to ="/WebContact">Contact</Link>
                </li>
  
              </ul>
            </nav>
            </div>
          <Switch>
  
          
   <Route  exact path="/Home" component={Home} />
   <Route path="/Review" component={Review} />
   <Route path="/Beer" component={Beer} />
              <Route path ="/Wine" component={Wine}/>
              <Route path = "/UserCheckOut" component={UserCheckout}/>
              <Route path = "/EditOrder" component={EditOrder}/>
              <Route path = "/WebContact" component={WebContact}/>
              </Switch>
        </Router>
    
    
     
      //create the routing path to render
    );
  }

  export default NavBar ;