import React from 'react'
import { Badge } from 'reactstrap';
import styled from 'styled-components'

const StyledFooter = styled.footer`
    margin: 10px 0px;
    background-color: black;
    color: red;
    padding-bottom: 5px;

    &:hover {
        background-color: white;
        color: green;
    }
`;


function Footer(){
    
    return(
        <div className="bottom-content">
            <StyledFooter>No Copywriting</StyledFooter>
        </div>
    )
}



export default Footer