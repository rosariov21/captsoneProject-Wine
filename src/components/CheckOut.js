import React, { Component } from "react";


export default class CheckOut extends Component{
    constructor(props){
        super(props);
        props.shoppingList.map(item=>console.log(item.price))
        let total = props.shoppingList.length >0 ? props.shoppingList.reduce((a,b)=>{return a+ Number(b.price)},0) : 0
       
       console.log(total)
        this.state = {
            shoppingList: props.shoppingList,
            total:total
           

        }
        }

        render(){
             
            return(
            <div>
              
                  
            <ul style={{textAlign: 'center', color: 'yellow' }}>{
            this.state.shoppingList.map(item => {return(<li>{item.name}<img className="Checkout" src ={item.image}/> {item.id} {item.price}</li>)})

            }</ul>

               <h3 style={{textAlign: 'center', color: 'yellow' }}>total:</h3> {
                 this.state.total 
             
             }


             </div>
            )
        }

        
}