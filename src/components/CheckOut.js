import React, { Component } from "react";


export default class CheckOut extends Component{
    constructor(props){
        super(props);
        let total = props.shoppingList.length >0 ? props.shoppingList.reduce((a,b)=>{return Number( a.price)+ Number(b.price)}) : 0
        this.state = {
            shoppingList: props.shoppingList,
            total:total
           

        }
        }

        render(){
             
            return(
            <div>
            <ul className='center1'>{
            this.state.shoppingList.map(item => {return(<li>{item.name}<img src ={item.image}/> {item.id} {item.price}</li>)})

            }</ul>

                total: {
                    this.state.total
             
             }
             </div>
            )
        }

        
}