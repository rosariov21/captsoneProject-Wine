import React from 'react'
import ThankYou from './ThankYou';

import Wine from './Wine';
import Review from './Review';
import 
{BrowserRouter as Router, Route, Switch, Link} 
from 'react-router-dom';
import UserCheckout from './UserCheckout';
import EditOrder from './EditOrder';
import WebContact from './WebContact';


function NavBar() {
    return (
      
  
        <Router>
          <div className="route-container">
            <nav>
              <ul>
                <li>
                <Link className='navBar' to = "/Review">Cart</Link>
                </li>
                <li>
                <Link className="navBar" to ="/ThankYou">Questions</Link>
                 </li>
                 <li>
                   <Link className="navBar" to ="/Wine">InforWine</Link>
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
  
          
   <Route  exact path="/Review" component={Review} />
              <Route path="/ThankYou" component={ThankYou} />
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