import React from 'react'
import './middle.css'

function Image(props){
    return(
        <div className="image">
            <img src={props.hdurl} alt="image of the day"/>
        </div>
    )
}



export default Image