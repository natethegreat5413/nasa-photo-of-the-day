import React from 'react'
import './middle.css'

function Middle(props){
    return(
    <div className='wrapperDiv'>
        <div className='img-title'>
            <h2>{props.title}</h2>
            <img src={props.hdurl} alt="image of the day"/>
         </div>  
         
         <div className='pDiv'> 
            <p className="description">{props.explanation}</p>
         </div>   
    </div>
    )
}



export default Middle