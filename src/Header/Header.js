import React from 'react'
import './header.css'
function Header(props){
    
    return(
        <div className='headerDiv'>
            <h1>THIS IS NASA</h1>
            <h3>{props.date}</h3>
        </div>
    )
}


export default Header


