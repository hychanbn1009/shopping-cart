import React from "react";


const Products =(props)=>{

    const add_shoppingCart=(index)=>{
        props.addItem(props.productData[index])
    }

    return(
        <div>
            <div className='container'>
                <div className='row'>
            {props.productData.map((product,index)=>{
                return(
                    <div className='col-lg-3 col-md-4 col-sm-6 mt-3 mb-3'>
                        <div className='card shadow'>
                            <img src={product.img} className="card-img-top img-fluid" alt={product.name}/>
                            <div className="card-body">
                                <p className="card-title">{product.name}</p>
                                <p className='card-text'>${product.price}</p>
                                <button type='button' className='btn btn-primary' onClick={(event)=>add_shoppingCart(index)}>Add</button>
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