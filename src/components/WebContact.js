// import React, { Component } from "react";
// import {UserApi} from '../Config/UserApi';
// import { Form,Col,Button } from 'react-bootstrap'
// import axios from 'axios'

// export default class WebContact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employee: []
//         };
//     }
//     getUsersData() {
//         axios
//             .get( {UserApi})
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//                 const employee = data.map(u =>
//                     <div>
//                     <p>{u.id}</p>
//                     <p>{u.firstName}</p>
//                     <p>{u.lastName}</p>
//                     <p>{u.mobile}</p>
//                     <p>{u.email}</p>
//                     <p>{u.password}</p>
//                     </div>
//                     )

//                     this.setState({
//                         employee
//                     })

//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }
//     componentDidMount(){
//         this.getUsersData()
//     }
//     render() {

//         return (
//             <div>
//                 {this.state.employee}
//                 <div className="contactParent">
//                 <div className="contacts">
//                 <Form>
//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Email</Form.Label>
//       <Form.Control type="email" placeholder="Enter email" />
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">
//       <Form.Label>Password</Form.Label>
//       <Form.Control type="password" placeholder="Password" />
//     </Form.Group>
//   </Form.Row>
//   <Form.Row>
//   <Form.Group  as={Col} controlId="formGridFirstName">
//     <Form.Label>First Name</Form.Label>
//     <Form.Control type="name" placeholder="Enter First name"/>
//   </Form.Group>
//   </Form.Row>
//   <Form.Group controlId="formGridLastName">
//     <Form.Label>Last Name</Form.Label>
//     <Form.Control placeholder="Last Name" />
//   </Form.Group>

//   <Form.Row>
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Age</Form.Label>
//       <Form.Control type="number" placeholder="Age" />
//     </Form.Group>
    
//     <Form.Group as={Col} controlId="formGridEmail">
//       <Form.Label>Mobile</Form.Label>
//       <Form.Control type="mobile" placeholder="Mobile" />
//       </Form.Group>

//    </Form.Row>
//   <Form.Group id="formGridCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>

//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
                    
            
//                 </div>
              
//             <div>
                  
//             </div>
//         </div>
//             </div>
//         )
//     }
// }
