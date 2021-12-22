import React from "react";

const Cart =(props)=>{

    const increaseQty=(product)=>{
        props.increaseQuantity(product)
    }

    const decreaseQty=(product)=>{
        props.decreaseQuantity(product)
    }

    const removeItem=(product)=>{
        props.removeItem(product)
    }
    
    const alertMessage=()=>{
        alert("we are still preparing the payment method! Thank you!")
    }

    function displayCard(){
        if(props.shoppingCart.length!==0){
            return(
                <div>
                    <div className="row">
                        <div className="col-8">
                            {props.shoppingCart.map((product,index)=>{
                            return(
                            <div className="card mt-3 mb-3">
                                <div className="row">
                                    <div className="col-md-4 col-lg-2">
                                    <img src={product.img} className="img-fluid rounded-start" alt={product.name}/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text">${product.price} x {product.quantity} = ${parseInt(product.price)*parseInt(product.quantity)}</p>
                                        <div className="d-flex justify-content-between">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-primary" onClick={(event)=>decreaseQty(product)}>-</button>
                                            <button type="button" className="btn btn-outline-dark"  disabled>{product.quantity}</button>
                                            <button type="button" className="btn btn-primary" onClick={(event)=>increaseQty(product)}>+</button>
                                        </div>
                                        <button type="button" className="btn btn-danger" onClick={(event)=>removeItem(product)}>Remove</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                                )
                            })}
                        </div>
                        <div className="col-4 mt-3 mb-3 bg-light">
                            <h2>Your Bag</h2>
                            <h4>You have {props.itemCount} items now.</h4>
                            {props.shoppingCart.map((product,index)=>{
                            return(
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">${parseInt(product.price)*parseInt(product.quantity)}</p>
                                </div>
                                </div>
                            )})}
                            <h4>TOTAL: ${props.shoppingCart.reduce((total, product)=>total+(product.price*product.quantity),0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                            <button type="button" className="btn btn-primary" onClick={()=>alertMessage()}>Check out</button>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="fs-1 fw-bolder align-middle text-center">-Your Bag is Empty-</p>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container h-100 justify-content-center align-items-center">
            <div className="row">
                {displayCard()}
            </div>
        </div>
    )
}

export default Cart;

// {displayCard()}