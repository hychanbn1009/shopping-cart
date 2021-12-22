import React, {useState } from 'react'
import Header from './Header'
import Homepage from './Homepage'
import Footer from './Footer'
import { Route, Routes } from "react-router";
import Products from './Products';
import Cart from './Cart';
import productData from '../assets/productData'

// class Main extends Component{
//     constructor(){
//         super();
//         this.state={
//             shoppingCart:[],
//             itemCount:0
//         }
//         this.addItem=this.addItem.bind(this)
//         this.increaseQuantity=this.increaseQuantity.bind(this)
//         this.decreaseQuantity=this.decreaseQuantity.bind(this)
//         this.removeItem=this.removeItem.bind(this)
//     }

const Main=()=>{
    const [shoppingCart,setShoppingCart]=useState([])
    const [itemCount,setItemCount]=useState(0)

    const addItem=(productDetails,quantity)=>{
        let add_shoppingCart=shoppingCart
        if (shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)){
            const position = shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
            add_shoppingCart[position].quantity=parseInt(add_shoppingCart[position].quantity)+parseInt(quantity)
        }else{
            add_shoppingCart=[...shoppingCart,{name:productDetails.name,description:productDetails.description,img:productDetails.img,price:productDetails.price,quantity:parseInt(quantity)}]
        }
        // this.setState({
        //     shoppingCart:add_shoppingCart,
        //     itemCount:this.state.itemCount+parseInt(quantity)
        // })
        setShoppingCart(add_shoppingCart)
        setItemCount(itemCount+parseInt(quantity))
    }

    const increaseQuantity=(productDetails)=>{
        let add_shoppingCart=shoppingCart
        shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        const position = shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        add_shoppingCart[position].quantity+=1
        // this.setState({
        //     shoppingCart:add_shoppingCart,
        //     itemCount:this.state.itemCount+1
        // })
        setShoppingCart(add_shoppingCart)
        setItemCount(itemCount+1)
    }

    const decreaseQuantity=(productDetails)=>{
        let add_shoppingCart=shoppingCart
        shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        const position = shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        if(add_shoppingCart[position].quantity===1){
            add_shoppingCart.splice(position,1)
        }else{add_shoppingCart[position].quantity-=1}
        // this.setState({
        //     shoppingCart:add_shoppingCart,
        //     itemCount:this.state.itemCount-1
        // })
        setShoppingCart(add_shoppingCart)
        setItemCount(itemCount-1)
    }

    const removeItem=(productDetails)=>{
        let add_shoppingCart=shoppingCart
        shoppingCart.find(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        const position = shoppingCart.findIndex(shoppingCart_item => shoppingCart_item.name===productDetails.name)
        add_shoppingCart.splice(position,1)
        const newItemCount=shoppingCart.reduce((total, product)=>total+(product.quantity),0)
        // this.setState({
        //     shoppingCart:add_shoppingCart,
        //     itemCount:newItemCount
        // })
        setShoppingCart(add_shoppingCart)
        setItemCount(newItemCount)
    }

    return(
        <div className="body">
            <div className="header">
                <Header itemCount={itemCount}/>
            </div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/products" element={<Products productData={productData} addItem={addItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>} />
                    <Route path="/shopping_cart" element={<Cart shoppingCart={shoppingCart} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} itemCount={itemCount}/>} />
                </Routes>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )

}

export default Main;