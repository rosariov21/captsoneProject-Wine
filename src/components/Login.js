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
            <form>
            <h3>Log In</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <h4 className="forgot-password">
                Already registered <a href="#">sign in?</a>
            </h4>
        </form>
        );
    }
}