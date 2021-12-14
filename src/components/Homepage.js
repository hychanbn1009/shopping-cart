import React from 'react'
import zakuteam from '../assets/images/icon.jpeg'
import zaku2 from '../assets/images/zaku2.webp'
import sm from '../assets/images/SM.webp'
import zaku2v2 from '../assets/images/zaku2v2.webp'
import client1 from'../assets/images/soldier1.webp'
import client2 from'../assets/images/soldier2.webp'

const Homepage=()=>{
    return(
        <div>
            <div className='container mt-5'>
                <div className='row align-items-center'>
                    <div className='col-sm-8'>
                        <img src={zakuteam} className='img-fluid' alt='Zaku'></img>
                    </div>
                    <div className='col-sm-4'> 
                        <h1>The Best Moblie Suit</h1>
                        <p>The successor to the first fielded MS, the MS-05 Zaku I, the Zaku II improved on everything the previous model offered. It was faster, more durable, had a superior reactor, and could be fitted with more weapons. The Zaku II was the mainstay of the Zeon military for most of the One Year War.</p>
                    </div>
                </div>
            </div>
            <div className='container vh-100 mt-5 align-items-center'>
                <div className='row justify-content-center'>
                    <h1 className='text-center mt-5'>Why Zaku?</h1>
                    <div className='col-8'>
                    <p className='text-center mt-5'>Many famous Zeon ace pilots began their career in the MS-06C, including Johnny Ridden, Shin Matsunaga, and Char Aznable. Notably, Ridden was able to sink three battleships in his MS-06C during the One Week Battle. The Black Tri-Stars also piloted the MS-06C when they captured General Revil during the Battle of Loum.</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-4'>
                        <div className='card h-100 shadow'>
                            <img src={zaku2} className="card-img-top img-fluid" alt="zaku 2"/>
                            <div className="card-body">
                                <p className="card-text">The Best Tech from Zeon</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100 shadow'>
                            <img src={sm} className="card-img-top img-fluid" alt="zaku 2"/>
                            <div className="card-body">
                                <p className="card-text">Customized For Ace</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card h-100 shadow'>
                            <img src={zaku2v2} className="card-img-top img-fluid" alt="zaku 2"/>
                            <div className="card-body">
                                <p className="card-text">Armaments for different purpose</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5 align-items-center'>
                <div className='row mt-5'>
                    <h1 className='text-center'>Clients Feedback</h1>
                </div>
                <div className='row mt-5 justify-content-center'>
                    <div className='col-3'>
                        <div className='card h-100 border-0'>
                            <img src={client1} className="card-img-top img-fluid" alt="zaku 2"/>
                            <div className="card-body">
                                <div className='card-title'>Sam</div>
                                <p className="card-text">I love Zaku</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='card h-100 border-0'>
                            <img src={client2} className="card-img-top img-fluid" alt="zaku 2"/>
                            <div className="card-body">
                                <div className='card-title'>Tony</div>
                                <p className="card-text">The best MS!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage