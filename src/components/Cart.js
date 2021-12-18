import React from "react";

const Cart =(props)=>{

    const increaseQty=(product)=>{
        {console.log(product.quantity)}
        props.increaseQuantity(product)
    }

    const decreaseQty=(product)=>{
        props.decreaseQuantity(product)
    }

    const removeItem=(product)=>{
        props.removeItem(product)
    }
    
    function displayCard(){
        if(props.shoppingCart.length!==0){
            return(
                <div className="container">
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
                                        <p className="card-text">${product.price}</p>
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
                        <div className="col-4 vh-50 mt-3 mb-3 bg-light">
                            <h2>Your Bag</h2>
                            <h4>You have {props.itemCount} items now.</h4>
                            <h4>TOTAL: ${props.shoppingCart.reduce((total, product)=>total+(product.price*product.quantity),0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                            <button type="button" className="btn btn-primary">Check out</button>
                        </div>
                    </div>
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