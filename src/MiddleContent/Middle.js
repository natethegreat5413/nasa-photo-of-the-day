import React from 'react'
import './middle.css'
import styled from 'styled-components'

const StyledImg = styled.img`
    border-radius: 8px;
    width: 50%;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
    margin: 2% 0;
    transition: transform .2s;

    &:hover {
        transform: scale(1.2)
    }

    

`
const StyledParagraph = styled.p`
    margin: 0 auto;
    width:80%;
    padding: 10px;
`


function Middle(props){
    return(
    <div className='wrapperDiv'>
        
        <div className='img-title'>
            <h2>{props.title}</h2>
            <StyledImg src={props.hdurl} alt="image of the day"/>
         </div>  

         <div className='pDiv'> 
            <StyledParagraph className="description">{props.explanation}</StyledParagraph>
            </div>
            
    </div>
    )
}



export default Middle