import React, { Component } from 'react'
import Header from './Header'
import Homepage from './Homepage'
import Footer from './Footer'
import { Route, Routes } from "react-router";
import Products from './Products';
import productData from '../assets/productData'

class Main extends Component{
    constructor(){
        super();
        this.state={
            shoppingCart:[]
        }
        this.addItem=this.addItem.bind(this)
    }

    addItem=(productDetails)=>{
        let add_shoppingCart=this.state.shoppingCart
        if (this.state.shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)){
            const position = this.state.shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
            add_shoppingCart[position].quantity+=1
        }else{
            add_shoppingCart=[...this.state.shoppingCart,{name:productDetails.name,price:productDetails.price,quantity:1}]
        }
        {console.log(add_shoppingCart)}
        this.setState({
            shoppingCart:add_shoppingCart
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/products" element={<Products productData={productData} addItem={this.addItem}/>} />
                </Routes>
                <Footer className='mt-auto'/>
            </div>
        )
    }
}

export default Main;