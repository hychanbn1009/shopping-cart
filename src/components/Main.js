import React, { Component } from 'react'
import Header from './Header'
import Homepage from './Homepage'
import Footer from './Footer'
import { Route, Routes } from "react-router";
import Products from './Products';
import Cart from './Cart';
import productData from '../assets/productData'

class Main extends Component{
    constructor(){
        super();
        this.state={
            shoppingCart:[],
            itemCount:0
        }
        this.addItem=this.addItem.bind(this)
        this.increaseQuantity=this.increaseQuantity.bind(this)
        this.decreaseQuantity=this.decreaseQuantity.bind(this)
    }

    addItem=(productDetails)=>{
        let add_shoppingCart=this.state.shoppingCart
        if (this.state.shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)){
            const position = this.state.shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
            add_shoppingCart[position].quantity+=1
        }else{
            add_shoppingCart=[...this.state.shoppingCart,{name:productDetails.name,description:productDetails.description,img:productDetails.img,price:productDetails.price,quantity:1}]
        }
        {console.log(add_shoppingCart)}
        this.setState({
            shoppingCart:add_shoppingCart,
            itemCount:this.state.itemCount+1
        })
    }

    increaseQuantity=(productDetails)=>{
        let add_shoppingCart=this.state.shoppingCart
        this.state.shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        const position = this.state.shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        add_shoppingCart[position].quantity+=1
        this.setState({
            shoppingCart:add_shoppingCart,
            itemCount:this.state.itemCount+1
        })
    }

    decreaseQuantity=(productDetails)=>{
        let add_shoppingCart=this.state.shoppingCart
        this.state.shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        const position = this.state.shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        if(add_shoppingCart[position].quantity===1){
            add_shoppingCart.splice(position,1)
        }else{add_shoppingCart[position].quantity-=1}
        this.setState({
            shoppingCart:add_shoppingCart,
            itemCount:this.state.itemCount-1
        })
    }


    render(){
        return(
            <div>
                <Header itemCount={this.state.itemCount}/>
                    <Routes>
                        <Route path="/" element={<Homepage/>} />
                        <Route path="/products" element={<Products productData={productData} addItem={this.addItem}/>} />
                        <Route path="/shopping_cart" element={<Cart shoppingCart={this.state.shoppingCart} increaseQuantity={this.increaseQuantity} decreaseQuantity={this.decreaseQuantity}/>} />
                    </Routes>
                <Footer className='mt-auto'/>
            </div>
        )
    }
}

export default Main;