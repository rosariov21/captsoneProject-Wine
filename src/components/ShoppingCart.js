import React, { Component } from "react";
import NavBar from './NavBar';

export default class ShoppingCart extends Component{
    constructor(props){
        super(props);
        this.state = {
            shoppingList:[],
           

        }
this.addToCart = this.addToCart.bind(this);
this.deleteToCart = this.deleteToCart.bind(this);

    }
   
    addToCart(item){
        console.log("addToCart")
        let newitem = {
            name: item.name,
            image: item.image_url ? item.image_url : item.picture,
            id: item.id,
            price: item.price ? item.price : 12
        }
        this.setState({
            shoppingList:this.state.shoppingList.concat(newitem)

        })
        console.log(this.state.shoppingList)
    }
        deleteToCart(item){
            console.log("deleteToCart")
            let shoppingListCopy = this.state.shoppingList.filter(keep=>keep.id!=item.id)
            console.log(item)
            this.setState({
                shoppingList:shoppingListCopy
             })
    
             
             console.log(this.state.deleteShopingList)

    }
 render (){
    return(
        <div >
        <NavBar addToCart={this.addToCart} cartCount = {this.state.shoppingList.length}  deleteToCart={this.deleteToCart} shoppingList={this.state.shoppingList}/>

        <h5 style={{textAlign: 'center', color: 'white', fontFamily: 'cursive' , marginTop: '100px' }}>Order placed successfully. <br/>
           Confirmation Number: 00000-2B5IH-1D4DW-6RU05</h5>
        </div>
    )
 }
}
