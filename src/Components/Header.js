import React from 'react'
import '../index.css'
import styled from 'styled-components'

const MyHeader = styled.div`
    background: #353640;
    box-shadow: 0px 2px 5px #232229;
    padding: 20px 0;
    position:fixed;
    z-index: 1;
    width: 100%;
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
`;

const Header = () => {
    return(
    <MyHeader>
        <h1>Astronomy Image of the Day</h1>
        <p>Provided by NASA</p>
    </MyHeader>
    )
}

export default Header