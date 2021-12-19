import React from "react";


const Products =(props)=>{

    const add_shoppingCart=(index,quantity)=>{
        props.addItem(props.productData[index],quantity)
    }

    const increasePurchaseQty=(index,orginalValue)=>{
        document.getElementById(index).value=parseInt(orginalValue)+1
    }

    const decreasePurchaseQty=(index,orginalValue)=>{
        document.getElementById(index).value=parseInt(orginalValue)-1
    }

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    {props.productData.map((product,index)=>{
                        return(
                            <div className='col-lg-3 col-md-4 col-sm-6 mt-3 mb-3'>
                                <div className='card h-100 shadow'>
                                    <img src={product.img} className="card-img-top img-fluid" alt={product.name}/>
                                    <div className="card-body">
                                        <p className="card-title">{product.name}</p>
                                        <p className='card-text'>${product.price}</p>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-secondary" type="button" onClick={(event)=>decreasePurchaseQty(index,document.getElementById(index).value)}>-</button>
                                            </div>
                                            <input type="number"  id={product.id} className="form-control" min="1" defaultValue='1' max={product.stock} placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-secondary" type="button" onClick={(event)=>increasePurchaseQty(index,document.getElementById(index).value)}>+</button>
                                            </div>
                                        </div>
                                        <button type='button' className='btn btn-primary' onClick={(event)=>add_shoppingCart(index,document.getElementById(index).value)}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products;