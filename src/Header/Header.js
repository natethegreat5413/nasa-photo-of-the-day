import React from 'react';
import styled from 'styled-components'

const WrapperDiv = styled.h1`
    color: yellow;
`


function Header(props) {
    
    return (
        <WrapperDiv>
            <h1 className="title">{props.title}</h1>
            <h3 className="date">{props.date}</h3>
        </WrapperDiv>
    )
}

export default Header;