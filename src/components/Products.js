import React, { Component } from "react";
import productData from '../assets/productData'

class Products extends Component{

    constructor(){
        super()
        this.state={productData}
    }


    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                {this.state.productData.map((product,id)=>{
                    return(
                        <div className='col-4 mt-3'>
                            <div className='card h-100 shadow'>
                                <img src={product.img} className="card-img-top img-fluid" alt={product.name}/>
                                <div className="card-body">
                                    <p className="card-title">{product.name}</p>
                                    <p className='card-text'>${product.price}</p>
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
}

export default Products;