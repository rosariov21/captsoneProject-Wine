
import React, { Component } from "react";
import {UserApi} from '../Config/UserApi';
import { Form,Col,Button, Table} from 'react-bootstrap'
import axios from 'axios'
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: "",
            firstName:"",
            lastName:"",
            mobile:"",
            age:"",
            email:"",
            password:""

        };
       this.handleUserInput = this.handleUserInput.bind(this);
      

    }
    handleUserInput(e) {
       let {name, value } =e.target
       console.log(name,value,e)
       this.setState({[name]: value})
       console.log(this.state)
    }

    handleSubmit=(e)=>{
e.preventDefault()

console.log('post!')
let newUser = {
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    mobile:this.state.mobile,
    age:Number(this.state.age),
    email:this.state.email,
    password:this.state.password
}
console.log('props')
console.log(this.props)
console.log(this.props.id)
 if (this.props.id){
  axios.put(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees/${this.props.id}`,  newUser)
  .then(res=>{
    console.log(res);
    
  })
  .catch(errors=>console.log(errors))

 }
 else{
  axios.post(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees`, newUser)
  .then(res=>{
    console.log(res);
    
  })
  .catch(errors=>console.log(errors))
     
 }

// this.props.setId('')
    }
getUserData() {
  axios.get(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees/${this.props.id}`)
  .then(res => {
    console.log(res);
    console.log(res.data);
    this.setState({firstName:res.data.firstName,lastName:res.data.lastName,
      email:res.data.email, age:res.data.age, password:res.data.password, mobile:res.data.mobile})
    
  })
}
componentDidMount() {
  this.getUserData()
  
    }

    render() {

        return (
            <div>
                {this.state.employees}
                <div className="contactParent">
                <div className="contacts">
                <Form onSubmit={this.handleSubmit}>
                <h3>SIGN UP</h3>
  <Form.Row>
         
    <Form.Group as={Col} controlId="formGridEmail">

      <Form.Label>Email</Form.Label>

      <Form.Control type="email" placeholder="Enter email"  value={this.state.email} name="email" onChange={this.handleUserInput}/>
   
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">

      <Form.Label>Password</Form.Label>

     
      <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleUserInput}/>
    
    </Form.Group>
  
  </Form.Row>
 
  <Form.Row>
    
    <Form.Group  as={Col} controlId="formGridFirstName">
    
    <Form.Label>First Name</Form.Label>
   
    <Form.Control type="name" placeholder="Enter First name" value={this.state.firstName} name="firstName" onChange={this.handleUserInput}/>
  
    </Form.Group>
  
  </Form.Row>
    <Form.Group controlId="formGridLastName">
   
    <Form.Label>Last Name</Form.Label>
    
    <Form.Control type = "Last name" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleUserInput} />
  
  </Form.Group>

  <Form.Row>
   
    <Form.Group as={Col} controlId="formGridEmail">
     
      <Form.Label>Age</Form.Label>
     
      <Form.Control type="number" placeholder="Age" value={this.state.age} name="age" onChange={this.handleUserInput}/>
      
       </Form.Group >
     
      <Form.Label>Mobile</Form.Label>
      
      <Form.Control type="mobile" placeholder="Mobile" value={this.state.mobile}  name="mobile" onChange={this.handleUserInput}/>
      
</Form.Row>
  
  <Form.Group id="formGridCheckbox">

 <Form.Check type="checkbox" label="Check me out" />
  
  </Form.Group>

  
  <Button  type="submit" >
    Submit
  </Button>
</Form>
                    
            
                </div>
              
            <div>
                  
            </div>
        </div>
            </div>
        )
    }
}