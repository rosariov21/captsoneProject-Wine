
import React, { Component } from "react";
import {UserApi} from '../Config/UserApi';
import { Form,Col,Button } from 'react-bootstrap'
import axios from 'axios'

export default class UserAPI extends Component {
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
let newUser,deleteUser = {
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    mobile:this.state.mobile,
    age:Number(this.state.age),
    email:this.state.email,
    password:this.state.password
}
this.postUserData(newUser)
this.deleteUserData(deleteUser)
    } 

    postUserData=(newUser)=>{
        axios
        .post(UserApi, newUser) 
        .then(res =>{
            const data = res.data
        console.log(data)
        }

        )
        .catch((error) =>{
            console.log("failure")
        })
    }

    // UserApi`{$1}` we use this for the delete link 

deleteUserData=(deleteUser)=>{
    axios
    .delete(UserApi/`{$1}`, deleteUser) 
    .then(res =>{
        const data = res.data
    console.log(data)
    }

    )
    .catch((error) =>{
        console.log("failure")
    })
}


    getUsersData() {
        axios
            .get( UserApi)
            .then(res => {
                const data = res.data
                console.log(data)
                const employees = data.map((u,index) =>
                    <div key= {index}>
                    <p>{u.firstName}</p>
                    <p>{u.lastName}</p>
                    <p>{u.mobile}</p>
                    <p>{u.age}</p>
                    <p>{u.email}</p>
                    <p>{u.password}</p>
                    </div>
                    )

                    this.setState({
                        employees
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }






 

    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
                {this.state.employees}
                <div className="contactParent">
                <div className="contacts">
                <Form onSubmit={this.handleSubmit}>
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
