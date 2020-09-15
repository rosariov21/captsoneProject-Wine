import React, { Component } from "react";
import NavBar from './NavBar';

export default class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            shoppingList:[],
            deleteShopingList:[]

        }
this.addToCart = this.addToCart.bind(this);
this.deleteToCart = this.deleteToCart.bind();

    }
   
    addToCart(item){
        this.setState({
            shoppingList:this.state.shoppingList.concat(item)

        })
    }
        deleteToCart(item){
            this.setState({
                deleteShoppingList:this.state.deleteShoppingList.concat(item)
             })
    
             console.log(this.state.shoppingList)
    }
 render (){
    return(
        <div>
        <NavBar addToCart={this.addToCart} cartCount = {this.state.shoppingList.length}  deleteToCart={this.deleteToCart}/>

        <h5 style={{textAlign: 'center', color: 'white', fontFamily: 'cursive' , marginTop: '100px' }}>Order placed successfully. <br/>
           Confirmation Number: 00000-2B5IH-1D4DW-6RU05</h5>
        </div>
    )
 }
}
