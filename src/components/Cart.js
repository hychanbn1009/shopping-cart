import React from "react";

const Cart =(props)=>{
    return(
        <div>
            {props.shoppingCart.map((product,index)=>{
                return(
                    <div>{product.name}</div>
                )
            })}
        </div>
    )
}

export default Cart;