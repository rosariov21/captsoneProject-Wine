

import React from 'react';
  
import axios from 'axios';

import SignUp from './SignUp';
  
class MakeUpdate extends React.Component {
//   state = {
//     posts: [],
//     editing:false
//   }
constructor(props){
    super(props);
    this.state = {
        posts:[],
        editing:false
         }
        }
  componentDidMount() {
    axios.get(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }
  
  deleteRow(id){
    axios.delete(`https://sheltered-refuge-36604.herokuapp.com/rose_api/v1/employees/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
  
  }

  editUser(id,e){
    // e.preventDefault()
      this.setState({editing:id})
      console.log(id)
      this.props.setId(id)
console.log("editing")
  }


  render() {
      let showContent = this.state.editing ? <SignUp id={this.state.editing}/> :''; 
    return (
      <div className='table'>
        <h1>Community Info</h1>
        <h4>Check us out and see who enjoys shopping around </h4>


        {
            showContent
        }
        <table className="table table-bordered" >
          
  
            <tbody >
              {this.state.posts.map((post) => (
                <tr className='column'> 
                  <td > {post.id}</td>
                  <td> First Name {post.firstName}</td>
                  <td> Last Name <br/>{post.lastName}</td>
                  <td> Mobile <br/>{post.mobile}</td>
                  <td className="age" > Age <br/>{post.age}</td>
                  <td > Email <br/>{post.email}</td>
                 <td >{post.password}</td>
                  <td>
                   
                    <button className="btn-dangerD" onClick={(e) => this.deleteRow(post.id, e)}>Delete <break/></button>
                    
                    <button className="btn-dangerU" onClick={(e) => this.editUser(post.id)}>Edit</button>

                    
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