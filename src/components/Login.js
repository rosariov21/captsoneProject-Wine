import React, { Component } from "react";
import {Form} from 'react-bootstrap'
import axios from 'axios';
export default class Login extends Component {
    
        constructor(props) {
            super(props);
              this.state = { 
                email: '',
                password: '' , 
            }
        }
       
    
        handleChange =(e)=>{
            this.setState({ [ e.target.name]: e.target.value})
        }



      componentDidMount() {
        axios.get(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees`)
          .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }
        
      





    render() {
        return (
            <Form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
         
        </Form>
        );
    }
}