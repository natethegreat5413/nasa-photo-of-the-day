import React from 'react'
import './header.css'
import { Badge } from 'reactstrap';
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-image: url("trees&stars.jpg");
    background-color: white;
    padding: 20px;
`


function Header(props){
    
    return(
        <StyledDiv className='headerDiv'>
            <h1>THIS IS NASA</h1>
            <Badge>{props.date}</Badge>
        </StyledDiv>
    )
}


export default Header


