
// import React, { Component } from "react";
// import {UserApi} from '../Config/UserApi';
// import { Form,Col,Button, Table} from 'react-bootstrap'
// import axios from 'axios'

// export default class MakeUpdate extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             employees: "",
//             firstName:"",
//             lastName:"",
//             mobile:"",
//             age:"",
//             email:"",
//             password:""

//         };
//        this.handleUserInput = this.handleUserInput.bind(this);
      

//     }
//     handleUserInput(e) {
//        let {name, value } =e.target
//        console.log(name,value,e)
//        this.setState({[name]: value})
//        console.log(this.state)
//     }

//     handleSubmit=(e)=>{
// e.preventDefault()
// console.log('post!')
// let newUser = {
//     firstName:this.state.firstName,
//     lastName:this.state.lastName,
//     mobile:this.state.mobile,
//     age:Number(this.state.age),
//     email:this.state.email,
//     password:this.state.password
// }
// this.postUserData(newUser)

//     } 

//     // handleDelete=(e)=>{
//     //     e.preventDefault()
//     //     console.log('delete!')
//     //     let deleteUser = {
//     //         firstName:this.state.firstName,
//     //         lastName:this.state.lastName,
//     //         mobile:this.state.mobile,
//     //         age:Number(this.state.age),
//     //         email:this.state.email,
//     //         password:this.state.password
//     //     }
//     //     this.deleteUserData(deleteUser)
    
//     postUserData=(newUser)=>{
//         axios
//         .post(UserApi, newUser) 
//         .then(res =>{
//             const data = res.data
//         console.log(data)
//         }

//         )
//         .catch((error) =>{
//             console.log("failure")
//         })
//     }

//     // UserApi`{$1}` we use this for the delete link 

// deleteUserData=(id,deleteUser)=>{
//     axios
//         // .delete(UserApi, id, {headers: {"Access-Control-Allow-Origin": "*"},
//         // .then(res =>{
//         //     const data = res.data
//         // console.log(data)
//         // }
//         // })
        

//         // )
//         // .catch((error) =>{
//         //     console.log("failure")
//         // }
//        .delete(UserApi,id, {
//             headers: {
//                "Access-Control-Allow-Origin": "*",
//             },
//             data: deleteUser
//           })
// }


// handleRemove() {
//     // const url = `UserApi/${user.id}`;
//     // axios
//     //   .delete(url)
//     //   .then(res => {
//     //     const data = res.data
//     // console.log(data)
//     //   .catch(err => {
//     //     console.log(err);
//     //   });
//   }



//     getUsersData() {
//         axios
//             .get( UserApi)
//             .then(res => {
//                 const data = res.data
//                 console.log(data)
//                 const employees = data.map((u,index) =>
//                 <Table  style={{backgroundColor: 'grey'}}>
                    

//                     <tr key= {index}>
//                     <tbody>    
//                     <td striped bordered hover size="sm">{u.firstName}</td>
                   
//                     <td striped bordered hover size="sm">{u.lastName}</td>
                   
//                     <td striped bordered hover size="sm">{u.mobile}</td>
                  
//                     <td striped bordered hover size="sm">{u.age}</td>
                  
//                     <td striped bordered hover size="sm">{u.email}</td>
                   
//                     <td striped bordered hover size="sm">{u.password}</td>
//                      <Button onClick={() => this.deleteUserData(res.deleteUser)}> Delete</Button> 
//                      </tbody>
                    
                 
//                     </tr>

//                     </Table>
//                     )

//                     this.setState({
//                         employees
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
//                 {this.state.employees}
//                 <div className="contactParent">
//                 <div className="contacts">
//                 <Form onSubmit={this.handleSubmit}>
//   <Form.Row>

//     <Form.Group as={Col} controlId="formGridEmail">

//       <Form.Label>Email</Form.Label>

//       <Form.Control type="email" placeholder="Enter email"  value={this.state.email} name="email" onChange={this.handleUserInput}/>
   
//     </Form.Group>

//     <Form.Group as={Col} controlId="formGridPassword">

//       <Form.Label>Password</Form.Label>

     
//       <Form.Control type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleUserInput}/>
    
//     </Form.Group>
  
//   </Form.Row>
 
//   <Form.Row>
    
//     <Form.Group  as={Col} controlId="formGridFirstName">
    
//     <Form.Label>First Name</Form.Label>
   
//     <Form.Control type="name" placeholder="Enter First name" value={this.state.firstName} name="firstName" onChange={this.handleUserInput}/>
  
//     </Form.Group>
  
//   </Form.Row>
//     <Form.Group controlId="formGridLastName">
   
//     <Form.Label>Last Name</Form.Label>
    
//     <Form.Control type = "Last name" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleUserInput} />
  
//   </Form.Group>

//   <Form.Row>
   
//     <Form.Group as={Col} controlId="formGridEmail">
     
//       <Form.Label>Age</Form.Label>
     
//       <Form.Control type="number" placeholder="Age" value={this.state.age} name="age" onChange={this.handleUserInput}/>
      
//        </Form.Group >
     
//       <Form.Label>Mobile</Form.Label>
      
//       <Form.Control type="mobile" placeholder="Mobile" value={this.state.mobile}  name="mobile" onChange={this.handleUserInput}/>
      
// </Form.Row>
  
//   <Form.Group id="formGridCheckbox">

//  <Form.Check type="checkbox" label="Check me out" />
  
//   </Form.Group>

  
//   <Button  type="submit" >
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


import React from 'react';
  
import axios from 'axios';

import SignUp from './SignUp';
  
class MakeUpdate extends React.Component {
  state = {
    posts: [],
    editing:false
  }
  
  componentDidMount() {
    axios.get(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  deleteRow(id, e){
    axios.delete(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
  
  }

  editUser(id){

      this.setState({editing:id})

  }


  render() {
      let showContent = this.state.editing ? <SignUp id={this.state.editing}/> : ''; 
    return (
      <div className='table'>
        <h1>Profile</h1>
        


        {
            showContent
        }
        <table className="table table-bordered" >
          
  
            <tbody >
              {this.state.posts.map((post) => (
                <tr>
                  <td >{post.id}</td>
                  <td>{post.firstName}</td>
                  <td>{post.lastName}</td>
                  <td>{post.mobile}</td>
                  <td >{post.age}</td>
                  <td >{post.email}</td>
                 <td >{post.password}</td>
                  <td>
                    <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                    <button className="btn btn-danger" onClick={(e) => this.editUser(post.id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
  
        </table>
      
</div>

      
    )
  }
}

export default MakeUpdate;