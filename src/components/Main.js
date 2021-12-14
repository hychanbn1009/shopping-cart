import React from 'react'
import Header from './Header'
import Homepage from './Homepage'
import Footer from './Footer'

const Main=()=>{
    return(
        <div>
            <Header/>
            <Homepage/>
            <Footer className='mt-auto'/>
        </div>
    )
}

export default Main;