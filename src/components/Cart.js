import React from "react";

const Cart =(props)=>{

    const increaseQty=(product)=>{
        {console.log(product.quantity)}
        props.increaseQuantity(product)
    }

    const decreaseQty=(product)=>{
        props.decreaseQuantity(product)
    }

    function displayCard(){
        if(props.shoppingCart.length!==0){
            return(
                <div>
                {props.shoppingCart.map((product,index)=>{
                    return(
                    <div className="card mt-3 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={product.img} className="img-fluid rounded-start" alt={product.name}/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary" onClick={(event)=>decreaseQty(product)}>-</button>
                                <button type="button" className="btn btn-outline-dark"  disabled>{product.quantity}</button>
                                <button type="button" className="btn btn-primary" onClick={(event)=>increaseQty(product)}>+</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                })}
                </div>
            )
        }
        return (<p>no item</p>)
    }

    return(
        <div className="container">
            {displayCard()}
        </div>
    )
}

export default Cart;

// {props.shoppingCart.map((product,index)=>{}